module Page.Home exposing (Model, Msg, page)

{-| -}

import App.Effect as Effect
import App.Sub
import Browser
import Html


type alias Model =
    String


type alias Msg =
    {}


page =
    { init =
        \params shared ->
            ( "HEllo!"
            , Effect.none
            )
    , update = \msg model -> ( model, Effect.none )
    , subscriptions = \model -> App.Sub.none
    , view =
        \model ->
            { title = "test"
            , body =
                Html.text model
            }
    }
