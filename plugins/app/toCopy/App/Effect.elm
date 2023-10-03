port module App.Effect exposing
    ( none, batch
    , pushUrl, replaceUrl, load, reload, forward, back
    , Effect, toCmd, map
    )

{-|

@docs none, batch

@docs pushUrl, replaceUrl, load, reload, forward, back


# Effects

@docs Effect, toCmd, map

-}

import Browser
import Browser.Dom
import Browser.Navigation
import Html
import Http
import Json.Encode


none : Effect msg
none =
    None


batch : List (Effect msg) -> Effect msg
batch =
    Batch


pushUrl : String -> Effect msg
pushUrl =
    PushUrl


replaceUrl : String -> Effect msg
replaceUrl =
    ReplaceUrl


load : String -> Effect msg
load =
    Load


reload : Effect msg
reload =
    Reload


forward : Int -> Effect msg
forward =
    Forward


back : Int -> Effect msg
back =
    Back


type Effect msg
    = None
    | Batch (List (Effect msg))
    | PushUrl String
    | ReplaceUrl String
    | Load String
    | Reload
    | Forward Int
    | Back Int
    | SendToWorld
        { tag : String
        , details : Maybe Json.Encode.Value
        }


port outgoing : { tag : String, details : Maybe Json.Encode.Value } -> Cmd msg


toCmd : { navKey : Browser.Navigation.Key } -> Effect msg -> Cmd msg
toCmd { navKey } effect =
    case effect of
        None ->
            Cmd.none

        Batch effects ->
            Cmd.batch (List.map (toCmd { navKey = navKey }) effects)

        PushUrl url ->
            Browser.Navigation.pushUrl navKey url

        ReplaceUrl url ->
            Browser.Navigation.replaceUrl navKey url

        Load url ->
            Browser.Navigation.load url

        Reload ->
            Browser.Navigation.reload

        Forward steps ->
            Browser.Navigation.forward navKey steps

        Back steps ->
            Browser.Navigation.back navKey steps

        SendToWorld outgoingMsg ->
            outgoing outgoingMsg


map : (a -> b) -> Effect a -> Effect b
map f effect =
    case effect of
        None ->
            None

        Batch effects ->
            Batch (List.map (map f) effects)

        PushUrl url ->
            PushUrl url

        ReplaceUrl url ->
            ReplaceUrl url

        Load url ->
            Load url

        Reload ->
            Reload

        Forward n ->
            Forward n

        Back n ->
            Back n

        SendToWorld { tag, details } ->
            SendToWorld { tag = tag, details = details }
