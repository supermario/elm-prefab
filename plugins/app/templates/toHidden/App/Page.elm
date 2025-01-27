module App.Page exposing
    ( Page, page
    , Init, init, initWith, notFound, loadFrom, error
    , withGuard, withKey, withPageCacheLimit
    , InitPlan(..), toInternalDetails, mapInitPlan
    )

{-|

@docs Page, page

@docs Init, init, initWith, notFound, loadFrom, error

@docs withGuard, withKey, withPageCacheLimit


# Internal Details

These are used internally and you shouldn't need to worry about them!

@docs InitPlan, toInternalDetails, mapInitPlan

-}

import App.Effect
import App.Page.Error
import App.Shared
import App.Sub
import App.View
import App.View.Id


type Page shared params msg model
    = Page
        { toKey : Maybe (params -> String)
        , pageCacheLimit : Int
        , init : params -> shared -> Maybe model -> Init msg model
        , update : shared -> msg -> model -> ( model, App.Effect.Effect msg )
        , subscriptions : shared -> model -> App.Sub.Sub msg
        , view : App.View.Id.Id -> shared -> model -> Result App.Page.Error.Error (App.View.View msg)
        }


{-| -}
page :
    { init : params -> App.Shared.Shared -> Maybe model -> Init msg model
    , update : App.Shared.Shared -> msg -> model -> ( model, App.Effect.Effect msg )
    , subscriptions : App.Shared.Shared -> model -> App.Sub.Sub msg
    , view : App.View.Id.Id -> App.Shared.Shared -> model -> App.View.View msg
    }
    -> Page App.Shared.Shared params msg model
page options =
    Page
        { toKey = Nothing
        , pageCacheLimit = 1
        , init = options.init
        , update = options.update
        , subscriptions = options.subscriptions
        , view =
            \region shared model ->
                Ok (options.view region shared model)
        }


{-| This is the key that is used to store the page's state globally.

It defaults to the page's name.

-}
withKey : (params -> String) -> Page shared params msg model -> Page shared params msg model
withKey toKey (Page options) =
    Page { options | toKey = Just toKey }


{-| This is the maximum number of page instances that will be cached, above what is already visible.

This defaults to 1.

-}
withPageCacheLimit : Int -> Page shared params msg model -> Page shared params msg model
withPageCacheLimit limit (Page options) =
    Page { options | pageCacheLimit = max 0 limit }


{-| -}
withGuard :
    (shared -> Result App.Page.Error.Error newShared)
    -> Page newShared params msg model
    -> Page shared params msg model
withGuard toShared (Page options) =
    Page
        { toKey = options.toKey
        , pageCacheLimit = options.pageCacheLimit
        , init =
            \params shared maybeModel ->
                case toShared shared of
                    Err err ->
                        Error err

                    Ok newShared ->
                        options.init params newShared maybeModel
        , update =
            \shared msg model ->
                case toShared shared of
                    Err err ->
                        ( model, App.Effect.none )

                    Ok newShared ->
                        options.update newShared msg model
        , subscriptions =
            \shared model ->
                case toShared shared of
                    Err err ->
                        App.Sub.none

                    Ok newShared ->
                        options.subscriptions newShared model
        , view =
            \region shared model ->
                case toShared shared of
                    Err err ->
                        Err err

                    Ok newShared ->
                        options.view region newShared model
        }


{-| -}
type alias Init msg model =
    InitPlan msg model


{-| -}
type InitPlan msg model
    = NotFound
    | Error App.Page.Error.Error
    | Loaded model (App.Effect.Effect msg)
    | LoadFrom (App.Effect.Effect (InitPlan msg model))


{-| -}
mapInitPlan :
    { onModel : model -> model2
    , onMsg : msg -> msg2
    }
    -> InitPlan msg model
    -> InitPlan msg2 model2
mapInitPlan ({ onModel, onMsg } as fns) initPlan =
    case initPlan of
        NotFound ->
            NotFound

        Error err ->
            Error err

        Loaded model effect ->
            Loaded (onModel model) (App.Effect.map onMsg effect)

        LoadFrom effect ->
            LoadFrom (App.Effect.map (mapInitPlan fns) effect)


{-| -}
init : model -> Init msg model
init model =
    Loaded model App.Effect.none


{-| -}
initWith : model -> App.Effect.Effect msg -> Init msg model
initWith model effect =
    Loaded model effect


{-| -}
notFound : Init msg model
notFound =
    NotFound


{-| -}
loadFrom : App.Effect.Effect (Init msg model) -> Init msg model
loadFrom effect =
    LoadFrom effect


{-| -}
error : App.Page.Error.Error -> Init msg model
error pageError =
    Error pageError



{- Internal -}


{-| -}
toInternalDetails :
    Page shared params msg model
    ->
        { toKey : Maybe (params -> String)
        , pageCacheLimit : Int
        , init : params -> shared -> Maybe model -> Init msg model
        , update : shared -> msg -> model -> ( model, App.Effect.Effect msg )
        , subscriptions : shared -> model -> App.Sub.Sub msg
        , view : App.View.Id.Id -> shared -> model -> Result App.Page.Error.Error (App.View.View msg)
        }
toInternalDetails (Page details) =
    details
