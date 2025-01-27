module Ui.Markdown exposing (parse, render)

import Html exposing (Html)
import Html.Attributes
import Http
import Markdown.Block as Block
import Markdown.Parser
import Markdown.Renderer
import Ui
import Ui.Font
import Ui.Table
import Ui.Theme


parse : String -> Result (List String) (List Block.Block)
parse src =
    Markdown.Parser.parse src
        |> Result.mapError (List.map Markdown.Parser.deadEndToString)


render : Block.Block -> Ui.Element msg
render block =
    case block of
        Block.Heading Block.H1 content ->
            Ui.Theme.h1 []
                (Block.extractInlineText content)

        Block.Heading Block.H2 content ->
            Ui.Theme.h2 []
                (Block.extractInlineText content)

        Block.Heading _ content ->
            Ui.Theme.h2 []
                (Block.extractInlineText content)

        Block.Paragraph inlines ->
            paragraph []
                (List.map renderInline inlines)

        Block.HtmlBlock html ->
            Ui.none

        Block.UnorderedList tight items ->
            Ui.column [ Ui.Theme.spacing.sm ]
                (List.map
                    (\(Block.ListItem checked innerBlocks) ->
                        Ui.row [ Ui.Theme.spacing.sm ]
                            [ Ui.text "•"
                            , paragraph [] (List.map render innerBlocks)
                            ]
                    )
                    items
                )

        Block.OrderedList tight startingIndex items ->
            Ui.column [ Ui.Theme.spacing.sm ]
                (List.indexedMap
                    (\index innerBlocks ->
                        Ui.row [ Ui.Theme.spacing.sm ]
                            [ Ui.text (String.fromInt (startingIndex + index))
                            , paragraph [] (List.map render innerBlocks)
                            ]
                    )
                    items
                )

        Block.CodeBlock codeBlock ->
            Ui.none

        Block.ThematicBreak ->
            Ui.el
                [ Ui.height (Ui.px 1)
                , Ui.background (Ui.rgb 0 0 0)
                , Ui.width Ui.fill
                ]
                Ui.none

        Block.BlockQuote nestedBlocks ->
            paragraph [ Ui.Theme.padding.lg ]
                (List.map render nestedBlocks)

        Block.Table headers rows ->
            let
                columns =
                    Ui.Table.columns
                        (List.indexedMap
                            (\index cell ->
                                let
                                    isNumeric =
                                        rows
                                            |> List.take 3
                                            |> List.any
                                                (isNumericText << Block.extractInlineText << getIndex index)
                                in
                                Ui.Table.column
                                    { header =
                                        header
                                            [ if isNumeric then
                                                Ui.alignRight

                                              else
                                                Ui.noAttr
                                            ]
                                            (Block.extractInlineText cell.label)
                                    , view =
                                        \row ->
                                            let
                                                inlines =
                                                    getIndex index row
                                            in
                                            inlines
                                                |> List.map renderInline
                                                |> paragraph
                                                    [ if isNumeric then
                                                        Ui.alignRight

                                                      else
                                                        Ui.width Ui.fill
                                                    ]
                                                |> Ui.el [ Ui.width Ui.fill ]
                                                |> Ui.Table.cell
                                                    [ if index == 0 then
                                                        Ui.width (Ui.px 10)

                                                      else
                                                        Ui.noAttr
                                                    ]
                                    }
                                    |> Ui.Table.withWidth
                                        { fill = index /= 0
                                        , min = Nothing
                                        , max = Nothing
                                        }
                            )
                            headers
                        )
            in
            Ui.Table.view [ Ui.width Ui.fill ] columns rows


renderInline : Block.Inline -> Ui.Element msg
renderInline inline =
    case inline of
        Block.Strong innerInlines ->
            paragraph [ Ui.Font.weight Ui.Font.bold ]
                (List.map renderInline innerInlines)

        Block.Emphasis innerInlines ->
            paragraph [ Ui.Font.italic ]
                (List.map renderInline innerInlines)

        Block.Strikethrough innerInlines ->
            paragraph [ Ui.Font.strike ]
                (List.map renderInline innerInlines)

        Block.Image src title children ->
            Ui.none

        Block.Text string ->
            Ui.text string

        Block.CodeSpan string ->
            Ui.el
                [ Ui.Theme.padding.lg
                , Ui.Theme.border.small
                ]
                (Ui.text string)

        Block.Link destination title inlines ->
            Ui.el [ Ui.link destination ]
                (Ui.text (Block.extractInlineText inlines))

        Block.HardLineBreak ->
            Ui.el [ Ui.Font.exactWhitespace ]
                (Ui.html (Html.text "\n"))

        Block.HtmlInline html ->
            Ui.none


isNumericText : String -> Bool
isNumericText str =
    String.any Char.isDigit str


getIndex : Int -> List (List thing) -> List thing
getIndex index items =
    case items of
        [] ->
            []

        first :: remaining ->
            if index <= 0 then
                first

            else
                getIndex (index - 1) remaining


header attrs content =
    Ui.Table.cell
        [ Ui.borderWith
            { color = Ui.rgb 200 200 200
            , width =
                { top = 0
                , left = 0
                , right = 0
                , bottom = 1
                }
            }
        , Ui.paddingEach
            { top = 16
            , left = 16
            , right = 16
            , bottom = 8
            }
        , Ui.height Ui.fill
        ]
        (Ui.el [ Ui.width Ui.fill ]
            (Ui.el attrs (Ui.text content))
        )


paragraph attrs =
    Ui.paragraph (Ui.Font.lineHeight 1.4 :: attrs)
