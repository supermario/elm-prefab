
import * as path from "path";
import * as fs from "fs";
import * as Options from "../../options";

export const copyTo = (baseDir: string, overwrite: boolean, summary: Options.Summary) => { 
  
  if (overwrite || !fs.existsSync(path.join(baseDir, "/App/Page.elm"))) {
    const filepath = path.join(baseDir, "/App/Page.elm");
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, "module App.Page exposing\n    ( Page, page\n    , Init, init, initWith, notFound, loadFrom, error\n    , withGuard, withKey, withPageCacheLimit\n    , InitPlan(..), toInternalDetails, mapInitPlan\n    )\n\n{-|\n\n@docs Page, page\n\n@docs Init, init, initWith, notFound, loadFrom, error\n\n@docs withGuard, withKey, withPageCacheLimit\n\n\n# Internal Details\n\nThese are used internally and you shouldn't need to worry about them!\n\n@docs InitPlan, toInternalDetails, mapInitPlan\n\n-}\n\nimport App.Effect\nimport App.Page.Error\nimport App.Shared\nimport App.Sub\nimport App.View\nimport App.View.Id\n\n\ntype Page shared params msg model\n    = Page\n        { toKey : Maybe (params -> String)\n        , pageCacheLimit : Int\n        , init : params -> shared -> Maybe model -> Init msg model\n        , update : shared -> msg -> model -> ( model, App.Effect.Effect msg )\n        , subscriptions : shared -> model -> App.Sub.Sub msg\n        , view : App.View.Id.Id -> shared -> model -> Result App.Page.Error.Error (App.View.View msg)\n        }\n\n\n{-| -}\npage :\n    { init : params -> App.Shared.Shared -> Maybe model -> Init msg model\n    , update : App.Shared.Shared -> msg -> model -> ( model, App.Effect.Effect msg )\n    , subscriptions : App.Shared.Shared -> model -> App.Sub.Sub msg\n    , view : App.View.Id.Id -> App.Shared.Shared -> model -> App.View.View msg\n    }\n    -> Page App.Shared.Shared params msg model\npage options =\n    Page\n        { toKey = Nothing\n        , pageCacheLimit = 1\n        , init = options.init\n        , update = options.update\n        , subscriptions = options.subscriptions\n        , view =\n            \\region shared model ->\n                Ok (options.view region shared model)\n        }\n\n\n{-| This is the key that is used to store the page's state globally.\n\nIt defaults to the page's name.\n\n-}\nwithKey : (params -> String) -> Page shared params msg model -> Page shared params msg model\nwithKey toKey (Page options) =\n    Page { options | toKey = Just toKey }\n\n\n{-| This is the maximum number of page instances that will be cached, above what is already visible.\n\nThis defaults to 1.\n\n-}\nwithPageCacheLimit : Int -> Page shared params msg model -> Page shared params msg model\nwithPageCacheLimit limit (Page options) =\n    Page { options | pageCacheLimit = max 0 limit }\n\n\n{-| -}\nwithGuard :\n    (shared -> Result App.Page.Error.Error newShared)\n    -> Page newShared params msg model\n    -> Page shared params msg model\nwithGuard toShared (Page options) =\n    Page\n        { toKey = options.toKey\n        , pageCacheLimit = options.pageCacheLimit\n        , init =\n            \\params shared maybeModel ->\n                case toShared shared of\n                    Err err ->\n                        Error err\n\n                    Ok newShared ->\n                        options.init params newShared maybeModel\n        , update =\n            \\shared msg model ->\n                case toShared shared of\n                    Err err ->\n                        ( model, App.Effect.none )\n\n                    Ok newShared ->\n                        options.update newShared msg model\n        , subscriptions =\n            \\shared model ->\n                case toShared shared of\n                    Err err ->\n                        App.Sub.none\n\n                    Ok newShared ->\n                        options.subscriptions newShared model\n        , view =\n            \\region shared model ->\n                case toShared shared of\n                    Err err ->\n                        Err err\n\n                    Ok newShared ->\n                        options.view region newShared model\n        }\n\n\n{-| -}\ntype alias Init msg model =\n    InitPlan msg model\n\n\n{-| -}\ntype InitPlan msg model\n    = NotFound\n    | Error App.Page.Error.Error\n    | Loaded model (App.Effect.Effect msg)\n    | LoadFrom (App.Effect.Effect (InitPlan msg model))\n\n\n{-| -}\nmapInitPlan :\n    { onModel : model -> model2\n    , onMsg : msg -> msg2\n    }\n    -> InitPlan msg model\n    -> InitPlan msg2 model2\nmapInitPlan ({ onModel, onMsg } as fns) initPlan =\n    case initPlan of\n        NotFound ->\n            NotFound\n\n        Error err ->\n            Error err\n\n        Loaded model effect ->\n            Loaded (onModel model) (App.Effect.map onMsg effect)\n\n        LoadFrom effect ->\n            LoadFrom (App.Effect.map (mapInitPlan fns) effect)\n\n\n{-| -}\ninit : model -> Init msg model\ninit model =\n    Loaded model App.Effect.none\n\n\n{-| -}\ninitWith : model -> App.Effect.Effect msg -> Init msg model\ninitWith model effect =\n    Loaded model effect\n\n\n{-| -}\nnotFound : Init msg model\nnotFound =\n    NotFound\n\n\n{-| -}\nloadFrom : App.Effect.Effect (Init msg model) -> Init msg model\nloadFrom effect =\n    LoadFrom effect\n\n\n{-| -}\nerror : App.Page.Error.Error -> Init msg model\nerror pageError =\n    Error pageError\n\n\n\n{- Internal -}\n\n\n{-| -}\ntoInternalDetails :\n    Page shared params msg model\n    ->\n        { toKey : Maybe (params -> String)\n        , pageCacheLimit : Int\n        , init : params -> shared -> Maybe model -> Init msg model\n        , update : shared -> msg -> model -> ( model, App.Effect.Effect msg )\n        , subscriptions : shared -> model -> App.Sub.Sub msg\n        , view : App.View.Id.Id -> shared -> model -> Result App.Page.Error.Error (App.View.View msg)\n        }\ntoInternalDetails (Page details) =\n    details\n");
    const generated = { outputDir: baseDir, path: filepath}
    Options.addGenerated(summary, generated);
  }

  if (overwrite || !fs.existsSync(path.join(baseDir, "/App/State.elm"))) {
    const filepath = path.join(baseDir, "/App/State.elm");
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, "module App.State exposing\n    ( Cache, init, get\n    , insert\n    , remove, purge\n    , values\n    , Limit, initLimit\n    , addToLimit, removeFromLimit\n    )\n\n{-|\n\n@docs Cache, init, get\n\n@docs insert\n\n@docs remove, purge\n\n@docs values\n\n@docs Limit, initLimit\n@docs addToLimit, removeFromLimit\n\n-}\n\nimport Dict\nimport Set\n\n\ntype Cache state\n    = Cache (Dict.Dict String state)\n\n\n{-| -}\ninit : Cache state\ninit =\n    Cache Dict.empty\n\n\n{-| -}\nget : String -> Cache state -> Maybe state\nget key (Cache cache) =\n    Dict.get key cache\n\n\n{-| -}\ninsert : String -> state -> Cache state -> Cache state\ninsert key newState (Cache cache) =\n    Cache (Dict.insert key newState cache)\n\n\n{-| -}\nremove : String -> Cache state -> Cache state\nremove key (Cache cache) =\n    Cache (Dict.remove key cache)\n\n\n{-| -}\npurge : List String -> Cache state -> Cache state\npurge keys (Cache cache) =\n    Cache (List.foldl Dict.remove cache keys)\n\n\n{-| -}\nvalues : Cache state -> List state\nvalues (Cache cache) =\n    Dict.values cache\n\n\n{-| A data structure for keeping tracking of the number of instances per page-group we have.\n-}\ntype Limit\n    = Limit (Dict.Dict String (List String))\n\n\n{-| -}\ninitLimit : Limit\ninitLimit =\n    Limit Dict.empty\n\n\n{-| -}\nremoveFromLimit :\n    { groupId : String\n    , instanceId : String\n    }\n    -> Limit\n    -> Limit\nremoveFromLimit { groupId, instanceId } (Limit groups) =\n    let\n        group =\n            Dict.get groupId groups\n                |> Maybe.withDefault []\n\n        newGroup =\n            List.filter (\\id -> id /= instanceId) group\n    in\n    Limit (Dict.insert groupId newGroup groups)\n\n\n{-|\n\n    - group is the page-group name.\n    - instance is the id of the instance.\n    - max is the number of items allowed, ignoring everything in the `keep` set.\n    - keep is a set of ids that should not be removed.\n\n-}\naddToLimit :\n    { groupId : String\n    , instanceId : String\n    , max : Int\n    , keep : Set.Set String\n    }\n    -> Limit\n    ->\n        { limit : Limit\n        , removedIds : List String\n        }\naddToLimit { groupId, instanceId, max, keep } (Limit groups) =\n    let\n        group =\n            Dict.get groupId groups\n                |> Maybe.withDefault []\n\n        ( removableIds, necessaryInstanceIds ) =\n            List.partition (\\id -> id /= instanceId && not (Set.member id keep)) group\n\n        removedIds =\n            -- Remove everything beyond the limit.\n            List.drop max removableIds\n\n        cachedIds =\n            List.take max removableIds\n    in\n    { limit =\n        groups\n            |> Dict.insert groupId\n                (instanceId :: necessaryInstanceIds ++ cachedIds)\n            |> Limit\n    , removedIds = removedIds\n    }\n");
    const generated = { outputDir: baseDir, path: filepath}
    Options.addGenerated(summary, generated);
  }
}
