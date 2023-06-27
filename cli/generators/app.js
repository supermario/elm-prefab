(function (scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        var curried = function (a) {
            return function (b) {
                return fun(a, b);
            };
        };
        curried.a2 = fun;
        return curried;
    }
    function F3(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return fun(a, b, c);
                };
            };
        };
        curried.a3 =
            fun;
        return curried;
    }
    function F4(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        };
        curried.a4 = fun;
        return curried;
    }
    function F5(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        };
        curried.a5 = fun;
        return curried;
    }
    function F6(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        };
        curried.a6 = fun;
        return curried;
    }
    function F7(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        };
        curried.
            a7 = fun;
        return curried;
    }
    function F8(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried.a8 = fun;
        return curried;
    }
    function F9(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried
            .a9 = fun;
        return curried;
    }
    function A2(fun, a, b) {
        return fun.a2 ? fun.a2(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a5 ? fun.a5(a, b, c, d, e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize_fn = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_fn);
    var _JsArray_initializeFromList_fn = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_fn);
    var _JsArray_unsafeGet_fn = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_fn);
    var _JsArray_unsafeSet_fn = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_fn);
    var _JsArray_push_fn = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_fn);
    var _JsArray_foldl_fn = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl_fn_unwrapped = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_fn);
    var _JsArray_foldr_fn = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr_fn_unwrapped = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_fn);
    var _JsArray_map_fn = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_fn);
    var _JsArray_indexedMap_fn = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap_fn_unwrapped = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_fn);
    var _JsArray_slice_fn = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_fn);
    var _JsArray_appendN_fn = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_fn);
    var _Debug_log_fn = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_fn);
    var _Debug_log_UNUSED_fn = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_fn);
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.s.az === region.j.az) {
            return "on line " + region.s.az;
        }
        return "on lines " + region.s.az + " through " + region.j.az;
    }
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        if (x.$ < 0) {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_fn = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_fn);
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1;
        }
        if (typeof x.$ === "undefined") {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
    }
    var _Utils_lt_fn = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_fn);
    var _Utils_le_fn = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_fn);
    var _Utils_gt_fn = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_fn);
    var _Utils_ge_fn = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_fn);
    var _Utils_compare_fn = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_fn);
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    }
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
            return xs + ys;
        }
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_fn = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2_fn_unwrapped = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(f(xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_fn);
    var _List_map3_fn = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3_fn_unwrapped = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_fn);
    var _List_map4_fn = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4_fn_unwrapped = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_fn);
    var _List_map5_fn = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5_fn_unwrapped = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_fn);
    var _List_sortBy_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_fn);
    var _List_sortWith_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith_fn_unwrapped = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = f(a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_fn);
    var _Basics_add_fn = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_fn);
    var _Basics_sub_fn = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_fn);
    var _Basics_mul_fn = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_fn);
    var _Basics_fdiv_fn = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_fn);
    var _Basics_idiv_fn = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_fn);
    var _Basics_pow_fn = Math.pow, _Basics_pow = F2(_Basics_pow_fn);
    var _Basics_remainderBy_fn = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_fn);
    var _Basics_modBy_fn = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_fn);
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2_fn = Math.atan2, _Basics_atan2 = F2(_Basics_atan2_fn);
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_fn = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_fn);
    var _Basics_or_fn = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_fn);
    var _Basics_xor_fn = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_fn);
    var _String_cons_fn = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_fn);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_fn = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_fn);
    function _String_length(str) {
        return str.length;
    }
    var _String_map_fn = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_fn);
    var _String_filter_fn = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_fn);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_fn = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl_fn_unwrapped = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_fn);
    var _String_foldr_fn = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr_fn_unwrapped = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_fn);
    var _String_split_fn = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_fn);
    var _String_join_fn = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_fn);
    var _String_slice_fn = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_fn);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_fn);
    var _String_all_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_fn);
    var _String_contains_fn = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_fn);
    var _String_startsWith_fn = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_fn);
    var _String_endsWith_fn = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_fn);
    var _String_indexes_fn = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_fn);
    function _String_fromNumber(number) {
        return number + "";
    }
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_fn = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_fn);
    var _Json_decodeIndex_fn = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_fn);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_fn = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_fn);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    var _Json_map1_fn = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_fn);
    var _Json_map2_fn = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_fn);
    var _Json_map3_fn = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_fn);
    var _Json_map4_fn = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_fn);
    var _Json_map5_fn = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_fn);
    var _Json_map6_fn = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_fn);
    var _Json_map7_fn = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_fn);
    var _Json_map8_fn = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_fn);
    var _Json_runOnString_fn = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_fn);
    var _Json_run_fn = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_fn);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_fn(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("Expecting " + type, _Json_wrap(value)));
    }
    function _Json_equality(x, y) {
        if (x === y) {
            return true;
        }
        if (x.$ !== y.$) {
            return false;
        }
        switch (x.$) {
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    var _Json_encode_fn = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_fn);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_fn = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_fn);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    var _Parser_isSubString_fn = function (smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for (var i = 0; isGood && i < smallLength;) {
            var code = bigString.charCodeAt(offset);
            isGood =
                smallString[i++] === bigString[offset++]
                    && (code === 10
                        ? (row++, col = 1)
                        : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
    }, _Parser_isSubString = F5(_Parser_isSubString_fn);
    var _Parser_isSubChar_fn = function (predicate, offset, string) {
        return (string.length <= offset
            ? -1
            :
                (string.charCodeAt(offset) & 63488) === 55296
                    ? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
                    :
                        (predicate(_Utils_chr(string[offset]))
                            ? ((string[offset] === "\n") ? -2 : (offset + 1))
                            : -1));
    }, _Parser_isSubChar = F3(_Parser_isSubChar_fn);
    var _Parser_isAsciiCode_fn = function (code, offset, string) {
        return string.charCodeAt(offset) === code;
    }, _Parser_isAsciiCode = F3(_Parser_isAsciiCode_fn);
    var _Parser_chompBase10_fn = function (offset, string) {
        for (; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (code < 48 || 57 < code) {
                return offset;
            }
        }
        return offset;
    }, _Parser_chompBase10 = F2(_Parser_chompBase10_fn);
    var _Parser_consumeBase_fn = function (base, offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var digit = string.charCodeAt(offset) - 48;
            if (digit < 0 || base <= digit)
                break;
            total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase = F3(_Parser_consumeBase_fn);
    var _Parser_consumeBase16_fn = function (offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (48 <= code && code <= 57) {
                total = 16 * total + code - 48;
            }
            else if (65 <= code && code <= 70) {
                total = 16 * total + code - 55;
            }
            else if (97 <= code && code <= 102) {
                total = 16 * total + code - 87;
            }
            else {
                break;
            }
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase16 = F2(_Parser_consumeBase16_fn);
    var _Parser_findSubString_fn = function (smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while (offset < target) {
            var code = bigString.charCodeAt(offset++);
            code === 10
                ? (col = 1, row++)
                : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
    }, _Parser_findSubString = F5(_Parser_findSubString_fn);
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_fn = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_fn);
    var _Scheduler_onError_fn = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_fn);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_fn = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_fn);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i;
                }
                if (!proc.g) {
                    return;
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    var _Platform_worker_fn = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.g6, impl.h0, impl.hR, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_fn);
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_fn(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_fn(loop, info.b));
    }
    var _Platform_sendToApp_fn = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_fn);
    var _Platform_sendToSelf_fn = function (router, msg) {
        return _Scheduler_send_fn(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_fn);
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_fn = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_fn);
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_fn = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_fn);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1);
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_fn = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_fn);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        function send(incomingValue) {
            var result = _Json_run_fn(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    var _Bitwise_and_fn = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_fn);
    var _Bitwise_or_fn = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_fn);
    var _Bitwise_xor_fn = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_fn);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_fn = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_fn);
    var _Bitwise_shiftRightBy_fn = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_fn);
    var _Bitwise_shiftRightZfBy_fn = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_fn);
    var _Regex_never = /.^/;
    var _Regex_fromStringWith_fn = function (options, string) {
        var flags = "g";
        if (options.hh) {
            flags += "m";
        }
        if (options.gC) {
            flags += "i";
        }
        try {
            return $elm$core$Maybe$Just(new RegExp(string, flags));
        }
        catch (error) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Regex_fromStringWith = F2(_Regex_fromStringWith_fn);
    var _Regex_contains_fn = function (re, string) {
        return string.match(re) !== null;
    }, _Regex_contains = F2(_Regex_contains_fn);
    var _Regex_findAtMost_fn = function (n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
            if (prevLastIndex == re.lastIndex)
                break;
            var i = result.length - 1;
            var subs = new Array(i);
            while (i > 0) {
                var submatch = result[i];
                subs[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            out.push($elm$regex$Regex$Match_fn(result[0], result.index, number, _List_fromArray(subs)));
            prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
    }, _Regex_findAtMost = F3(_Regex_findAtMost_fn);
    var _Regex_replaceAtMost_fn = function (n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
            if (count++ >= n) {
                return match;
            }
            var i = arguments.length - 3;
            var submatches = new Array(i);
            while (i > 0) {
                var submatch = arguments[i];
                submatches[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            return replacer($elm$regex$Regex$Match_fn(match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
    }, _Regex_replaceAtMost = F4(_Regex_replaceAtMost_fn);
    var _Regex_splitAtMost_fn = function (n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
            var result = re.exec(string);
            if (!result)
                break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
    }, _Regex_splitAtMost = F3(_Regex_splitAtMost_fn);
    var _Regex_infinity = Infinity;
    function _Url_percentEncode(string) {
        return encodeURIComponent(string);
    }
    function _Url_percentDecode(string) {
        try {
            return $elm$core$Maybe$Just(decodeURIComponent(string));
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }
    var $author$project$Press$Generate$Options_fn = function (assets, elmPages) {
        return { bA: assets, cq: elmPages };
    }, $author$project$Press$Generate$Options = F2($author$project$Press$Generate$Options_fn);
    var $author$project$Press$Generate$SourceDirectory_fn = function (base, files) {
        return { bJ: base, gY: files };
    }, $author$project$Press$Generate$SourceDirectory = F2($author$project$Press$Generate$SourceDirectory_fn);
    var $author$project$Press$Generate$Source_fn = function (path, contents) {
        return { b8: contents, hy: path };
    }, $author$project$Press$Generate$Source = F2($author$project$Press$Generate$Source_fn);
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_fn(func, acc, values);
            }
        });
        return _JsArray_foldr_fn(helper, _JsArray_foldr_fn(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_fn);
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_fn($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr_fn = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_fn(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr_fn_unwrapped = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldr_fn_unwrapped(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_fn);
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }, _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }, _List_Nil, dict);
    };
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_fn);
    var $elm$json$Json$Decode$Field_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_fn);
    var $elm$json$Json$Decode$Index_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_fn);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a: a }; };
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_fn = function (sep, chunks) {
        return _String_join_fn(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_fn);
    var $elm$core$String$split_fn = function (sep, string) {
        return _List_fromArray(_String_split_fn(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_fn);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_fn("\n    ", $elm$core$String$split_fn("\n", str));
    };
    var $elm$core$List$foldl_fn = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl_fn_unwrapped = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_fn);
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, i) {
            return i + 1;
        }, 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp_fn = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_fn);
    var $elm$core$List$range_fn = function (lo, hi) {
        return $elm$core$List$rangeHelp_fn(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_fn);
    var $elm$core$List$indexedMap_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap_fn_unwrapped = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(f(i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_fn);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_fn = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_fn);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_fn(error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp_fn = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_fn($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_fn("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_fn($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_fn("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_fn(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_fn);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_fn);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_fn = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_fn);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_fn = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_fn);
    var $elm$core$Basics$apR_fn = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_fn);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_fn = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_fn);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
            }
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_fn);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_fn);
    var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
        if (!builder.w) {
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.fG), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.fG);
        }
        else {
            var treeLen = builder.w * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.A) : builder.A;
            var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.w);
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.fG) + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.fG);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_fn);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_fn = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_fn(false, { A: nodeList, w: (len / $elm$core$Array$branchFactor) | 0, fG: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_fn($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_fn);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_fn = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_fn(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_fn(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_fn);
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $author$project$Press$Generate$decodeSource = _Json_map2_fn($author$project$Press$Generate$Source, _Json_decodeField_fn("path", $elm$json$Json$Decode$string), _Json_decodeField_fn("contents", $elm$json$Json$Decode$string));
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $author$project$Press$Generate$decodeDirectory = _Json_map2_fn($author$project$Press$Generate$SourceDirectory, _Json_decodeField_fn("base", $elm$json$Json$Decode$string), _Json_decodeField_fn("files", $elm$json$Json$Decode$list($author$project$Press$Generate$decodeSource)));
    var $author$project$Press$Generate$ElmPage_fn = function (urls, id, source) {
        return { ay: id, hL: source, gj: urls };
    }, $author$project$Press$Generate$ElmPage = F3($author$project$Press$Generate$ElmPage_fn);
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$fail = _Json_fail;
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $author$project$Press$Model$UrlPattern = $elm$core$Basics$identity;
    var $elm$parser$Parser$Advanced$Bad_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Bad = F2($elm$parser$Parser$Advanced$Bad_fn);
    var $elm$parser$Parser$Advanced$Good_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $elm$parser$Parser$Advanced$Good = F3($elm$parser$Parser$Advanced$Good_fn);
    var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
    var $elm$parser$Parser$Advanced$map2_fn = function (func, _v0, _v1) {
        var parseA = _v0;
        var parseB = _v1;
        return function (s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 1) {
                var p = _v2.a;
                var x = _v2.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, A2(func, a, b), s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$map2_fn_unwrapped = function (func, _v0, _v1) {
        var parseA = _v0;
        var parseB = _v1;
        return function (s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 1) {
                var p = _v2.a;
                var x = _v2.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, func(a, b), s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$map2 = F3($elm$parser$Parser$Advanced$map2_fn);
    var $elm$parser$Parser$Advanced$keeper_fn = function (parseFunc, parseArg) {
        return $elm$parser$Parser$Advanced$map2_fn($elm$core$Basics$apL, parseFunc, parseArg);
    }, $elm$parser$Parser$Advanced$keeper = F2($elm$parser$Parser$Advanced$keeper_fn);
    var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
    var $elm$parser$Parser$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$parser$Parser$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Press$Model$Token = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Press$Model$Variable = function (a) {
        return { $: 1, a: a };
    };
    var $elm$parser$Parser$UnexpectedChar = { $: 11 };
    var $elm$parser$Parser$Advanced$AddRight_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$parser$Parser$Advanced$AddRight = F2($elm$parser$Parser$Advanced$AddRight_fn);
    var $elm$parser$Parser$Advanced$DeadEnd_fn = function (row, col, problem, contextStack) {
        return { b1: col, gK: contextStack, hA: problem, hI: row };
    }, $elm$parser$Parser$Advanced$DeadEnd = F4($elm$parser$Parser$Advanced$DeadEnd_fn);
    var $elm$parser$Parser$Advanced$Empty = { $: 0 };
    var $elm$parser$Parser$Advanced$fromState_fn = function (s, x) {
        return $elm$parser$Parser$Advanced$AddRight_fn($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_fn(s.hI, s.b1, x, s.i));
    }, $elm$parser$Parser$Advanced$fromState = F2($elm$parser$Parser$Advanced$fromState_fn);
    var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $elm$parser$Parser$Advanced$chompIf_fn = function (isGood, expecting) {
        return function (s) {
            var newOffset = _Parser_isSubChar_fn(isGood, s.g, s.bh);
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, expecting)) : (newOffset === -2 ? $elm$parser$Parser$Advanced$Good_fn(true, 0, { b1: 1, i: s.i, m: s.m, g: s.g + 1, hI: s.hI + 1, bh: s.bh }) : $elm$parser$Parser$Advanced$Good_fn(true, 0, { b1: s.b1 + 1, i: s.i, m: s.m, g: newOffset, hI: s.hI, bh: s.bh }));
        };
    }, $elm$parser$Parser$Advanced$chompIf = F2($elm$parser$Parser$Advanced$chompIf_fn);
    var $elm$parser$Parser$chompIf = function (isGood) {
        return $elm$parser$Parser$Advanced$chompIf_fn(isGood, $elm$parser$Parser$UnexpectedChar);
    };
    var $elm$parser$Parser$Advanced$chompWhileHelp_fn = function (isGood, offset, row, col, s0) {
        chompWhileHelp: while (true) {
            var newOffset = _Parser_isSubChar_fn(isGood, offset, s0.bh);
            if (newOffset === -1) {
                return $elm$parser$Parser$Advanced$Good_fn(_Utils_cmp(s0.g, offset) < 0, 0, { b1: col, i: s0.i, m: s0.m, g: offset, hI: row, bh: s0.bh });
            }
            else {
                if (newOffset === -2) {
                    var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
                else {
                    var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
            }
        }
    }, $elm$parser$Parser$Advanced$chompWhileHelp = F5($elm$parser$Parser$Advanced$chompWhileHelp_fn);
    var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
        return function (s) {
            return $elm$parser$Parser$Advanced$chompWhileHelp_fn(isGood, s.g, s.hI, s.b1, s);
        };
    };
    var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
    var $elm$core$Basics$always_fn = function (a, _v0) {
        return a;
    }, $elm$core$Basics$always = F2($elm$core$Basics$always_fn);
    var $elm$core$String$slice = _String_slice;
    var $elm$parser$Parser$Advanced$mapChompedString_fn = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, A2(func, _String_slice_fn(s0.g, s1.g, s0.bh), a), s1);
            }
        };
    }, $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, func(_String_slice_fn(s0.g, s1.g, s0.bh), a), s1);
            }
        };
    }, $elm$parser$Parser$Advanced$mapChompedString = F2($elm$parser$Parser$Advanced$mapChompedString_fn);
    var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
        return $elm$parser$Parser$Advanced$mapChompedString_fn($elm$core$Basics$always, parser);
    };
    var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
    var $elm$parser$Parser$Advanced$ignorer_fn = function (keepParser, ignoreParser) {
        return $elm$parser$Parser$Advanced$map2_fn($elm$core$Basics$always, keepParser, ignoreParser);
    }, $elm$parser$Parser$Advanced$ignorer = F2($elm$parser$Parser$Advanced$ignorer_fn);
    var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$core$String$trim = _String_trim;
    var $author$project$Press$Generate$isBlank = function (str) {
        return $elm$core$String$isEmpty($elm$core$String$trim(str));
    };
    var $elm$parser$Parser$Advanced$loopHelp_fn = function (p, state, callback, s0) {
        loopHelp: while (true) {
            var _v0 = callback(state);
            var parse = _v0;
            var _v1 = parse(s0);
            if (!_v1.$) {
                var p1 = _v1.a;
                var step = _v1.b;
                var s1 = _v1.c;
                if (!step.$) {
                    var newState = step.a;
                    var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                    p = $temp$p;
                    state = $temp$state;
                    callback = $temp$callback;
                    s0 = $temp$s0;
                    continue loopHelp;
                }
                else {
                    var result = step.a;
                    return $elm$parser$Parser$Advanced$Good_fn(p || p1, result, s1);
                }
            }
            else {
                var p1 = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p || p1, x);
            }
        }
    }, $elm$parser$Parser$Advanced$loopHelp = F4($elm$parser$Parser$Advanced$loopHelp_fn);
    var $elm$parser$Parser$Advanced$loop_fn = function (state, callback) {
        return function (s) {
            return $elm$parser$Parser$Advanced$loopHelp_fn(false, state, callback, s);
        };
    }, $elm$parser$Parser$Advanced$loop = F2($elm$parser$Parser$Advanced$loop_fn);
    var $elm$parser$Parser$Advanced$map_fn = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (!_v1.$) {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, func(a), s1);
            }
            else {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
        };
    }, $elm$parser$Parser$Advanced$map = F2($elm$parser$Parser$Advanced$map_fn);
    var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
    var $elm$parser$Parser$Advanced$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$parser$Parser$Advanced$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $elm$parser$Parser$toAdvancedStep = function (step) {
        if (!step.$) {
            var s = step.a;
            return $elm$parser$Parser$Advanced$Loop(s);
        }
        else {
            var a = step.a;
            return $elm$parser$Parser$Advanced$Done(a);
        }
    };
    var $elm$parser$Parser$loop_fn = function (state, callback) {
        return $elm$parser$Parser$Advanced$loop_fn(state, function (s) {
            return $elm$parser$Parser$Advanced$map_fn($elm$parser$Parser$toAdvancedStep, callback(s));
        });
    }, $elm$parser$Parser$loop = F2($elm$parser$Parser$loop_fn);
    var $elm$core$List$any_fn = function (isOkay, list) {
        any: while (true) {
            if (!list.b) {
                return false;
            }
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                    return true;
                }
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    }, $elm$core$List$any = F2($elm$core$List$any_fn);
    var $elm$core$List$member_fn = function (x, xs) {
        return $elm$core$List$any_fn(function (a) {
            return _Utils_eq(a, x);
        }, xs);
    }, $elm$core$List$member = F2($elm$core$List$member_fn);
    var $elm$core$Basics$not = _Basics_not;
    var $elm$parser$Parser$Advanced$Append_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Append = F2($elm$parser$Parser$Advanced$Append_fn);
    var $elm$parser$Parser$Advanced$oneOfHelp_fn = function (s0, bag, parsers) {
        oneOfHelp: while (true) {
            if (!parsers.b) {
                return $elm$parser$Parser$Advanced$Bad_fn(false, bag);
            }
            else {
                var parse = parsers.a;
                var remainingParsers = parsers.b;
                var _v1 = parse(s0);
                if (!_v1.$) {
                    var step = _v1;
                    return step;
                }
                else {
                    var step = _v1;
                    var p = step.a;
                    var x = step.b;
                    if (p) {
                        return step;
                    }
                    else {
                        var $temp$s0 = s0, $temp$bag = $elm$parser$Parser$Advanced$Append_fn(bag, x), $temp$parsers = remainingParsers;
                        s0 = $temp$s0;
                        bag = $temp$bag;
                        parsers = $temp$parsers;
                        continue oneOfHelp;
                    }
                }
            }
        }
    }, $elm$parser$Parser$Advanced$oneOfHelp = F3($elm$parser$Parser$Advanced$oneOfHelp_fn);
    var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
        return function (s) {
            return $elm$parser$Parser$Advanced$oneOfHelp_fn(s, $elm$parser$Parser$Advanced$Empty, parsers);
        };
    };
    var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
    var $elm$parser$Parser$Advanced$succeed = function (a) {
        return function (s) {
            return $elm$parser$Parser$Advanced$Good_fn(false, a, s);
        };
    };
    var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
    var $elm$parser$Parser$ExpectingSymbol = function (a) {
        return { $: 8, a: a };
    };
    var $elm$parser$Parser$Advanced$Token_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Token = F2($elm$parser$Parser$Advanced$Token_fn);
    var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
    var $elm$parser$Parser$Advanced$token = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return function (s) {
            var _v1 = _Parser_isSubString_fn(str, s.g, s.hI, s.b1, s.bh);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, expecting)) : $elm$parser$Parser$Advanced$Good_fn(progress, 0, { b1: newCol, i: s.i, m: s.m, g: newOffset, hI: newRow, bh: s.bh });
        };
    };
    var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
    var $elm$parser$Parser$symbol = function (str) {
        return $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$ExpectingSymbol(str)));
    };
    var $author$project$Press$Generate$parsePath = $elm$parser$Parser$loop_fn(_List_Nil, function (pieces) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(F2(function (isVariable, label) {
                return $author$project$Press$Generate$isBlank(label) ? $elm$parser$Parser$Loop(pieces) : $elm$parser$Parser$Loop(isVariable ? _List_Cons($author$project$Press$Model$Variable(label), pieces) : _List_Cons($author$project$Press$Model$Token(label), pieces));
            })), $elm$parser$Parser$symbol("/")), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(true), $elm$parser$Parser$chompIf(function (c) {
                    return c === ":";
                })),
                $elm$parser$Parser$succeed(false)
            ]))), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function (c) {
                return !$elm$core$List$member_fn(c, _List_fromArray(["/", ":", "?"]));
            }))),
            $elm$parser$Parser$succeed($elm$parser$Parser$Done($elm$core$List$reverse(pieces)))
        ]));
    });
    var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Set$empty = $elm$core$Dict$empty;
    var $elm$parser$Parser$ExpectingEnd = { $: 10 };
    var $elm$core$String$length = _String_length;
    var $elm$parser$Parser$Advanced$end = function (x) {
        return function (s) {
            return _Utils_eq($elm$core$String$length(s.bh), s.g) ? $elm$parser$Parser$Advanced$Good_fn(false, 0, s) : $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, x));
        };
    };
    var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_fn = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_fn);
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_fn = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBNode_elm_builtin_fn(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_fn);
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp_fn = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_fn(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$insertHelp_fn(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_fn(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_fn(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_fn);
    var $elm$core$Dict$insert_fn = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_fn(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_fn);
    var $elm$core$Set$insert_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$insert_fn(key, 0, dict);
    }, $elm$core$Set$insert = F2($elm$core$Set$insert_fn);
    var $author$project$Press$Generate$parseQueryParams = $elm$parser$Parser$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed({ S: false, N: $elm$core$Set$empty }), $elm$parser$Parser$end),
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(function (params) {
            return params;
        }), $elm$parser$Parser$symbol("?")), $elm$parser$Parser$symbol("{")), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed({ S: true, N: $elm$core$Set$empty }), $elm$parser$Parser$symbol("**")),
            $elm$parser$Parser$loop_fn({ S: false, N: $elm$core$Set$empty }, function (params) {
                return $elm$parser$Parser$oneOf(_List_fromArray([
                    $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed(function (fieldName) {
                        return $elm$parser$Parser$Loop(_Utils_update(params, {
                            N: $elm$core$Set$insert_fn(fieldName, params.N)
                        }));
                    }), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$getChompedString($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(0), $elm$parser$Parser$chompIf($elm$core$Char$isAlpha)), $elm$parser$Parser$chompWhile($elm$core$Char$isAlpha))), $elm$parser$Parser$chompWhile(function (c) {
                        return c === ",";
                    }))),
                    $elm$parser$Parser$succeed($elm$parser$Parser$Done(params))
                ]));
            })
        ])), $elm$parser$Parser$symbol("}")))
    ]));
    var $author$project$Press$Generate$parseUrlPattern = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed(F2(function (path, queryParams) {
        return { hy: path, am: queryParams };
    })), $author$project$Press$Generate$parsePath), $author$project$Press$Generate$parseQueryParams);
    var $elm$core$List$foldrHelper_fn = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper_fn_unwrapped = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return fn(a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return fn(a, fn(b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return fn(a, fn(b, fn(c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn_unwrapped(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn_unwrapped(fn, acc, ctr + 1, r4);
                        return fn(a, fn(b, fn(c, fn(d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_fn);
    var $elm$core$List$foldr_fn = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_fn(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_fn);
    var $elm$core$List$map_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs
            = xs.b) {
            var next = _List_Cons(f(xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$map = F2($elm$core$List$map_fn);
    var $elm$parser$Parser$DeadEnd_fn = function (row, col, problem) {
        return { b1: col, hA: problem, hI: row };
    }, $elm$parser$Parser$DeadEnd = F3($elm$parser$Parser$DeadEnd_fn);
    var $elm$parser$Parser$problemToDeadEnd = function (p) {
        return $elm$parser$Parser$DeadEnd_fn(p.hI, p.b1, p.hA);
    };
    var $elm$parser$Parser$Advanced$bagToList_fn = function (bag, list) {
        bagToList: while (true) {
            switch (bag.$) {
                case 0:
                    return list;
                case 1:
                    var bag1 = bag.a;
                    var x = bag.b;
                    var $temp$bag = bag1, $temp$list = _List_Cons(x, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
                default:
                    var bag1 = bag.a;
                    var bag2 = bag.b;
                    var $temp$bag = bag1, $temp$list = $elm$parser$Parser$Advanced$bagToList_fn(bag2, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
            }
        }
    }, $elm$parser$Parser$Advanced$bagToList = F2($elm$parser$Parser$Advanced$bagToList_fn);
    var $elm$parser$Parser$Advanced$run_fn = function (_v0, src) {
        var parse = _v0;
        var _v1 = parse({ b1: 1, i: _List_Nil, m: 1, g: 0, hI: 1, bh: src });
        if (!_v1.$) {
            var value = _v1.b;
            return $elm$core$Result$Ok(value);
        }
        else {
            var bag = _v1.b;
            return $elm$core$Result$Err($elm$parser$Parser$Advanced$bagToList_fn(bag, _List_Nil));
        }
    }, $elm$parser$Parser$Advanced$run = F2($elm$parser$Parser$Advanced$run_fn);
    var $elm$parser$Parser$run_fn = function (parser, source) {
        var _v0 = $elm$parser$Parser$Advanced$run_fn(parser, source);
        if (!_v0.$) {
            var a = _v0.a;
            return $elm$core$Result$Ok(a);
        }
        else {
            var problems = _v0.a;
            return $elm$core$Result$Err($elm$core$List$map_fn($elm$parser$Parser$problemToDeadEnd, problems));
        }
    }, $elm$parser$Parser$run = F2($elm$parser$Parser$run_fn);
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $author$project$Press$Generate$decodeUrlPattern = _Json_andThen_fn(function (string) {
        var _v0 = $elm$parser$Parser$run_fn($author$project$Press$Generate$parseUrlPattern, string);
        if (!_v0.$) {
            var urlPattern = _v0.a;
            return $elm$json$Json$Decode$succeed(urlPattern);
        }
        else {
            var err = _v0.a;
            return $elm$json$Json$Decode$fail("I don't understand this route:" + string);
        }
    }, $elm$json$Json$Decode$string);
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $author$project$Press$Generate$decodeElmPage = _Json_map3_fn($author$project$Press$Generate$ElmPage, _Json_decodeField_fn("urls", $elm$json$Json$Decode$list($author$project$Press$Generate$decodeUrlPattern)), _Json_decodeField_fn("id", $elm$json$Json$Decode$list($elm$json$Json$Decode$string)), _Json_decodeField_fn("source", $elm$json$Json$Decode$string));
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$oneOf = _Json_oneOf;
    var $elm$json$Json$Decode$maybe = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map1_fn($elm$core$Maybe$Just, decoder),
            $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
        ]));
    };
    var $author$project$Press$Generate$decode = _Json_map2_fn($author$project$Press$Generate$Options, _Json_decodeField_fn("assets", $elm$json$Json$Decode$maybe($author$project$Press$Generate$decodeDirectory)), _Json_decodeField_fn("elmFiles", $elm$json$Json$Decode$list($author$project$Press$Generate$decodeElmPage)));
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $elm$json$Json$Encode$list_fn = function (func, entries) {
        return _Json_wrap($elm$core$List$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_fn);
    var $elm$json$Json$Encode$object = function (pairs) {
        return _Json_wrap($elm$core$List$foldl_fn_unwrapped(function (_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return _Json_addField_fn(k, v, obj);
        }, _Json_emptyObject(0), pairs));
    };
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Gen$CodeGen$Generate$onFailureSend = _Platform_outgoingPort("onFailureSend", $elm$json$Json$Encode$list(function ($) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("description", $elm$json$Json$Encode$string($.a4)),
            _Utils_Tuple2("title", $elm$json$Json$Encode$string($.hY))
        ]));
    }));
    var $author$project$Gen$CodeGen$Generate$error = function (errs) {
        return $author$project$Gen$CodeGen$Generate$onFailureSend(errs);
    };
    var $author$project$Gen$CodeGen$Generate$onSuccessSend = _Platform_outgoingPort("onSuccessSend", $elm$json$Json$Encode$list(function ($) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("contents", $elm$json$Json$Encode$string($.b8)),
            _Utils_Tuple2("path", $elm$json$Json$Encode$string($.hy)),
            _Utils_Tuple2("warnings", $elm$json$Json$Encode$list(function ($) {
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("declaration", $elm$json$Json$Encode$string($.gL)),
                    _Utils_Tuple2("warning", $elm$json$Json$Encode$string($.h4))
                ]));
            })($.go))
        ]));
    }));
    var $author$project$Gen$CodeGen$Generate$files = function (list) {
        return $author$project$Gen$CodeGen$Generate$onSuccessSend(list);
    };
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $elm$core$Platform$worker = _Platform_worker;
    var $author$project$Gen$CodeGen$Generate$fromJson_fn = function (decoder, f) {
        return $elm$core$Platform$worker({
            g6: function (flags) {
                var _v0 = _Json_run_fn(decoder, flags);
                if (!_v0.$) {
                    var input = _v0.a;
                    return _Utils_Tuple2(0, $author$project$Gen$CodeGen$Generate$files(f(input)));
                }
                else {
                    var e = _v0.a;
                    return _Utils_Tuple2(0, $author$project$Gen$CodeGen$Generate$error(_List_fromArray([
                        {
                            a4: $elm$json$Json$Decode$errorToString(e),
                            hY: "Error decoding flags"
                        }
                    ])));
                }
            },
            hR: function (_v1) {
                return $elm$core$Platform$Sub$none;
            },
            h0: F2(function (_v2, model) {
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            })
        });
    }, $author$project$Gen$CodeGen$Generate$fromJson = F2($author$project$Gen$CodeGen$Generate$fromJson_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$Declaration = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$NotExposed = { $: 0 };
    var $elm$core$String$dropLeft_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_fn);
    var $elm$core$String$left_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_fn);
    var $elm$core$String$toUpper = _String_toUpper;
    var $mdgriffith$elm_codegen$Internal$Format$formatType = function (str) {
        return _Utils_ap($elm$core$String$toUpper($elm$core$String$left_fn(1, str)), $elm$core$String$dropLeft_fn(1, str));
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports = function (_v0) {
        var details = _v0;
        return details.d;
    };
    var $elm$core$Basics$composeL_fn = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_fn);
    var $elm$core$List$append_fn = function (xs, ys) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        end.b = ys;
        return tmp.b;
    }, $elm$core$List$append = F2($elm$core$List$append_fn);
    var $elm$core$List$concat = function (lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.b; lists = lists.b) {
            var xs = lists.a;
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = lists.a;
        return tmp.b;
    };
    var $elm$core$List$concatMap_fn = function (f, lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.
            b; lists = lists.b) {
            var xs = f(lists.a);
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = f(lists.a);
        return tmp.b;
    }, $elm$core$List$concatMap = F2($elm$core$List$concatMap_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Node$value = function (_v0) {
        var v = _v0.b;
        return v;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
    var $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper = function (ann) {
        switch (ann.$) {
            case 0:
                var str = ann.a;
                return _List_fromArray([str]);
            case 1:
                var modName = ann.a;
                var anns = ann.b;
                return $elm$core$List$concatMap_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode), anns);
            case 2:
                return _List_Nil;
            case 3:
                var tupled = ann.a;
                return $elm$core$List$concatMap_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode), tupled);
            case 4:
                var recordDefinition = ann.a;
                return $elm$core$List$concatMap_fn(function (nodedField) {
                    var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
                    var name = _v1.a;
                    var field = _v1.b;
                    return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper($mdgriffith$elm_codegen$Internal$Compiler$denode(field));
                }, recordDefinition);
            case 5:
                var recordName = ann.a;
                var recordDefinition = ann.b;
                return $elm$core$List$concatMap_fn(function (nodedField) {
                    var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
                    var name = _v2.a;
                    var field = _v2.b;
                    return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper($mdgriffith$elm_codegen$Internal$Compiler$denode(field));
                }, $mdgriffith$elm_codegen$Internal$Compiler$denode(recordDefinition));
            default:
                var one = ann.a;
                var two = ann.b;
                return $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(one),
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(two)
                ]));
        }
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp_fn = function (f, existing, remaining, accumulator) {
        uniqueHelp: while (true) {
            if (!remaining.b) {
                return $elm$core$List$reverse(accumulator);
            }
            else {
                var first = remaining.a;
                var rest = remaining.b;
                var computedFirst = f(first);
                if ($elm$core$List$member_fn(computedFirst, existing)) {
                    var $temp$f = f, $temp$existing = existing, $temp$remaining = rest, $temp$accumulator = accumulator;
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
                else {
                    var $temp$f = f, $temp$existing = _List_Cons(computedFirst, existing), $temp$remaining = rest, $temp$accumulator = _List_Cons(first, accumulator);
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp = F4($mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unique = function (list) {
        return $mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp_fn($elm$core$Basics$identity, _List_Nil, list, _List_Nil);
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getGenerics = function (_v0) {
        var details = _v0;
        return $mdgriffith$elm_codegen$Internal$Compiler$unique($mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(details.p));
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation = function (_v0) {
        var details = _v0;
        return details.p;
    };
    var $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
        j: { b3: 0, hI: 0 },
        s: { b3: 0, hI: 0 }
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$nodify = function (exp) {
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
    };
    var $mdgriffith$elm_codegen$Elm$alias_fn = function (name, innerAnnotation) {
        return $mdgriffith$elm_codegen$Internal$Compiler$Declaration({
            a5: $elm$core$Maybe$Nothing,
            aj: $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            d: $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(innerAnnotation),
            r: name,
            ap: function (index) {
                return {
                    ah: _List_Nil,
                    gL: $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration({
                        a6: $elm$core$Maybe$Nothing,
                        c3: $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Internal$Compiler$getGenerics(innerAnnotation)),
                        r: $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Format$formatType(name)),
                        a$: $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(innerAnnotation))
                    }),
                    h4: $elm$core$Maybe$Nothing
                };
            }
        });
    }, $mdgriffith$elm_codegen$Elm$alias = F2($mdgriffith$elm_codegen$Elm$alias_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$Annotation = $elm$core$Basics$identity;
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey_fn = function (mod, name) {
        return $elm$core$String$join_fn(".", mod) + ("." + name);
    }, $mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey = F2($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$addAlias_fn = function (mod, name, ann, aliasCache) {
        var annDetails = ann;
        return $elm$core$Dict$insert_fn($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey_fn(mod, name), {
            aE: annDetails.p,
            bl: $mdgriffith$elm_codegen$Internal$Compiler$getGenerics(ann)
        }, aliasCache);
    }, $mdgriffith$elm_codegen$Internal$Compiler$addAlias = F4($mdgriffith$elm_codegen$Internal$Compiler$addAlias_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getAliases = function (_v0) {
        var ann = _v0;
        return ann.a1;
    };
    var $elm$core$Dict$foldl_fn = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_fn(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl_fn_unwrapped = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldl_fn_unwrapped(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_fn);
    var $elm$core$Dict$union_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn($elm$core$Dict$insert, t2, t1);
    }, $elm$core$Dict$union = F2($elm$core$Dict$union_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases = $elm$core$Dict$union;
    var $mdgriffith$elm_codegen$Elm$Annotation$alias_fn = function (mod, name, vars, target) {
        return {
            a1: $mdgriffith$elm_codegen$Internal$Compiler$addAlias_fn(mod, name, target, $elm$core$List$foldl_fn_unwrapped(function (ann, aliases) {
                return $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Internal$Compiler$getAliases(ann), aliases);
            }, $mdgriffith$elm_codegen$Internal$Compiler$getAliases(target), vars)),
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(mod, $mdgriffith$elm_codegen$Internal$Format$formatType(name))), $elm$core$List$map_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation), vars)),
            d: function () {
                if (!mod.b) {
                    return $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars);
                }
                else {
                    return _Utils_ap(_List_fromArray([mod]), $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars));
                }
            }()
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$alias = F4($mdgriffith$elm_codegen$Elm$Annotation$alias_fn);
    var $author$project$Gen$App$View$moduleName_ = _List_fromArray(["App", "View"]);
    var $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases = $elm$core$Dict$empty;
    var $mdgriffith$elm_codegen$Elm$Annotation$getAliases = function (_v0) {
        var ann = _v0;
        return ann.a1;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0 = $mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0);
    var $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn = function (mod, name, args) {
        return {
            a1: $elm$core$List$foldl_fn_unwrapped(function (ann, aliases) {
                return $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann), aliases);
            }, $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, args),
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(mod, $mdgriffith$elm_codegen$Internal$Format$formatType(name))), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args))),
            d: _List_Cons(mod, $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args))
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$namedWith = F3($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn);
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
        return { $: 4, a: a };
    };
    var $elm$core$Basics$composeR_fn = function (f, g, x) {
        return g(f(x));
    }, $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_fn);
    var $mdgriffith$elm_codegen$Internal$Format$sanitize = function (str) {
        switch (str) {
            case "in":
                return "in_";
            case "type":
                return "type_";
            case "case":
                return "case_";
            case "let":
                return "let_";
            case "module":
                return "module_";
            case "exposing":
                return "exposing_";
            case "where":
                return "where_";
            case "main":
                return "main_";
            case "port":
                return "port_";
            case "as":
                return "as_";
            case "if":
                return "if_";
            case "import":
                return "import_";
            default:
                return str;
        }
    };
    var $elm$core$String$toLower = _String_toLower;
    var $mdgriffith$elm_codegen$Internal$Format$formatValue = function (str) {
        var formatted = _Utils_ap($elm$core$String$toLower($elm$core$String$left_fn(1, str)), $elm$core$String$dropLeft_fn(1, str));
        return $mdgriffith$elm_codegen$Internal$Format$sanitize(formatted);
    };
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$record = function (fields) {
        return {
            a1: $elm$core$List$foldl_fn_unwrapped(function (_v0, aliases) {
                var ann = _v0.b;
                return $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann), aliases);
            }, $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, fields),
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$map_fn(function (_v1) {
                var name = _v1.a;
                var ann = _v1.b;
                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Format$formatValue(name)), $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(ann)));
            }, fields))),
            d: $elm$core$List$concatMap_fn(A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports), fields)
        };
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$typed_fn = function (mod, name, args) {
        return {
            a1: $elm$core$List$foldl_fn_unwrapped(function (ann, aliases) {
                return $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann), aliases);
            }, $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, args),
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(mod, name)), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args))),
            d: $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args)
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$typed = F3($mdgriffith$elm_codegen$Elm$Annotation$typed_fn);
    var $mdgriffith$elm_codegen$Elm$Annotation$string = $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "String", _List_Nil);
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$var = function (a) {
        return {
            a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType($mdgriffith$elm_codegen$Internal$Format$formatValue(a)),
            d: _List_Nil
        };
    };
    var $author$project$Gen$App$View$annotation_ = {
        h3: function (viewArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$alias_fn($author$project$Gen$App$View$moduleName_, "View", _List_fromArray([viewArg0]), $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                _Utils_Tuple2("title", $mdgriffith$elm_codegen$Elm$Annotation$string),
                _Utils_Tuple2("body", $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Html"]), "Html", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))
            ])));
        }
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$list = function (inner) {
        return $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "List", _List_fromArray([inner]));
    };
    var $author$project$Gen$Browser$moduleName_ = _List_fromArray(["Browser"]);
    var $author$project$Gen$Browser$annotation_ = {
        aM: function (documentArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$alias_fn($author$project$Gen$Browser$moduleName_, "Document", _List_fromArray([documentArg0]), $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                _Utils_Tuple2("title", $mdgriffith$elm_codegen$Elm$Annotation$string),
                _Utils_Tuple2("body", $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Html"]), "Html", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ]))))
            ])));
        },
        gi: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser"]), "UrlRequest", _List_Nil)
    };
    var $author$project$Gen$Json$Encode$annotation_ = {
        h1: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Json", "Encode"]), "Value", _List_Nil)
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$int = $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "Int", _List_Nil);
    var $mdgriffith$elm_codegen$Elm$Annotation$maybe = function (maybeArg) {
        return $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "Maybe", _List_fromArray([maybeArg]));
    };
    var $author$project$Gen$Url$moduleName_ = _List_fromArray(["Url"]);
    var $author$project$Gen$Url$annotation_ = {
        be: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Protocol", _List_Nil),
        af: $mdgriffith$elm_codegen$Elm$Annotation$alias_fn($author$project$Gen$Url$moduleName_, "Url", _List_Nil, $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
            _Utils_Tuple2("protocol", $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Protocol", _List_Nil)),
            _Utils_Tuple2("host", $mdgriffith$elm_codegen$Elm$Annotation$string),
            _Utils_Tuple2("port_", $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$int)),
            _Utils_Tuple2("path", $mdgriffith$elm_codegen$Elm$Annotation$string),
            _Utils_Tuple2("query", $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$string)),
            _Utils_Tuple2("fragment", $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$string))
        ])))
    };
    var $author$project$Gen$Browser$Navigation$annotation_ = {
        g9: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil)
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs = F2($mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs_fn);
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn = function (a, b) {
        return { $: 5, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName_fn = function (_v0, _v2) {
        var _v1 = _v0.a;
        var oneName = _v1.b;
        var _v3 = _v2.a;
        var twoName = _v3.b;
        return _Utils_eq(oneName, twoName);
    }, $mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName = F2($mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists_fn = function (fieldOne, fieldTwo) {
        return $elm$core$List$foldl_fn_unwrapped(function (_new, existing) {
            var newField = _new.b;
            return $elm$core$List$any_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName(newField), $mdgriffith$elm_codegen$Internal$Compiler$denode), existing) ? existing : _List_Cons(_new, existing);
        }, fieldOne, fieldTwo);
    }, $mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists = F2($mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists_fn);
    var $elm$core$Dict$get_fn = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_fn(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_fn);
    var $elm$core$Dict$getMin = function (dict) {
        getMin: while (true) {
            if ((dict.$ === -1) && (dict.d.$ === -1)) {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            }
            else {
                return dict;
            }
        }
    };
    var $elm$core$Dict$moveRedLeft = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, rlK, rlV, $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), rlL), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rlR, rRight));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$moveRedRight = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, lRight, $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight)));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$removeHelpPrepEQGT_fn = function (targetKey, dict, color, key, value, left, right) {
        if ((left.$ === -1) && (!left.a)) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, lK, lV, lLeft, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, lRight, right));
        }
        else {
            _v2$2: while (true) {
                if ((right.$ === -1) && (right.a === 1)) {
                    if (right.d.$ === -1) {
                        if (right.d.a === 1) {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return dict;
        }
    }, $elm$core$Dict$removeHelpPrepEQGT = F7($elm$core$Dict$removeHelpPrepEQGT_fn);
    var $elm$core$Dict$removeMin = function (dict) {
        if ((dict.$ === -1) && (dict.d.$ === -1)) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor === 1) {
                if ((lLeft.$ === -1) && (!lLeft.a)) {
                    var _v3 = lLeft.a;
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
                }
                else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === -1) {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    }
                    else {
                        return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                }
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    };
    var $elm$core$Dict$removeHelp_fn = function (targetKey, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if ((left.$ === -1) && (left.a === 1)) {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if ((lLeft.$ === -1) && (!lLeft.a)) {
                        var _v6 = lLeft.a;
                        return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                    }
                    else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === -1) {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeHelp_fn(targetKey, nLeft), nRight);
                        }
                        else {
                            return $elm$core$Dict$RBEmpty_elm_builtin;
                        }
                    }
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                }
            }
            else {
                return $elm$core$Dict$removeHelpEQGT_fn(targetKey, $elm$core$Dict$removeHelpPrepEQGT_fn(targetKey, dict, color, key, value, left, right));
            }
        }
    }, $elm$core$Dict$removeHelp = F2($elm$core$Dict$removeHelp_fn);
    var $elm$core$Dict$removeHelpEQGT_fn = function (targetKey, dict) {
        if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === -1) {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return $elm$core$Dict$balance_fn(color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                }
                else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            }
            else {
                return $elm$core$Dict$balance_fn(color, key, value, left, $elm$core$Dict$removeHelp_fn(targetKey, right));
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    }, $elm$core$Dict$removeHelpEQGT = F2($elm$core$Dict$removeHelpEQGT_fn);
    var $elm$core$Dict$remove_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$removeHelp_fn(key, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$remove = F2($elm$core$Dict$remove_fn);
    var $elm$core$Dict$update_fn = function (targetKey, alter, dictionary) {
        var _v0 = alter($elm$core$Dict$get_fn(targetKey, dictionary));
        if (!_v0.$) {
            var value = _v0.a;
            return $elm$core$Dict$insert_fn(targetKey, value, dictionary);
        }
        else {
            return $elm$core$Dict$remove_fn(targetKey, dictionary);
        }
    }, $elm$core$Dict$update = F3($elm$core$Dict$update_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$addInference_fn = function (key, value, infs) {
        return $elm$core$Dict$update_fn(key, function (maybeValue) {
            if (maybeValue.$ === 1) {
                return $elm$core$Maybe$Just(value);
            }
            else {
                if (maybeValue.a.$ === 5) {
                    var _v1 = maybeValue.a;
                    var _v2 = _v1.a;
                    var range = _v2.a;
                    var recordName = _v2.b;
                    var _v3 = _v1.b;
                    var fieldRange = _v3.a;
                    var fields = _v3.b;
                    if (value.$ === 5) {
                        var _v5 = value.a;
                        var existingRange = _v5.a;
                        var existingRecordName = _v5.b;
                        var _v6 = value.b;
                        var existingFieldRange = _v6.a;
                        var existingFields = _v6.b;
                        return $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(range, recordName), $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(fieldRange, $mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists_fn(fields, existingFields))));
                    }
                    else {
                        return maybeValue;
                    }
                }
                else {
                    var existing = maybeValue.a;
                    return $elm$core$Maybe$Just(existing);
                }
            }
        }, infs);
    }, $mdgriffith$elm_codegen$Internal$Compiler$addInference = F3($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn);
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper_fn = function (last, reversedArgs) {
        makeFunctionReversedHelper: while (true) {
            if (!reversedArgs.b) {
                return last;
            }
            else {
                if (!reversedArgs.b.b) {
                    var penUlt = reversedArgs.a;
                    return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt), $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last));
                }
                else {
                    var penUlt = reversedArgs.a;
                    var remain = reversedArgs.b;
                    var $temp$last = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt), $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last)), $temp$reversedArgs = remain;
                    last = $temp$last;
                    reversedArgs = $temp$reversedArgs;
                    continue makeFunctionReversedHelper;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper = F2($mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$makeFunction_fn = function (result, args) {
        return $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper_fn(result, $elm$core$List$reverse(args));
    }, $mdgriffith$elm_codegen$Internal$Compiler$makeFunction = F2($mdgriffith$elm_codegen$Internal$Compiler$makeFunction_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables = { $: 4 };
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
        return { $: 3, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn = function (a, b) {
        return { $: 14, a: a, b: b };
    }, $mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify = F2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn);
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = { $: 2 };
    var $elm$core$Dict$fromList = function (assocs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return $elm$core$Dict$insert_fn(key, value, dict);
        }, $elm$core$Dict$empty, assocs);
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getAlias_fn = function (_v0, cache) {
        var _v1 = _v0.b;
        var modName = _v1.a;
        var name = _v1.b;
        return $elm$core$Dict$get_fn($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey_fn(modName, name), cache);
    }, $mdgriffith$elm_codegen$Internal$Compiler$getAlias = F2($mdgriffith$elm_codegen$Internal$Compiler$getAlias_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField = function (a) {
        return { $: 7, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getField_fn = function (name, val, fields, captured) {
        getField: while (true) {
            if (!fields.b) {
                return $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField({
                    gW: $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$Compiler$denode, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)), captured),
                    P: name
                }));
            }
            else {
                var top = fields.a;
                var remain = fields.b;
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(top);
                var topFieldName = _v1.a;
                var topFieldVal = _v1.b;
                var topName = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldName);
                var topVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldVal);
                if (_Utils_eq(topName, name)) {
                    return $elm$core$Result$Ok(_Utils_Tuple2(topVal, _Utils_ap(captured, remain)));
                }
                else {
                    var $temp$name = name, $temp$val = val, $temp$fields = remain, $temp$captured = _List_Cons(top, captured);
                    name = $temp$name;
                    val = $temp$val;
                    fields = $temp$fields;
                    captured = $temp$captured;
                    continue getField;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$getField = F4($mdgriffith$elm_codegen$Internal$Compiler$getField_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$isAppendable = function (annotation) {
        _v0$2: while (true) {
            if ((annotation.$ === 1) && (!annotation.a.b.a.b)) {
                switch (annotation.a.b.b) {
                    case "String":
                        var _v1 = annotation.a;
                        var _v2 = _v1.b;
                        return true;
                    case "List":
                        if (annotation.b.b && (!annotation.b.b.b)) {
                            var _v3 = annotation.a;
                            var _v4 = _v3.b;
                            var _v5 = annotation.b;
                            var _v6 = _v5.a;
                            var inner = _v6.b;
                            return true;
                        }
                        else {
                            break _v0$2;
                        }
                    default:
                        break _v0$2;
                }
            }
            else {
                break _v0$2;
            }
        }
        return false;
    };
    var $elm$core$List$all_fn = function (isOkay, list) {
        all: while (true) {
            if (!list.b) {
                return true;
            }
            else {
                var x = list.a;
                if (!isOkay(x)) {
                    return false;
                }
                list = list.b;
                continue all;
            }
        }
    }, $elm$core$List$all = F2($elm$core$List$all_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$isComparable = function (annotation) {
        isComparable: while (true) {
            _v0$6: while (true) {
                switch (annotation.$) {
                    case 1:
                        if (annotation.a.b.a.b) {
                            if (((annotation.a.b.a.a === "Char") && (!annotation.a.b.a.b.b)) && (annotation.a.b.b === "Char")) {
                                var _v5 = annotation.a;
                                var _v6 = _v5.b;
                                var _v7 = _v6.a;
                                return true;
                            }
                            else {
                                break _v0$6;
                            }
                        }
                        else {
                            switch (annotation.a.b.b) {
                                case "Int":
                                    var _v1 = annotation.a;
                                    var _v2 = _v1.b;
                                    return true;
                                case "Float":
                                    var _v3 = annotation.a;
                                    var _v4 = _v3.b;
                                    return true;
                                case "String":
                                    var _v8 = annotation.a;
                                    var _v9 = _v8.b;
                                    return true;
                                case "List":
                                    if (annotation.b.b && (!annotation.b.b.b)) {
                                        var _v10 = annotation.a;
                                        var _v11 = _v10.b;
                                        var _v12 = annotation.b;
                                        var _v13 = _v12.a;
                                        var inner = _v13.b;
                                        var $temp$annotation = inner;
                                        annotation = $temp$annotation;
                                        continue isComparable;
                                    }
                                    else {
                                        break _v0$6;
                                    }
                                default:
                                    break _v0$6;
                            }
                        }
                    case 3:
                        var innerList = annotation.a;
                        return $elm$core$List$all_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$isComparable, $mdgriffith$elm_codegen$Internal$Compiler$denode), innerList);
                    default:
                        break _v0$6;
                }
            }
            return false;
        }
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$isNumber = function (annotation) {
        _v0$2: while (true) {
            if ((annotation.$ === 1) && (!annotation.a.b.a.b)) {
                switch (annotation.a.b.b) {
                    case "Int":
                        var _v1 = annotation.a;
                        var _v2 = _v1.b;
                        return true;
                    case "Float":
                        var _v3 = annotation.a;
                        var _v4 = _v3.b;
                        return true;
                    default:
                        break _v0$2;
                }
            }
            else {
                break _v0$2;
            }
        }
        return false;
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$String$repeatHelp_fn = function (n, chunk, result) {
        return (n <= 0) ? result : $elm$core$String$repeatHelp_fn(n >> 1, _Utils_ap(chunk, chunk), (!(n & 1)) ? result : _Utils_ap(result, chunk));
    }, $elm$core$String$repeatHelp = F3($elm$core$String$repeatHelp_fn);
    var $elm$core$String$repeat_fn = function (n, chunk) {
        return $elm$core$String$repeatHelp_fn(n, chunk, "");
    }, $elm$core$String$repeat = F2($elm$core$String$repeat_fn);
    var $stil4m$structured_writer$StructuredWriter$asIndent = function (amount) {
        return $elm$core$String$repeat_fn(amount, " ");
    };
    var $elm$core$String$concat = function (strings) {
        return $elm$core$String$join_fn("", strings);
    };
    var $stil4m$structured_writer$StructuredWriter$writeIndented_fn = function (indent_, w) {
        switch (w.$) {
            case 0:
                var _v1 = w.a;
                var pre = _v1.a;
                var sep = _v1.b;
                var post = _v1.c;
                var differentLines = w.b;
                var items = w.c;
                var seperator = differentLines ? ("\n" + ($stil4m$structured_writer$StructuredWriter$asIndent(indent_) + sep)) : sep;
                return $elm$core$String$concat(_List_fromArray([
                    pre,
                    $elm$core$String$join_fn(seperator, $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $elm$core$Basics$identity, $stil4m$structured_writer$StructuredWriter$writeIndented(indent_)), items)),
                    post
                ]));
            case 1:
                var items = w.a;
                return $elm$core$String$join_fn("\n" + $stil4m$structured_writer$StructuredWriter$asIndent(indent_), $elm$core$List$concatMap_fn(A2($elm$core$Basics$composeR, $stil4m$structured_writer$StructuredWriter$writeIndented(0), $elm$core$String$split("\n")), items));
            case 2:
                var s = w.a;
                return s;
            case 4:
                var n = w.a;
                var next = w.b;
                return _Utils_ap($stil4m$structured_writer$StructuredWriter$asIndent(n + indent_), $stil4m$structured_writer$StructuredWriter$writeIndented_fn(n + indent_, next));
            case 5:
                var items = w.a;
                return $elm$core$String$join_fn(" ", $elm$core$List$map_fn($stil4m$structured_writer$StructuredWriter$writeIndented(indent_), items));
            case 6:
                var items = w.a;
                return $elm$core$String$concat($elm$core$List$map_fn($stil4m$structured_writer$StructuredWriter$writeIndented(indent_), items));
            default:
                var x = w.a;
                var y = w.b;
                return _Utils_ap($stil4m$structured_writer$StructuredWriter$writeIndented_fn(indent_, x), $stil4m$structured_writer$StructuredWriter$writeIndented_fn(indent_, y));
        }
    }, $stil4m$structured_writer$StructuredWriter$writeIndented = F2($stil4m$structured_writer$StructuredWriter$writeIndented_fn);
    var $stil4m$structured_writer$StructuredWriter$write_a0 = 0, $stil4m$structured_writer$StructuredWriter$write = $stil4m$structured_writer$StructuredWriter$writeIndented($stil4m$structured_writer$StructuredWriter$write_a0);
    var $stil4m$elm_syntax$Elm$Writer$write = $stil4m$structured_writer$StructuredWriter$write;
    var $stil4m$structured_writer$StructuredWriter$Sep_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $stil4m$structured_writer$StructuredWriter$Sep = F3($stil4m$structured_writer$StructuredWriter$Sep_fn);
    var $stil4m$structured_writer$StructuredWriter$bracesComma_a0 = _Utils_Tuple3("{", ", ", "}"), $stil4m$structured_writer$StructuredWriter$bracesComma = $stil4m$structured_writer$StructuredWriter$Sep($stil4m$structured_writer$StructuredWriter$bracesComma_a0);
    var $stil4m$structured_writer$StructuredWriter$Joined = function (a) {
        return { $: 6, a: a };
    };
    var $stil4m$structured_writer$StructuredWriter$join = $stil4m$structured_writer$StructuredWriter$Joined;
    var $stil4m$structured_writer$StructuredWriter$parensComma_a0 = _Utils_Tuple3("(", ", ", ")"), $stil4m$structured_writer$StructuredWriter$parensComma = $stil4m$structured_writer$StructuredWriter$Sep($stil4m$structured_writer$StructuredWriter$parensComma_a0);
    var $elm$core$String$contains = _String_contains;
    var $stil4m$structured_writer$StructuredWriter$Str = function (a) {
        return { $: 2, a: a };
    };
    var $stil4m$structured_writer$StructuredWriter$string = $stil4m$structured_writer$StructuredWriter$Str;
    var $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces = function (w) {
        return _String_contains_fn(" ", $stil4m$structured_writer$StructuredWriter$writeIndented_fn($stil4m$structured_writer$StructuredWriter$write_a0, w)) ? $stil4m$structured_writer$StructuredWriter$join(_List_fromArray([
            $stil4m$structured_writer$StructuredWriter$string("("),
            w,
            $stil4m$structured_writer$StructuredWriter$string(")")
        ])) : w;
    };
    var $stil4m$structured_writer$StructuredWriter$sepByComma_a0 = _Utils_Tuple3("", ", ", ""), $stil4m$structured_writer$StructuredWriter$sepByComma = $stil4m$structured_writer$StructuredWriter$Sep($stil4m$structured_writer$StructuredWriter$sepByComma_a0);
    var $stil4m$structured_writer$StructuredWriter$Spaced = function (a) {
        return { $: 5, a: a };
    };
    var $stil4m$structured_writer$StructuredWriter$spaced = $stil4m$structured_writer$StructuredWriter$Spaced;
    var $stil4m$elm_syntax$Elm$Writer$writeRecordField = function (_v4) {
        var _v5 = _v4.b;
        var name = _v5.a;
        var ref = _v5.b;
        return $stil4m$structured_writer$StructuredWriter$spaced(_List_fromArray([
            $stil4m$structured_writer$StructuredWriter$string($stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
            $stil4m$structured_writer$StructuredWriter$string(":"),
            $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(ref)
        ]));
    };
    var $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation = function (_v0) {
        var typeAnnotation = _v0.b;
        switch (typeAnnotation.$) {
            case 0:
                var s = typeAnnotation.a;
                return $stil4m$structured_writer$StructuredWriter$string(s);
            case 1:
                var moduleNameAndName = typeAnnotation.a;
                var args = typeAnnotation.b;
                var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).a;
                var k = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).b;
                return $stil4m$structured_writer$StructuredWriter$spaced(_List_Cons($stil4m$structured_writer$StructuredWriter$string($elm$core$String$join_fn(".", _Utils_ap(moduleName, _List_fromArray([k])))), $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces), args)));
            case 2:
                return $stil4m$structured_writer$StructuredWriter$string("()");
            case 3:
                var xs = typeAnnotation.a;
                return $stil4m$structured_writer$StructuredWriter$Sep_fn($stil4m$structured_writer$StructuredWriter$parensComma_a0, false, $elm$core$List$map_fn($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, xs));
            case 4:
                var xs = typeAnnotation.a;
                return $stil4m$structured_writer$StructuredWriter$Sep_fn($stil4m$structured_writer$StructuredWriter$bracesComma_a0, false, $elm$core$List$map_fn($stil4m$elm_syntax$Elm$Writer$writeRecordField, xs));
            case 5:
                var name = typeAnnotation.a;
                var fields = typeAnnotation.b;
                return $stil4m$structured_writer$StructuredWriter$spaced(_List_fromArray([
                    $stil4m$structured_writer$StructuredWriter$string("{"),
                    $stil4m$structured_writer$StructuredWriter$string($stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
                    $stil4m$structured_writer$StructuredWriter$string("|"),
                    $stil4m$structured_writer$StructuredWriter$Sep_fn($stil4m$structured_writer$StructuredWriter$sepByComma_a0, false, $elm$core$List$map_fn($stil4m$elm_syntax$Elm$Writer$writeRecordField, $stil4m$elm_syntax$Elm$Syntax$Node$value(fields))),
                    $stil4m$structured_writer$StructuredWriter$string("}")
                ]));
            default:
                var left = typeAnnotation.a;
                var right = typeAnnotation.b;
                var addParensForSubTypeAnnotation = function (type_) {
                    if (type_.b.$ === 6) {
                        var _v3 = type_.b;
                        return $stil4m$structured_writer$StructuredWriter$join(_List_fromArray([
                            $stil4m$structured_writer$StructuredWriter$string("("),
                            $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_),
                            $stil4m$structured_writer$StructuredWriter$string(")")
                        ]));
                    }
                    else {
                        return $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_);
                    }
                };
                return $stil4m$structured_writer$StructuredWriter$spaced(_List_fromArray([
                    addParensForSubTypeAnnotation(left),
                    $stil4m$structured_writer$StructuredWriter$string("->"),
                    addParensForSubTypeAnnotation(right)
                ]));
        }
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions_fn = function (restrictions, type_) {
        switch (restrictions.$) {
            case 0:
                return $elm$core$Result$Ok(type_);
            case 5:
                var constraints = restrictions.a;
                return $elm$core$Result$Err($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + (" needs to be: " + ($elm$core$String$join_fn(", ", $elm$core$List$concatMap_fn(function (constraint) {
                    switch (constraint.$) {
                        case 0:
                            return _List_Nil;
                        case 5:
                            return _List_Nil;
                        case 1:
                            return _List_fromArray(["a number"]);
                        case 3:
                            return _List_fromArray(["comparable"]);
                        case 2:
                            return _List_fromArray(["appendable"]);
                        default:
                            return _List_fromArray(["appendable and comparable"]);
                    }
                }, constraints)) + "\n\nbut that's impossible!  Or Elm Codegen's s typechecker is off.")));
            case 1:
                return $mdgriffith$elm_codegen$Internal$Compiler$isNumber(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not a number");
            case 3:
                return $mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not comparable.  Only Ints, Floats, Chars, Strings and Lists and Tuples of those things are comparable.");
            case 2:
                return $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not appendable.  Only Strings and Lists are appendable.");
            default:
                return ($mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) || $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_)) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not appendable/comparable.  Only Strings and Lists are allowed here.");
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions = F2($mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions = { $: 0 };
    var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable = { $: 2 };
    var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable = { $: 4 };
    var $mdgriffith$elm_codegen$Internal$Compiler$IsComparable = { $: 3 };
    var $mdgriffith$elm_codegen$Internal$Compiler$IsNumber = { $: 1 };
    var $elm$core$String$startsWith = _String_startsWith;
    var $mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions = function (name) {
        return _String_startsWith_fn("number", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsNumber : (_String_startsWith_fn("comparable", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsComparable : (_String_startsWith_fn("appendable", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable : (_String_startsWith_fn("compappend", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable : $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions)));
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted = function (a) {
        return { $: 5, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther_fn = function (restriction, newRestriction) {
        switch (restriction.$) {
            case 0:
                return newRestriction;
            case 5:
                var constraints = restriction.a;
                switch (newRestriction.$) {
                    case 5:
                        var newConstraints = newRestriction.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_Utils_ap(constraints, newConstraints));
                    case 0:
                        return restriction;
                    default:
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_Cons(newRestriction, constraints));
                }
            case 1:
                switch (newRestriction.$) {
                    case 1:
                        return newRestriction;
                    case 0:
                        return restriction;
                    case 5:
                        var constraints = newRestriction.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_Cons(restriction, constraints));
                    default:
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_fromArray([restriction, newRestriction]));
                }
            case 3:
                switch (newRestriction.$) {
                    case 0:
                        return restriction;
                    case 4:
                        return newRestriction;
                    case 3:
                        return newRestriction;
                    case 5:
                        var constraints = newRestriction.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_Cons(restriction, constraints));
                    default:
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_fromArray([restriction, newRestriction]));
                }
            case 2:
                switch (newRestriction.$) {
                    case 0:
                        return restriction;
                    case 4:
                        return newRestriction;
                    case 3:
                        return newRestriction;
                    case 5:
                        var constraints = newRestriction.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_Cons(restriction, constraints));
                    default:
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_fromArray([restriction, newRestriction]));
                }
            default:
                switch (newRestriction.$) {
                    case 0:
                        return restriction;
                    case 4:
                        return newRestriction;
                    case 3:
                        return newRestriction;
                    case 2:
                        return newRestriction;
                    case 5:
                        var constraints = newRestriction.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_Cons(restriction, constraints));
                    default:
                        return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(_List_fromArray([restriction, newRestriction]));
                }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther = F2($mdgriffith$elm_codegen$Internal$Compiler$restrictFurther_fn);
    var $elm$core$Maybe$withDefault_fn = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper_fn = function (existingRestrictions, notation, cache) {
        getRestrictionsHelper: while (true) {
            switch (notation.$) {
                case 6:
                    var _v1 = notation.a;
                    var oneCoords = _v1.a;
                    var one = _v1.b;
                    var _v2 = notation.b;
                    var twoCoords = _v2.a;
                    var two = _v2.b;
                    return existingRestrictions;
                case 0:
                    var name = notation.a;
                    var $temp$existingRestrictions = $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther_fn(existingRestrictions, $mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions(name)), $temp$notation = $elm$core$Maybe$withDefault_fn($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit, $elm$core$Dict$get_fn(name, cache)), $temp$cache = cache;
                    existingRestrictions = $temp$existingRestrictions;
                    notation = $temp$notation;
                    cache = $temp$cache;
                    continue getRestrictionsHelper;
                case 1:
                    var nodedModuleName = notation.a;
                    var vars = notation.b;
                    return existingRestrictions;
                case 2:
                    return existingRestrictions;
                case 3:
                    var nodes = notation.a;
                    return existingRestrictions;
                case 4:
                    var fields = notation.a;
                    return existingRestrictions;
                default:
                    var baseName = notation.a;
                    var _v3 = notation.b;
                    var recordNode = _v3.a;
                    var fields = _v3.b;
                    return existingRestrictions;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper = F3($mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions_fn = function (notation, cache) {
        return $mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper_fn($mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions, notation, cache);
    }, $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions = F2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions_fn);
    var $elm$core$Result$map_fn = function (func, ra) {
        if (!ra.$) {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        }
        else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    }, $elm$core$Result$map = F2($elm$core$Result$map_fn);
    var $elm$core$Result$map2_fn = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(A2(func, a, b));
            }
        }
    }, $elm$core$Result$map2_fn_unwrapped = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(func(a, b));
            }
        }
    }, $elm$core$Result$map2 = F3($elm$core$Result$map2_fn);
    var $elm$core$Dict$member_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$get_fn(key, dict);
        if (!_v0.$) {
            return true;
        }
        else {
            return false;
        }
    }, $elm$core$Dict$member = F2($elm$core$Dict$member_fn);
    var $elm$core$Set$member_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$member_fn(key, dict);
    }, $elm$core$Set$member = F2($elm$core$Set$member_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList_fn = function (visited, cache, nodes, processed) {
        resolveVariableList: while (true) {
            if (!nodes.b) {
                return $elm$core$Result$Ok($elm$core$List$reverse(processed));
            }
            else {
                var _v17 = nodes.a;
                var coords = _v17.a;
                var top = _v17.b;
                var remain = nodes.b;
                var _v18 = $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn(visited, cache, top);
                if (!_v18.$) {
                    var resolved = _v18.a;
                    var $temp$visited = visited, $temp$cache = cache, $temp$nodes = remain, $temp$processed = _List_Cons($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(coords, resolved), processed);
                    visited = $temp$visited;
                    cache = $temp$cache;
                    nodes = $temp$nodes;
                    processed = $temp$processed;
                    continue resolveVariableList;
                }
                else {
                    var err = _v18.a;
                    return $elm$core$Result$Err(err);
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList = F4($mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn = function (visited, cache, annotation) {
        resolveVariables: while (true) {
            switch (annotation.$) {
                case 6:
                    var _v1 = annotation.a;
                    var oneCoords = _v1.a;
                    var one = _v1.b;
                    var _v2 = annotation.b;
                    var twoCoords = _v2.a;
                    var two = _v2.b;
                    return $elm$core$Result$map2_fn_unwrapped(function (oneResolved, twoResolved) {
                        return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(oneCoords, oneResolved), $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(twoCoords, twoResolved));
                    }, $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn(visited, cache, one), $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn(visited, cache, two));
                case 0:
                    var name = annotation.a;
                    if ($elm$core$Set$member_fn(name, visited)) {
                        return $elm$core$Result$Err("Infinite type inference loop!  Whoops.  This is an issue with elm-codegen.  If you can report this to the elm-codegen repo, that would be appreciated!");
                    }
                    else {
                        var _v3 = $elm$core$Dict$get_fn(name, cache);
                        if (_v3.$ === 1) {
                            return $elm$core$Result$Ok(annotation);
                        }
                        else {
                            var newType = _v3.a;
                            var $temp$visited = $elm$core$Set$insert_fn(name, visited), $temp$cache = cache, $temp$annotation = newType;
                            visited = $temp$visited;
                            cache = $temp$cache;
                            annotation = $temp$annotation;
                            continue resolveVariables;
                        }
                    }
                case 1:
                    var nodedModuleName = annotation.a;
                    var vars = annotation.b;
                    return $elm$core$Result$map_fn($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed(nodedModuleName), $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList_fn(visited, cache, vars, _List_Nil));
                case 2:
                    return $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit);
                case 3:
                    var nodes = annotation.a;
                    return $elm$core$Result$map_fn($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled, $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList_fn(visited, cache, nodes, _List_Nil));
                case 4:
                    var fields = annotation.a;
                    return $elm$core$Result$map_fn(A2($elm$core$Basics$composeL, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record, $elm$core$List$reverse), $elm$core$List$foldl_fn_unwrapped(function (_v4, found) {
                        var fieldRange = _v4.a;
                        var _v5 = _v4.b;
                        var name = _v5.a;
                        var _v6 = _v5.b;
                        var fieldTypeRange = _v6.a;
                        var fieldType = _v6.b;
                        if (found.$ === 1) {
                            var err = found.a;
                            return $elm$core$Result$Err(err);
                        }
                        else {
                            var processedFields = found.a;
                            var _v8 = $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn(visited, cache, fieldType);
                            if (_v8.$ === 1) {
                                var err = _v8.a;
                                return $elm$core$Result$Err(err);
                            }
                            else {
                                var resolvedField = _v8.a;
                                var restrictions = $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions_fn(annotation, cache);
                                var _v9 = $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions_fn(restrictions, resolvedField);
                                if (!_v9.$) {
                                    return $elm$core$Result$Ok(_List_Cons($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(fieldRange, _Utils_Tuple2(name, $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(fieldTypeRange, resolvedField))), processedFields));
                                }
                                else {
                                    var err = _v9.a;
                                    return $elm$core$Result$Err(err);
                                }
                            }
                        }
                    }, $elm$core$Result$Ok(_List_Nil), fields));
                default:
                    var baseName = annotation.a;
                    var _v10 = annotation.b;
                    var recordNode = _v10.a;
                    var fields = _v10.b;
                    var newFieldResult = $elm$core$List$foldl_fn_unwrapped(function (_v11, found) {
                        var fieldRange = _v11.a;
                        var _v12 = _v11.b;
                        var name = _v12.a;
                        var _v13 = _v12.b;
                        var fieldTypeRange = _v13.a;
                        var fieldType = _v13.b;
                        if (found.$ === 1) {
                            var err = found.a;
                            return $elm$core$Result$Err(err);
                        }
                        else {
                            var processedFields = found.a;
                            var _v15 = $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn(visited, cache, fieldType);
                            if (_v15.$ === 1) {
                                var err = _v15.a;
                                return $elm$core$Result$Err(err);
                            }
                            else {
                                var resolvedField = _v15.a;
                                var restrictions = $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions_fn(annotation, cache);
                                return $elm$core$Result$Ok(_List_Cons($stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(fieldRange, _Utils_Tuple2(name, $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(fieldTypeRange, resolvedField))), processedFields));
                            }
                        }
                    }, $elm$core$Result$Ok(_List_Nil), fields);
                    return $elm$core$Result$map_fn(function (newFields) {
                        return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn(baseName, $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(recordNode, $elm$core$List$reverse(newFields)));
                    }, newFieldResult);
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables = F3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn = function (aliases, vars, one, two) {
        unifiable: while (true) {
            switch (one.$) {
                case 0:
                    var varName = one.a;
                    var _v21 = $elm$core$Dict$get_fn(varName, vars);
                    if (_v21.$ === 1) {
                        if (!two.$) {
                            var varNameB = two.a;
                            return _Utils_eq(varNameB, varName) ? _Utils_Tuple2(vars, $elm$core$Result$Ok(one)) : _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(varName, two, vars), $elm$core$Result$Ok(two));
                        }
                        else {
                            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(varName, two, vars), $elm$core$Result$Ok(two));
                        }
                    }
                    else {
                        var found = _v21.a;
                        if (!two.$) {
                            var varNameB = two.a;
                            if (_Utils_eq(varNameB, varName)) {
                                return _Utils_Tuple2(vars, $elm$core$Result$Ok(one));
                            }
                            else {
                                var _v24 = $elm$core$Dict$get_fn(varNameB, vars);
                                if (_v24.$ === 1) {
                                    return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(varNameB, found, vars), $elm$core$Result$Ok(two));
                                }
                                else {
                                    var foundTwo = _v24.a;
                                    var $temp$aliases = aliases, $temp$vars = vars, $temp$one = found, $temp$two = foundTwo;
                                    aliases = $temp$aliases;
                                    vars = $temp$vars;
                                    one = $temp$one;
                                    two = $temp$two;
                                    continue unifiable;
                                }
                            }
                        }
                        else {
                            var $temp$aliases = aliases, $temp$vars = vars, $temp$one = found, $temp$two = two;
                            aliases = $temp$aliases;
                            vars = $temp$vars;
                            one = $temp$one;
                            two = $temp$two;
                            continue unifiable;
                        }
                    }
                case 1:
                    var oneName = one.a;
                    var oneVars = one.b;
                    switch (two.$) {
                        case 1:
                            var twoName = two.a;
                            var twoContents = two.b;
                            if (_Utils_eq($mdgriffith$elm_codegen$Internal$Compiler$denode(oneName), $mdgriffith$elm_codegen$Internal$Compiler$denode(twoName))) {
                                var _v26 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists_fn(aliases, vars, oneVars, twoContents, _List_Nil);
                                if (!_v26.b.$) {
                                    var newVars = _v26.a;
                                    var unifiedContent = _v26.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn(twoName, unifiedContent)));
                                }
                                else {
                                    var newVars = _v26.a;
                                    var err = _v26.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                                }
                            }
                            else {
                                return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                            }
                        case 0:
                            var b = two.a;
                            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                        default:
                            var _v27 = $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias_fn(aliases, vars, oneName, oneVars, two);
                            if (_v27.$ === 1) {
                                return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                            }
                            else {
                                var unified = _v27.a;
                                return unified;
                            }
                    }
                case 2:
                    switch (two.$) {
                        case 0:
                            var b = two.a;
                            var _v29 = $elm$core$Dict$get_fn(b, vars);
                            if (_v29.$ === 1) {
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                            }
                            else {
                                var foundTwo = _v29.a;
                                var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                continue unifiable;
                            }
                        case 2:
                            return _Utils_Tuple2(vars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit));
                        default:
                            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                    }
                case 3:
                    var valsA = one.a;
                    switch (two.$) {
                        case 0:
                            var b = two.a;
                            var _v31 = $elm$core$Dict$get_fn(b, vars);
                            if (_v31.$ === 1) {
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                            }
                            else {
                                var foundTwo = _v31.a;
                                var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                continue unifiable;
                            }
                        case 3:
                            var valsB = two.a;
                            var _v32 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists_fn(aliases, vars, valsA, valsB, _List_Nil);
                            if (!_v32.b.$) {
                                var newVars = _v32.a;
                                var unified = _v32.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(unified)));
                            }
                            else {
                                var newVars = _v32.a;
                                var err = _v32.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                            }
                        default:
                            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                    }
                case 4:
                    var fieldsA = one.a;
                    switch (two.$) {
                        case 0:
                            var b = two.a;
                            var _v34 = $elm$core$Dict$get_fn(b, vars);
                            if (_v34.$ === 1) {
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                            }
                            else {
                                var foundTwo = _v34.a;
                                var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                continue unifiable;
                            }
                        case 5:
                            var _v35 = two.a;
                            var twoRecName = _v35.b;
                            var _v36 = two.b;
                            var fieldsB = _v36.b;
                            var _v37 = $elm$core$Dict$get_fn(twoRecName, vars);
                            if (_v37.$ === 1) {
                                var _v38 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                                if (!_v38.b.$) {
                                    var newVars = _v38.a;
                                    var unifiedFields = _v38.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                                }
                                else {
                                    var newVars = _v38.a;
                                    var err = _v38.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                                }
                            }
                            else {
                                var knownType = _v37.a;
                                var _v39 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                                if (!_v39.b.$) {
                                    var newVars = _v39.a;
                                    var unifiedFields = _v39.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                                }
                                else {
                                    var newVars = _v39.a;
                                    var err = _v39.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                                }
                            }
                        case 4:
                            var fieldsB = two.a;
                            var _v40 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                            if (!_v40.b.$) {
                                var newVars = _v40.a;
                                var unifiedFields = _v40.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                            }
                            else {
                                var newVars = _v40.a;
                                var err = _v40.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                            }
                        case 1:
                            var twoName = two.a;
                            var twoVars = two.b;
                            var _v41 = $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias_fn(aliases, vars, twoName, twoVars, one);
                            if (_v41.$ === 1) {
                                return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                            }
                            else {
                                var unified = _v41.a;
                                return unified;
                            }
                        default:
                            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                    }
                case 5:
                    var _v42 = one.a;
                    var reVarName = _v42.b;
                    var _v43 = one.b;
                    var fieldsARange = _v43.a;
                    var fieldsA = _v43.b;
                    switch (two.$) {
                        case 0:
                            var b = two.a;
                            var _v45 = $elm$core$Dict$get_fn(b, vars);
                            if (_v45.$ === 1) {
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                            }
                            else {
                                var foundTwo = _v45.a;
                                var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                continue unifiable;
                            }
                        case 5:
                            var _v46 = two.a;
                            var twoRecName = _v46.b;
                            var _v47 = two.b;
                            var fieldsB = _v47.b;
                            var _v48 = $elm$core$Dict$get_fn(twoRecName, vars);
                            if (_v48.$ === 1) {
                                var _v49 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                                if (!_v49.b.$) {
                                    var newVars = _v49.a;
                                    var unifiedFields = _v49.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                                }
                                else {
                                    var newVars = _v49.a;
                                    var err = _v49.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                                }
                            }
                            else {
                                var knownType = _v48.a;
                                var _v50 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                                if (!_v50.b.$) {
                                    var newVars = _v50.a;
                                    var unifiedFields = _v50.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                                }
                                else {
                                    var newVars = _v50.a;
                                    var err = _v50.b.a;
                                    return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                                }
                            }
                        case 4:
                            var fieldsB = two.a;
                            var _v51 = $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn(aliases, vars, fieldsA, fieldsB, _List_Nil);
                            if (!_v51.b.$) {
                                var newVars = _v51.a;
                                var unifiedFields = _v51.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
                            }
                            else {
                                var newVars = _v51.a;
                                var err = _v51.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                            }
                        case 1:
                            var twoName = two.a;
                            var twoVars = two.b;
                            var _v52 = $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias_fn(aliases, vars, twoName, twoVars, one);
                            if (_v52.$ === 1) {
                                return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                            }
                            else {
                                var unified = _v52.a;
                                return unified;
                            }
                        default:
                            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                    }
                default:
                    var oneA = one.a;
                    var oneB = one.b;
                    switch (two.$) {
                        case 0:
                            var b = two.a;
                            var _v54 = $elm$core$Dict$get_fn(b, vars);
                            if (_v54.$ === 1) {
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(b, one, vars), $elm$core$Result$Ok(one));
                            }
                            else {
                                var foundTwo = _v54.a;
                                var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                continue unifiable;
                            }
                        case 6:
                            var twoA = two.a;
                            var twoB = two.b;
                            var _v55 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, vars, $mdgriffith$elm_codegen$Internal$Compiler$denode(oneA), $mdgriffith$elm_codegen$Internal$Compiler$denode(twoA));
                            if (!_v55.b.$) {
                                var aVars = _v55.a;
                                var unifiedA = _v55.b.a;
                                var _v56 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, aVars, $mdgriffith$elm_codegen$Internal$Compiler$denode(oneB), $mdgriffith$elm_codegen$Internal$Compiler$denode(twoB));
                                if (!_v56.b.$) {
                                    var bVars = _v56.a;
                                    var unifiedB = _v56.b.a;
                                    return _Utils_Tuple2(bVars, $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedA), $mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedB))));
                                }
                                else {
                                    var otherwise = _v56;
                                    return otherwise;
                                }
                            }
                            else {
                                var otherwise = _v55;
                                return otherwise;
                            }
                        default:
                            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify_fn(one, two)));
                    }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifiable = F4($mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn = function (aliases, vars, one, two, unified) {
        unifiableFields: while (true) {
            var _v13 = _Utils_Tuple2(one, two);
            if (!_v13.a.b) {
                if (!_v13.b.b) {
                    return _Utils_Tuple2(vars, $elm$core$Result$Ok($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$reverse(unified))));
                }
                else {
                    return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables));
                }
            }
            else {
                var _v14 = _v13.a;
                var oneX = _v14.a;
                var oneRemain = _v14.b;
                var twoFields = _v13.b;
                var _v15 = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX);
                var oneFieldName = _v15.a;
                var oneFieldVal = _v15.b;
                var oneName = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldName);
                var oneVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldVal);
                var _v16 = $mdgriffith$elm_codegen$Internal$Compiler$getField_fn(oneName, oneVal, twoFields, _List_Nil);
                if (!_v16.$) {
                    var _v17 = _v16.a;
                    var matchingFieldVal = _v17.a;
                    var remainingTwo = _v17.b;
                    var _v18 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, vars, oneVal, matchingFieldVal);
                    var newVars = _v18.a;
                    var unifiedFieldResult = _v18.b;
                    if (!unifiedFieldResult.$) {
                        var unifiedField = unifiedFieldResult.a;
                        var $temp$aliases = aliases, $temp$vars = newVars, $temp$one = oneRemain, $temp$two = remainingTwo, $temp$unified = _List_Cons(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(oneName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedField)), unified);
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        unified = $temp$unified;
                        continue unifiableFields;
                    }
                    else {
                        var err = unifiedFieldResult.a;
                        return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                    }
                }
                else {
                    var notFound = _v16.a;
                    return _Utils_Tuple2(vars, $elm$core$Result$Err(notFound));
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields = F5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists_fn = function (aliases, vars, one, two, unified) {
        unifiableLists: while (true) {
            var _v6 = _Utils_Tuple2(one, two);
            _v6$3: while (true) {
                if (!_v6.a.b) {
                    if (!_v6.b.b) {
                        return _Utils_Tuple2(vars, $elm$core$Result$Ok($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$reverse(unified))));
                    }
                    else {
                        break _v6$3;
                    }
                }
                else {
                    if (_v6.b.b) {
                        if ((!_v6.a.b.b) && (!_v6.b.b.b)) {
                            var _v7 = _v6.a;
                            var oneX = _v7.a;
                            var _v8 = _v6.b;
                            var twoX = _v8.a;
                            var _v9 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, vars, $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX), $mdgriffith$elm_codegen$Internal$Compiler$denode(twoX));
                            if (!_v9.b.$) {
                                var newVars = _v9.a;
                                var un = _v9.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Ok($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$reverse(_List_Cons(un, unified)))));
                            }
                            else {
                                var newVars = _v9.a;
                                var err = _v9.b.a;
                                return _Utils_Tuple2(newVars, $elm$core$Result$Err(err));
                            }
                        }
                        else {
                            var _v10 = _v6.a;
                            var oneX = _v10.a;
                            var oneRemain = _v10.b;
                            var _v11 = _v6.b;
                            var twoX = _v11.a;
                            var twoRemain = _v11.b;
                            var _v12 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, vars, $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX), $mdgriffith$elm_codegen$Internal$Compiler$denode(twoX));
                            if (!_v12.b.$) {
                                var newVars = _v12.a;
                                var un = _v12.b.a;
                                var $temp$aliases = aliases, $temp$vars = newVars, $temp$one = oneRemain, $temp$two = twoRemain, $temp$unified = _List_Cons(un, unified);
                                aliases = $temp$aliases;
                                vars = $temp$vars;
                                one = $temp$one;
                                two = $temp$two;
                                unified = $temp$unified;
                                continue unifiableLists;
                            }
                            else {
                                var newVars = _v12.a;
                                var err = _v12.b.a;
                                return _Utils_Tuple2(vars, $elm$core$Result$Err(err));
                            }
                        }
                    }
                    else {
                        break _v6$3;
                    }
                }
            }
            return _Utils_Tuple2(vars, $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables));
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists = F5($mdgriffith$elm_codegen$Internal$Compiler$unifiableLists_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias_fn = function (aliases, vars, typename, typeVars, typeToUnifyWith) {
        var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$getAlias_fn(typename, aliases);
        if (_v0.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var foundAlias = _v0.a;
            var fullAliasedType = function () {
                var _v3 = foundAlias.bl;
                if (!_v3.b) {
                    return foundAlias.aE;
                }
                else {
                    var makeAliasVarCache = F2(function (varName, _v5) {
                        var varType = _v5.b;
                        return _Utils_Tuple2(varName, varType);
                    });
                    var _v4 = $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn($elm$core$Set$empty, $elm$core$Dict$fromList(_List_map2_fn(makeAliasVarCache, foundAlias.bl, typeVars)), foundAlias.aE);
                    if (!_v4.$) {
                        var resolvedType = _v4.a;
                        return resolvedType;
                    }
                    else {
                        return foundAlias.aE;
                    }
                }
            }();
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, vars, fullAliasedType, typeToUnifyWith);
            var returnedVars = _v1.a;
            var unifiedResult = _v1.b;
            if (!unifiedResult.$) {
                var finalInference = unifiedResult.a;
                return $elm$core$Maybe$Just(_Utils_Tuple2(returnedVars, $elm$core$Result$Ok(fullAliasedType)));
            }
            else {
                var err = unifiedResult.a;
                return $elm$core$Maybe$Nothing;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias = F5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper_fn = function (aliases, cache, fn, args) {
        applyTypeHelper: while (true) {
            switch (fn.$) {
                case 6:
                    var one = fn.a;
                    var two = fn.b;
                    if (!args.b) {
                        return $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: cache, aq: fn });
                    }
                    else {
                        var top = args.a;
                        var rest = args.b;
                        var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(aliases, cache, $mdgriffith$elm_codegen$Internal$Compiler$denode(one), top);
                        if (!_v2.b.$) {
                            var variableCache = _v2.a;
                            var $temp$aliases = aliases, $temp$cache = variableCache, $temp$fn = $mdgriffith$elm_codegen$Internal$Compiler$denode(two), $temp$args = rest;
                            aliases = $temp$aliases;
                            cache = $temp$cache;
                            fn = $temp$fn;
                            args = $temp$args;
                            continue applyTypeHelper;
                        }
                        else {
                            var varCache = _v2.a;
                            var err = _v2.b.a;
                            return $elm$core$Result$Err(_List_fromArray([err]));
                        }
                    }
                case 0:
                    var varName = fn.a;
                    if (!args.b) {
                        return $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: cache, aq: fn });
                    }
                    else {
                        var resultType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(varName + "_result");
                        return $elm$core$Result$Ok({
                            a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                            f: $mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(varName, $mdgriffith$elm_codegen$Internal$Compiler$makeFunction_fn(resultType, args), cache),
                            aq: resultType
                        });
                    }
                default:
                    var _final = fn;
                    if (!args.b) {
                        return $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: cache, aq: fn });
                    }
                    else {
                        return $elm$core$Result$Err(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs_fn(_final, args)
                        ]));
                    }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper = F4($mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper_fn);
    var $elm$core$Dict$merge_fn = function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
        var stepState = F3(function (rKey, rValue, _v0) {
            stepState: while (true) {
                var list = _v0.a;
                var result = _v0.b;
                if (!list.b) {
                    return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                }
                else {
                    var _v2 = list.a;
                    var lKey = _v2.a;
                    var lValue = _v2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _v0 = $temp$_v0;
                        continue stepState;
                    }
                    else {
                        if (_Utils_cmp(lKey, rKey) > 0) {
                            return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                        }
                        else {
                            return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result));
                        }
                    }
                }
            }
        });
        var _v3 = $elm$core$Dict$foldl_fn(stepState, _Utils_Tuple2($elm$core$Dict$toList(leftDict), initialResult), rightDict);
        var leftovers = _v3.a;
        var intermediateResult = _v3.b;
        return $elm$core$List$foldl_fn_unwrapped(function (_v4, result) {
            var k = _v4.a;
            var v = _v4.b;
            return A3(leftStep, k, v, result);
        }, intermediateResult, leftovers);
    }, $elm$core$Dict$merge = F6($elm$core$Dict$merge_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn = function (one, two) {
        return $elm$core$Dict$merge_fn($elm$core$Dict$insert, F4(function (key, oneVal, twoVal, d) {
            if (oneVal.$ === 5) {
                var recordName = oneVal.a;
                var _v1 = oneVal.b;
                var oneRange = _v1.a;
                var recordDefinition = _v1.b;
                if (twoVal.$ === 5) {
                    var twoRecordName = twoVal.a;
                    var _v3 = twoVal.b;
                    var twoRange = _v3.a;
                    var twoRecordDefinition = _v3.b;
                    return $elm$core$Dict$insert_fn(key, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn(recordName, $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(oneRange, _Utils_ap(recordDefinition, twoRecordDefinition))), d);
                }
                else {
                    return $elm$core$Dict$insert_fn(key, oneVal, d);
                }
            }
            else {
                return $elm$core$Dict$insert_fn(key, oneVal, d);
            }
        }), $elm$core$Dict$insert, one, two, $elm$core$Dict$empty);
    }, $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences = F2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences_fn = function (expressions, annotations, inferences) {
        mergeArgInferences: while (true) {
            if (!expressions.b) {
                return $elm$core$Result$Ok({
                    f: inferences,
                    aG: $elm$core$List$reverse(annotations)
                });
            }
            else {
                var top = expressions.a;
                var remain = expressions.b;
                var _v1 = top.p;
                if (!_v1.$) {
                    var ann = _v1.a;
                    var $temp$expressions = remain, $temp$annotations = _List_Cons(ann.aq, annotations), $temp$inferences = $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(inferences, ann.f);
                    expressions = $temp$expressions;
                    annotations = $temp$annotations;
                    inferences = $temp$inferences;
                    continue mergeArgInferences;
                }
                else {
                    var err = _v1.a;
                    return $elm$core$Result$Err(err);
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences = F3($mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences_fn);
    var $mdgriffith$elm_codegen$Internal$Index$typecheck = function (_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope = _v0.c;
        var check = _v0.d;
        return check;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$applyType_fn = function (index, annotation, args) {
        if (annotation.$ === 1) {
            var err = annotation.a;
            return $elm$core$Result$Err(err);
        }
        else {
            var fnAnnotation = annotation.a;
            if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences_fn(args, _List_Nil, fnAnnotation.f);
                if (!_v1.$) {
                    var mergedArgs = _v1.a;
                    return $mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper_fn(fnAnnotation.a1, mergedArgs.f, fnAnnotation.aq, mergedArgs.aG);
                }
                else {
                    var err = _v1.a;
                    return $elm$core$Result$Err(err);
                }
            }
            else {
                return $elm$core$Result$Err(_List_Nil);
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$applyType = F3($mdgriffith$elm_codegen$Internal$Compiler$applyType_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$Expression = $elm$core$Basics$identity;
    var $mdgriffith$elm_codegen$Internal$Index$Index_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $mdgriffith$elm_codegen$Internal$Index$Index = F4($mdgriffith$elm_codegen$Internal$Index$Index_fn);
    var $mdgriffith$elm_codegen$Internal$Index$dive = function (_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope = _v0.c;
        var check = _v0.d;
        return $mdgriffith$elm_codegen$Internal$Index$Index_fn(0, _List_Cons(top, tail), scope, check);
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$expression = function (toExp) {
        return function (index) {
            return toExp($mdgriffith$elm_codegen$Internal$Index$dive(index));
        };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getImports = function (exp) {
        return exp.d;
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
        return { $: 14, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$parens = function (expr) {
        switch (expr.$) {
            case 0:
                return expr;
            case 7:
                var i = expr.a;
                return expr;
            case 11:
                return expr;
            case 8:
                return expr;
            case 9:
                return expr;
            case 13:
                return expr;
            case 14:
                return expr;
            case 12:
                return expr;
            case 19:
                return expr;
            case 3:
                return expr;
            case 21:
                return expr;
            case 22:
                return expr;
            case 18:
                return expr;
            case 17:
                return expr;
            default:
                return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
        }
    };
    var $mdgriffith$elm_codegen$Internal$Index$next = function (_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope = _v0.c;
        var check = _v0.d;
        return $mdgriffith$elm_codegen$Internal$Index$Index_fn(top + 1, tail, scope, check);
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$threadHelper_fn = function (index, exps, rendered) {
        threadHelper: while (true) {
            if (!exps.b) {
                return $elm$core$List$reverse(rendered);
            }
            else {
                var toExpDetails = exps.a;
                var remain = exps.b;
                var $temp$index = $mdgriffith$elm_codegen$Internal$Index$next(index), $temp$exps = remain, $temp$rendered = _List_Cons(toExpDetails(index), rendered);
                index = $temp$index;
                exps = $temp$exps;
                rendered = $temp$rendered;
                continue threadHelper;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$threadHelper = F3($mdgriffith$elm_codegen$Internal$Compiler$threadHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$thread_fn = function (index, exps) {
        return $mdgriffith$elm_codegen$Internal$Compiler$threadHelper_fn(index, exps, _List_Nil);
    }, $mdgriffith$elm_codegen$Internal$Compiler$thread = F2($mdgriffith$elm_codegen$Internal$Compiler$thread_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn = function (index, _v0) {
        var toExp = _v0;
        return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Index$next(index), toExp(index));
    }, $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails = F2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn);
    var $mdgriffith$elm_codegen$Elm$apply_fn = function (fnExp, argExpressions) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, fnExp);
            var annotationIndex = _v0.a;
            var fnDetails = _v0.b;
            var args = $mdgriffith$elm_codegen$Internal$Compiler$thread_fn(annotationIndex, argExpressions);
            return {
                p: $mdgriffith$elm_codegen$Internal$Compiler$applyType_fn(index, fnDetails.p, args),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$Application($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, _List_Cons(fnDetails.c, $elm$core$List$map_fn(A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$parens, function ($) {
                    return $.c;
                }), args)))),
                d: _Utils_ap(fnDetails.d, $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getImports, args))
            };
        });
    }, $mdgriffith$elm_codegen$Elm$apply = F2($mdgriffith$elm_codegen$Elm$apply_fn);
    var $mdgriffith$elm_codegen$Elm$Annotation$function_fn = function (anns, _return) {
        return {
            a1: $elm$core$List$foldl_fn_unwrapped(function (ann, aliases) {
                return $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann), aliases);
            }, $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, _List_Cons(_return, anns)),
            p: $elm$core$List$foldr_fn(F2(function (ann, fn) {
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(ann), $mdgriffith$elm_codegen$Internal$Compiler$nodify(fn));
            }), $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(_return), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, anns)),
            d: _Utils_ap($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(_return), $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, anns))
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$function = F2($mdgriffith$elm_codegen$Elm$Annotation$function_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
        return { $: 19, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedList_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$elm_codegen$Internal$Compiler$MismatchedList = F2($mdgriffith$elm_codegen$Internal$Compiler$MismatchedList_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifyHelper_fn = function (exps, existing) {
        unifyHelper: while (true) {
            if (!exps.b) {
                return $elm$core$Result$Ok(existing);
            }
            else {
                var top = exps.a;
                var remain = exps.b;
                var _v1 = top.p;
                if (!_v1.$) {
                    var ann = _v1.a;
                    var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(ann.a1, ann.f, ann.aq, existing.aq);
                    if (_v2.b.$ === 1) {
                        var err = _v2.b.a;
                        return $elm$core$Result$Err(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$MismatchedList_fn(ann.aq, existing.aq)
                        ]));
                    }
                    else {
                        var cache = _v2.a;
                        var _new = _v2.b.a;
                        var $temp$exps = remain, $temp$existing = {
                            a1: existing.a1,
                            f: $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(existing.f, cache),
                            aq: _new
                        };
                        exps = $temp$exps;
                        existing = $temp$existing;
                        continue unifyHelper;
                    }
                }
                else {
                    var err = _v1.a;
                    return $elm$core$Result$Err(err);
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifyHelper = F2($mdgriffith$elm_codegen$Internal$Compiler$unifyHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unify = function (exps) {
        if (!exps.b) {
            return $elm$core$Result$Ok({
                a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                f: $elm$core$Dict$empty,
                aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType("a")
            });
        }
        else {
            var top = exps.a;
            var remain = exps.b;
            var _v1 = top.p;
            if (!_v1.$) {
                var ann = _v1.a;
                return $mdgriffith$elm_codegen$Internal$Compiler$unifyHelper_fn(remain, ann);
            }
            else {
                var err = _v1.a;
                return $elm$core$Result$Err(err);
            }
        }
    };
    var $mdgriffith$elm_codegen$Elm$list = function (exprs) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var exprDetails = $mdgriffith$elm_codegen$Internal$Compiler$thread_fn(index, exprs);
            return {
                p: $elm$core$Result$map_fn(function (inner) {
                    return {
                        a1: inner.a1,
                        f: inner.f,
                        aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(_List_Nil, "List")), _List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(inner.aq)
                        ]))
                    };
                }, $mdgriffith$elm_codegen$Internal$Compiler$unify(exprDetails)),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr($elm$core$List$map_fn(A2($elm$core$Basics$composeR, function ($) {
                    return $.c;
                }, $mdgriffith$elm_codegen$Internal$Compiler$nodify), exprDetails)),
                d: $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getImports, exprDetails)
            };
        });
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn);
    var $mdgriffith$elm_codegen$Internal$Index$indexToString = function (_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope = _v0.c;
        var check = _v0.d;
        return _Utils_ap((!top) ? "" : ("_" + $elm$core$String$fromInt(top)), function () {
            if (!tail.b) {
                return "";
            }
            else {
                if (!tail.b.b) {
                    var one = tail.a;
                    return "_" + $elm$core$String$fromInt(one);
                }
                else {
                    if (!tail.b.b.b) {
                        var one = tail.a;
                        var _v2 = tail.b;
                        var two = _v2.a;
                        return "_" + ($elm$core$String$fromInt(one) + ("_" + $elm$core$String$fromInt(two)));
                    }
                    else {
                        if (!tail.b.b.b.b) {
                            var one = tail.a;
                            var _v3 = tail.b;
                            var two = _v3.a;
                            var _v4 = _v3.b;
                            var three = _v4.a;
                            return "_" + ($elm$core$String$fromInt(one) + ("_" + ($elm$core$String$fromInt(two) + ("_" + $elm$core$String$fromInt(three)))));
                        }
                        else {
                            return "_" + $elm$core$String$join_fn("_", $elm$core$List$map_fn($elm$core$String$fromInt, tail));
                        }
                    }
                }
            }
        }());
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn = function (fn, _v0) {
        var range = _v0.a;
        var n = _v0.b;
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(range, fn(n));
    }, $mdgriffith$elm_codegen$Internal$Compiler$mapNode = F2($mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation_fn = function (index, ann) {
        switch (ann.$) {
            case 0:
                var str = ann.a;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(_Utils_ap(str, $mdgriffith$elm_codegen$Internal$Index$indexToString(index)));
            case 1:
                var modName = ann.a;
                var anns = ann.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn(modName, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$mapNode($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)), anns));
            case 2:
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit;
            case 3:
                var tupled = ann.a;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$mapNode($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)), tupled));
            case 4:
                var recordDefinition = ann.a;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$protectField(index), recordDefinition));
            case 5:
                var recordName = ann.a;
                var _v3 = ann.b;
                var recordRange = _v3.a;
                var recordDefinition = _v3.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn($mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn(function (n) {
                    return _Utils_ap(n, $mdgriffith$elm_codegen$Internal$Index$indexToString(index));
                }, recordName), $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(recordRange, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$protectField(index), recordDefinition)));
            default:
                var one = ann.a;
                var two = ann.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index), one), $mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index), two));
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation = F2($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$protectField_fn = function (index, _v0) {
        var nodeRange = _v0.a;
        var _v1 = _v0.b;
        var nodedName = _v1.a;
        var nodedType = _v1.b;
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(nodeRange, _Utils_Tuple2(nodedName, $mdgriffith$elm_codegen$Internal$Compiler$mapNode_fn($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index), nodedType)));
    }, $mdgriffith$elm_codegen$Internal$Compiler$protectField = F2($mdgriffith$elm_codegen$Internal$Compiler$protectField_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getInnerInference_fn = function (index, _v0) {
        var details = _v0;
        return {
            a1: details.a1,
            f: $elm$core$Dict$empty,
            aq: $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation_fn(index, details.p)
        };
    }, $mdgriffith$elm_codegen$Internal$Compiler$getInnerInference = F2($mdgriffith$elm_codegen$Internal$Compiler$getInnerInference_fn);
    var $mdgriffith$elm_codegen$Internal$Index$protectTypeName_fn = function (base, index) {
        var top = index.a;
        var tail = index.b;
        var scope = index.c;
        var check = index.d;
        if (!tail.b) {
            return $mdgriffith$elm_codegen$Internal$Format$formatValue(base);
        }
        else {
            return $mdgriffith$elm_codegen$Internal$Format$formatValue(_Utils_ap(base, $mdgriffith$elm_codegen$Internal$Index$indexToString(index)));
        }
    }, $mdgriffith$elm_codegen$Internal$Index$protectTypeName = F2($mdgriffith$elm_codegen$Internal$Index$protectTypeName_fn);
    var $mdgriffith$elm_codegen$Elm$value = function (details) {
        return function (index) {
            return {
                p: function () {
                    var _v0 = details.p;
                    if (_v0.$ === 1) {
                        var typename = $mdgriffith$elm_codegen$Internal$Index$protectTypeName_fn(details.r, index);
                        return $elm$core$Result$Ok({
                            a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                            f: $elm$core$Dict$empty,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(typename)
                        });
                    }
                    else {
                        var ann = _v0.a;
                        return $elm$core$Result$Ok($mdgriffith$elm_codegen$Internal$Compiler$getInnerInference_fn(index, ann));
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(details.q, $mdgriffith$elm_codegen$Internal$Format$sanitize(details.r)),
                d: function () {
                    var _v1 = details.p;
                    if (_v1.$ === 1) {
                        var _v2 = details.q;
                        if (!_v2.b) {
                            return _List_Nil;
                        }
                        else {
                            return _List_fromArray([details.q]);
                        }
                    }
                    else {
                        var ann = _v1.a;
                        var _v3 = details.q;
                        if (!_v3.b) {
                            return $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann);
                        }
                        else {
                            return _List_Cons(details.q, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann));
                        }
                    }
                }()
            };
        };
    };
    var $author$project$Gen$Platform$Cmd$batch = function (batchArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ])))),
            q: _List_fromArray(["Cmd"]),
            r: "batch"
        }), _List_fromArray([
            $mdgriffith$elm_codegen$Elm$list(batchArg)
        ]));
    };
    var $author$project$Gen$App$Effect$call_ = {
        bD: function (backArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$int]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "back"
            }), _List_fromArray([backArg]));
        },
        cV: function (forwardArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$int]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "forward"
            }), _List_fromArray([forwardArg]));
        },
        dM: function (loadArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$string]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "load"
            }), _List_fromArray([loadArg]));
        },
        dP: F2(function (mapArg, mapArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "map"
            }), _List_fromArray([mapArg, mapArg0]));
        }),
        eL: function (pushUrlArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$string]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "pushUrl"
            }), _List_fromArray([pushUrlArg]));
        },
        eY: function (replaceUrlArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$string]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "replaceUrl"
            }), _List_fromArray([replaceUrlArg]));
        },
        fS: F2(function (toCmdArg, toCmdArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil),
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Effect"]),
                r: "toCmd"
            }), _List_fromArray([toCmdArg, toCmdArg0]));
        })
    };
    var $author$project$Gen$App$State$call_ = {
        b9: function (currentArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ])))),
                q: _List_fromArray(["App", "State"]),
                r: "current"
            }), _List_fromArray([currentArg]));
        },
        c4: F2(function (getArg, getArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$string,
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ])))),
                q: _List_fromArray(["App", "State"]),
                r: "get"
            }), _List_fromArray([getArg, getArg0]));
        }),
        dt: F3(function (insertArg, insertArg0, insertArg1) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$string,
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state"),
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ])))),
                q: _List_fromArray(["App", "State"]),
                r: "insert"
            }), _List_fromArray([insertArg, insertArg0, insertArg1]));
        }),
        fi: F2(function (setCurrentArg, setCurrentArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$string,
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ])))),
                q: _List_fromArray(["App", "State"]),
                r: "setCurrent"
            }), _List_fromArray([setCurrentArg, setCurrentArg0]));
        }),
        fY: function (toNotFoundArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ])))),
                q: _List_fromArray(["App", "State"]),
                r: "toNotFound"
            }), _List_fromArray([toNotFoundArg]));
        }
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn = function (one, two) {
        return {
            a1: $elm$core$Dict$union_fn($mdgriffith$elm_codegen$Elm$Annotation$getAliases(one), $mdgriffith$elm_codegen$Elm$Annotation$getAliases(two)),
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, _List_fromArray([
                $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(one),
                $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(two)
            ]))),
            d: _Utils_ap($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(one), $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(two))
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$tuple = F2($mdgriffith$elm_codegen$Elm$Annotation$tuple_fn);
    var $mdgriffith$elm_codegen$Elm$Annotation$unit = { a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit, d: _List_Nil };
    var $author$project$Gen$Browser$call_ = {
        bw: function (applicationArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                        _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("flags"),
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Url", _List_Nil),
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil)
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser"]), "Document", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ])))),
                        _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ])))),
                        _Utils_Tuple2("onUrlRequest", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser"]), "UrlRequest", _List_Nil)
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$var("msg"))),
                        _Utils_Tuple2("onUrlChange", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Url", _List_Nil)
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$var("msg")))
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Platform"]), "Program", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("flags"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser"]),
                r: "application"
            }), _List_fromArray([applicationArg]));
        },
        aM: function (documentArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                        _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("flags")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser"]), "Document", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ])))),
                        _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Platform"]), "Program", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("flags"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser"]),
                r: "document"
            }), _List_fromArray([documentArg]));
        },
        cp: function (elementArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                        _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("flags")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Html"]), "Html", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ])))),
                        _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))),
                        _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ]))))
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Platform"]), "Program", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("flags"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser"]),
                r: "element"
            }), _List_fromArray([elementArg]));
        },
        e9: function (sandboxArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                        _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$var("model")),
                        _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Html"]), "Html", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                        ])))),
                        _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]), $mdgriffith$elm_codegen$Elm$Annotation$var("model")))
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Platform"]), "Program", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$unit,
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser"]),
                r: "sandbox"
            }), _List_fromArray([sandboxArg]));
        }
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$cmd = function (inner) {
        return $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "Cmd", _List_fromArray([inner]));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Result$andThen_fn = function (callback, result) {
        if (!result.$) {
            var value = result.a;
            return callback(value);
        }
        else {
            var msg = result.a;
            return $elm$core$Result$Err(msg);
        }
    }, $elm$core$Result$andThen = F2($elm$core$Result$andThen_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Node$map_fn = function (f, _v0) {
        var r = _v0.a;
        var a = _v0.b;
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(r, f(a));
    }, $stil4m$elm_syntax$Elm$Syntax$Node$map = F2($stil4m$elm_syntax$Elm$Syntax$Node$map_fn);
    var $elm$core$Tuple$mapSecond_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    }, $elm$core$Tuple$mapSecond = F2($elm$core$Tuple$mapSecond_fn);
    var $mdgriffith$elm_codegen$Internal$Clean$doRename_fn = function (dict, ann) {
        switch (ann.$) {
            case 0:
                var generic = ann.a;
                var _v1 = $elm$core$Dict$get_fn(generic, dict);
                if (_v1.$ === 1) {
                    return ann;
                }
                else {
                    var renamed = _v1.a;
                    return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(renamed);
                }
            case 1:
                var name = ann.a;
                var nodedVars = ann.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn(name, $elm$core$List$map_fn($stil4m$elm_syntax$Elm$Syntax$Node$map($mdgriffith$elm_codegen$Internal$Clean$doRename(dict)), nodedVars));
            case 2:
                return ann;
            case 3:
                var nodedVars = ann.a;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled($elm$core$List$map_fn($stil4m$elm_syntax$Elm$Syntax$Node$map($mdgriffith$elm_codegen$Internal$Clean$doRename(dict)), nodedVars));
            case 4:
                var record = ann.a;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record($elm$core$List$map_fn($stil4m$elm_syntax$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond($stil4m$elm_syntax$Elm$Syntax$Node$map($mdgriffith$elm_codegen$Internal$Clean$doRename(dict)))), record));
            case 5:
                var name = ann.a;
                var _v2 = ann.b;
                var range = _v2.a;
                var record = _v2.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn(name, $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn(range, $elm$core$List$map_fn($stil4m$elm_syntax$Elm$Syntax$Node$map($elm$core$Tuple$mapSecond($stil4m$elm_syntax$Elm$Syntax$Node$map($mdgriffith$elm_codegen$Internal$Clean$doRename(dict)))), record)));
            default:
                var nodeOne = ann.a;
                var nodeTwo = ann.b;
                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($stil4m$elm_syntax$Elm$Syntax$Node$map_fn($mdgriffith$elm_codegen$Internal$Clean$doRename(dict), nodeOne), $stil4m$elm_syntax$Elm$Syntax$Node$map_fn($mdgriffith$elm_codegen$Internal$Clean$doRename(dict), nodeTwo));
        }
    }, $mdgriffith$elm_codegen$Internal$Clean$doRename = F2($mdgriffith$elm_codegen$Internal$Clean$doRename_fn);
    var $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn = function (ann, dict) {
        switch (ann.$) {
            case 0:
                var generic = ann.a;
                return $elm$core$Set$insert_fn(generic, dict);
            case 1:
                var name = ann.a;
                var nodedVars = ann.b;
                return $elm$core$List$foldl_fn_unwrapped(function (_v1, d) {
                    var tipe = _v1.b;
                    return $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(tipe, d);
                }, dict, nodedVars);
            case 2:
                return dict;
            case 3:
                var nodedVars = ann.a;
                return $elm$core$List$foldl_fn_unwrapped(function (_v2, d) {
                    var tipe = _v2.b;
                    return $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(tipe, d);
                }, dict, nodedVars);
            case 4:
                var record = ann.a;
                return $elm$core$List$foldl_fn_unwrapped(function (_v3, d) {
                    var _v4 = _v3.b;
                    var _v5 = _v4.b;
                    var field = _v5.b;
                    return $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(field, d);
                }, dict, record);
            case 5:
                var name = ann.a;
                var _v6 = ann.b;
                var range = _v6.a;
                var record = _v6.b;
                return $elm$core$List$foldl_fn_unwrapped(function (_v7, d) {
                    var _v8 = _v7.b;
                    var _v9 = _v8.b;
                    var field = _v9.b;
                    return $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(field, d);
                }, dict, record);
            default:
                var _v10 = ann.a;
                var one = _v10.b;
                var _v11 = ann.b;
                var two = _v11.b;
                return $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(two, $mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(one, dict));
        }
    }, $mdgriffith$elm_codegen$Internal$Clean$prepareRename = F2($mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn);
    var $mdgriffith$elm_codegen$Internal$Clean$findClean_fn = function (i, name, set) {
        findClean: while (true) {
            var newName = (!i) ? name : _Utils_ap(name, $elm$core$String$fromInt(i));
            if ($elm$core$Set$member_fn(newName, set)) {
                var $temp$i = i + 1, $temp$name = name, $temp$set = set;
                i = $temp$i;
                name = $temp$name;
                set = $temp$set;
                continue findClean;
            }
            else {
                return name;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Clean$findClean = F3($mdgriffith$elm_codegen$Internal$Clean$findClean_fn);
    var $elm$core$Set$foldl_fn = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return A2(func, key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl_fn_unwrapped = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return func(key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl = F3($elm$core$Set$foldl_fn);
    var $mdgriffith$elm_codegen$Internal$Clean$sanitized = function (str) {
        var _v0 = $elm$core$String$split_fn("_", str);
        if (!_v0.b) {
            return str;
        }
        else {
            var top = _v0.a;
            var remain = _v0.b;
            return top;
        }
    };
    var $mdgriffith$elm_codegen$Internal$Clean$verify = function (set) {
        return $elm$core$Set$foldl_fn_unwrapped(function (name, gathered) {
            var newName = $mdgriffith$elm_codegen$Internal$Clean$findClean_fn(0, $mdgriffith$elm_codegen$Internal$Clean$sanitized(name), set);
            return $elm$core$Dict$insert_fn(name, newName, gathered);
        }, $elm$core$Dict$empty, set);
    };
    var $mdgriffith$elm_codegen$Internal$Clean$clean = function (ann) {
        var renames = $mdgriffith$elm_codegen$Internal$Clean$verify($mdgriffith$elm_codegen$Internal$Clean$prepareRename_fn(ann, $elm$core$Set$empty));
        return $mdgriffith$elm_codegen$Internal$Clean$doRename_fn(renames, ann);
    };
    var $mdgriffith$elm_codegen$Internal$Format$formatDeclarationName = function (str) {
        if (str === "main") {
            return "main";
        }
        else {
            return $mdgriffith$elm_codegen$Internal$Format$formatValue(str);
        }
    };
    var $elm$core$Result$mapError_fn = function (f, result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    }, $elm$core$Result$mapError = F2($elm$core$Result$mapError_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString = function (inf) {
        switch (inf.$) {
            case 1:
                var str = inf.a;
                return "Todo " + str;
            case 0:
                var one = inf.a;
                var two = inf.b;
                return "There are multiple different types in a list: \n\n" + ("    " + ($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(one))) + ("\n\n    " + $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(two))))));
            case 11:
                var details = inf.a;
                return "Mismatched record update";
            case 2:
                return "Case statement is empty";
            case 3:
                var fn = inf.a;
                var args = inf.b;
                return "The following is being called as a function\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(fn))) + ("\n\nwith these arguments:\n\n    " + ($elm$core$String$join_fn(" -> ", $elm$core$List$map_fn(function (arg) {
                    return $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(arg)));
                }, args)) + "\n\nbut that's wrong, right?")));
            case 5:
                var fieldName = inf.a;
                return "There is a duplicate field in a record: " + fieldName;
            case 6:
                return "Case returns different types.";
            case 7:
                var found = inf.a;
                return "I can't find ." + (found.P + (", this record only has these fields:\n\n    " + $elm$core$String$join_fn("\n    ", found.gW)));
            case 8:
                var attempting = inf.a;
                return "You're trying to access\n\n    ." + (attempting.P + ("\n\nbut this value isn't a record. It's a\n\n    " + $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.al)))));
            case 9:
                var attempting = inf.a;
                return "You're trying to access\n\n    ." + (attempting.P + ("\n\nbut this value isn't a record, it's a\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.al))) + "\n\nIs this value supposed to be an alias for a record? If so, check out Elm.alias!")));
            case 10:
                var details = inf.a;
                return details.gN + " not found, though I was trying to unpack it in a let expression.";
            case 12:
                var type_ = inf.a;
                return $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not appendable.  Only Strings and Lists are appendable";
            case 13:
                var type_ = inf.a;
                return $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + " is not appendable.  Only Strings and Lists are appendable";
            case 14:
                var one = inf.a;
                var two = inf.b;
                return "I found\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(one))) + ("\n\nBut I was expecting:\n\n    " + $stil4m$elm_syntax$Elm$Writer$write($stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation($mdgriffith$elm_codegen$Internal$Compiler$nodify(two)))));
            default:
                return "Different lists of type variables";
        }
    };
    var $mdgriffith$elm_codegen$Elm$renderError = function (err) {
        if (!err.b) {
            return "";
        }
        else {
            return $elm$core$String$join_fn("\n\n", $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString, err));
        }
    };
    var $elm$core$Set$fromList = function (list) {
        return $elm$core$List$foldl_fn($elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $mdgriffith$elm_codegen$Internal$Compiler$simplify = function (fullStr) {
        return $elm$core$List$foldl_fn_unwrapped(function (piece, str) {
            var isDigit = _String_all_fn($elm$core$Char$isDigit, piece);
            if (isDigit) {
                return str;
            }
            else {
                if (str === "") {
                    return piece;
                }
                else {
                    return str + ("_" + piece);
                }
            }
        }, "", $elm$core$String$split_fn("_", fullStr));
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn = function (existing, renames, type_) {
        switch (type_.$) {
            case 0:
                var varName = type_.a;
                var _v1 = $elm$core$Dict$get_fn(varName, renames);
                if (_v1.$ === 1) {
                    var simplified = $mdgriffith$elm_codegen$Internal$Compiler$simplify(varName);
                    return ($elm$core$Set$member_fn(simplified, existing) && (!_Utils_eq(varName, simplified))) ? _Utils_Tuple2(renames, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified)) : _Utils_Tuple2($elm$core$Dict$insert_fn(varName, simplified, renames), $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified));
                }
                else {
                    var rename = _v1.a;
                    return _Utils_Tuple2(renames, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(rename));
                }
            case 1:
                var name = type_.a;
                var vars = type_.b;
                var _v2 = $elm$core$List$foldl_fn_unwrapped(function (typevar, _v3) {
                    var varUsed = _v3.a;
                    var varList = _v3.b;
                    var _v4 = $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn(existing, varUsed, $mdgriffith$elm_codegen$Internal$Compiler$denode(typevar));
                    var oneUsed = _v4.a;
                    var oneType = _v4.b;
                    return _Utils_Tuple2(oneUsed, _List_Cons($mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType), varList));
                }, _Utils_Tuple2(renames, _List_Nil), vars);
                var newUsed = _v2.a;
                var newVars = _v2.b;
                return _Utils_Tuple2(newUsed, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn(name, $elm$core$List$reverse(newVars)));
            case 2:
                return _Utils_Tuple2(renames, type_);
            case 3:
                var valsA = type_.a;
                return _Utils_Tuple2(renames, type_);
            case 4:
                var fieldsA = type_.a;
                return _Utils_Tuple2(renames, type_);
            case 5:
                var _v5 = type_.a;
                var reVarName = _v5.b;
                var _v6 = type_.b;
                var fieldsARange = _v6.a;
                var fieldsA = _v6.b;
                return _Utils_Tuple2(renames, type_);
            default:
                var one = type_.a;
                var two = type_.b;
                var _v7 = $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn(existing, renames, $mdgriffith$elm_codegen$Internal$Compiler$denode(one));
                var oneUsed = _v7.a;
                var oneType = _v7.b;
                var _v8 = $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn(existing, oneUsed, $mdgriffith$elm_codegen$Internal$Compiler$denode(two));
                var twoUsed = _v8.a;
                var twoType = _v8.b;
                return _Utils_Tuple2(twoUsed, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType), $mdgriffith$elm_codegen$Internal$Compiler$nodify(twoType)));
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper = F3($mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables = function (type_) {
        var existing = $elm$core$Set$fromList($mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(type_));
        return $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper_fn(existing, $elm$core$Dict$empty, type_).b;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$resolve_fn = function (index, cache, annotation) {
        if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
            var restrictions = $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions_fn(annotation, cache);
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables_fn($elm$core$Set$empty, cache, annotation);
            if (!_v0.$) {
                var newAnnotation = _v0.a;
                return $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions_fn(restrictions, $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables(newAnnotation));
            }
            else {
                var err = _v0.a;
                return $elm$core$Result$Err(err);
            }
        }
        else {
            return $elm$core$Result$Err("Type inference skipped.");
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$resolve = F3($mdgriffith$elm_codegen$Internal$Compiler$resolve_fn);
    var $mdgriffith$elm_codegen$Elm$declaration_fn = function (nameStr, _v0) {
        var toBody = _v0;
        var name = $mdgriffith$elm_codegen$Internal$Format$formatDeclarationName(nameStr);
        return $mdgriffith$elm_codegen$Internal$Compiler$Declaration({
            a5: $elm$core$Maybe$Nothing,
            aj: $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            d: _List_Nil,
            r: name,
            ap: function (index) {
                var body = toBody(index);
                var resolvedType = $elm$core$Result$andThen_fn(function (sig) {
                    return $mdgriffith$elm_codegen$Internal$Compiler$resolve_fn(index, sig.f, sig.aq);
                }, $elm$core$Result$mapError_fn($mdgriffith$elm_codegen$Elm$renderError, body.p));
                var maybeWarning = function () {
                    if (!resolvedType.$) {
                        var sig = resolvedType.a;
                        var _v5 = body.p;
                        if (!_v5.$) {
                            var inference = _v5.a;
                            return $elm$core$Maybe$Nothing;
                        }
                        else {
                            if (!_v5.a.b) {
                                return $elm$core$Maybe$Nothing;
                            }
                            else {
                                var err = _v5.a;
                                return $elm$core$Maybe$Just({
                                    gL: name,
                                    h4: $mdgriffith$elm_codegen$Elm$renderError(err)
                                });
                            }
                        }
                    }
                    else {
                        if (resolvedType.a === "") {
                            return $elm$core$Maybe$Nothing;
                        }
                        else {
                            var err = resolvedType.a;
                            return $elm$core$Maybe$Just({ gL: name, h4: err });
                        }
                    }
                }();
                return {
                    ah: body.d,
                    gL: $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration({
                        gL: function () {
                            var _v1 = body.c;
                            if (_v1.$ === 17) {
                                var lam = _v1.a;
                                return $mdgriffith$elm_codegen$Internal$Compiler$nodify({
                                    a3: lam.T,
                                    c: lam.c,
                                    r: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                                });
                            }
                            else {
                                return $mdgriffith$elm_codegen$Internal$Compiler$nodify({
                                    a3: _List_Nil,
                                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(body.c),
                                    r: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                                });
                            }
                        }(),
                        a6: $elm$core$Maybe$Nothing,
                        hK: function () {
                            var _v2 = body.p;
                            if (!_v2.$) {
                                var sig = _v2.a;
                                if (!resolvedType.$) {
                                    if (!resolvedType.a.$) {
                                        var generic = resolvedType.a.a;
                                        return $elm$core$Maybe$Nothing;
                                    }
                                    else {
                                        var finalType = resolvedType.a;
                                        return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify({
                                            r: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name),
                                            a$: $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Clean$clean(finalType))
                                        }));
                                    }
                                }
                                else {
                                    var errMsg = resolvedType.a;
                                    return $elm$core$Maybe$Nothing;
                                }
                            }
                            else {
                                return $elm$core$Maybe$Nothing;
                            }
                        }()
                    }),
                    h4: maybeWarning
                };
            }
        });
    }, $mdgriffith$elm_codegen$Elm$declaration = F2($mdgriffith$elm_codegen$Elm$declaration_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$Exposed = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$expose = function (decl) {
        switch (decl.$) {
            case 1:
                return decl;
            case 2:
                return decl;
            default:
                var details = decl.a;
                return $mdgriffith$elm_codegen$Internal$Compiler$Declaration(_Utils_update(details, {
                    aj: $mdgriffith$elm_codegen$Internal$Compiler$Exposed({ aN: false, av: $elm$core$Maybe$Nothing })
                }));
        }
    };
    var $mdgriffith$elm_codegen$Elm$expose = $mdgriffith$elm_codegen$Internal$Compiler$expose;
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
        return { $: 17, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
        return { $: 11, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Index$getName_fn = function (desiredName, index) {
        var top = index.a;
        var tail = index.b;
        var scope = index.c;
        var check = index.d;
        var formattedName = $mdgriffith$elm_codegen$Internal$Format$formatValue(desiredName);
        if (!$elm$core$Set$member_fn(formattedName, scope)) {
            return _Utils_Tuple2(formattedName, $mdgriffith$elm_codegen$Internal$Index$Index_fn(top, tail, $elm$core$Set$insert_fn(formattedName, scope), check));
        }
        else {
            var protectedName = _Utils_ap(formattedName, $elm$core$String$fromInt(top));
            if (!$elm$core$Set$member_fn(protectedName, scope)) {
                return _Utils_Tuple2(protectedName, $mdgriffith$elm_codegen$Internal$Index$Index_fn(top + 1, tail, $elm$core$Set$insert_fn(protectedName, scope), check));
            }
            else {
                var protectedNameLevel2 = _Utils_ap(formattedName, $mdgriffith$elm_codegen$Internal$Index$indexToString(index));
                return _Utils_Tuple2(protectedNameLevel2, $mdgriffith$elm_codegen$Internal$Index$Index_fn(top + 1, tail, $elm$core$Set$insert_fn(protectedNameLevel2, scope), check));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Index$getName = F2($mdgriffith$elm_codegen$Internal$Index$getName_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn = function (index, desiredName, maybeAnnotation) {
        var _v0 = $mdgriffith$elm_codegen$Internal$Index$getName_fn(desiredName, index);
        var name = _v0.a;
        var newIndex = _v0.b;
        var _v1 = function () {
            if (maybeAnnotation.$ === 1) {
                return {
                    a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                    p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType($mdgriffith$elm_codegen$Internal$Index$protectTypeName_fn(desiredName, index)),
                    d: _List_Nil
                };
            }
            else {
                var ann = maybeAnnotation.a;
                return ann;
            }
        }();
        var imports = _v1.d;
        var annotation = _v1.p;
        var aliases = _v1.a1;
        return {
            e: newIndex,
            r: name,
            aq: annotation,
            u: function (ignoredIndex_) {
                return {
                    p: $elm$core$Result$Ok({ a1: aliases, f: $elm$core$Dict$empty, aq: annotation }),
                    c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, name),
                    d: imports
                };
            }
        };
    }, $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType = F3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn);
    var $mdgriffith$elm_codegen$Elm$fn_fn = function (_v0, toExpression) {
        var oneBaseName = _v0.a;
        var maybeAnnotation = _v0.b;
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var one = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(index, oneBaseName, maybeAnnotation);
            var _v1 = toExpression(one.u);
            var toExpr = _v1;
            var _return = toExpr(one.e);
            return {
                p: function () {
                    var _v2 = _return.p;
                    if (_v2.$ === 1) {
                        var err = _v2.a;
                        return _return.p;
                    }
                    else {
                        var returnAnnotation = _v2.a;
                        return $elm$core$Result$Ok({
                            a1: returnAnnotation.a1,
                            f: returnAnnotation.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(one.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.aq))
                        });
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
                    T: _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.r))
                    ]),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                }),
                d: _return.d
            };
        });
    }, $mdgriffith$elm_codegen$Elm$fn = F2($mdgriffith$elm_codegen$Elm$fn_fn);
    var $mdgriffith$elm_codegen$Elm$fn3_fn = function (_v0, _v1, _v2, toExpression) {
        var oneBaseName = _v0.a;
        var maybeOneType = _v0.b;
        var twoBaseName = _v1.a;
        var maybeTwoType = _v1.b;
        var threeBaseName = _v2.a;
        var maybeThreeType = _v2.b;
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var one = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(index, oneBaseName, maybeOneType);
            var two = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(one.e, twoBaseName, maybeTwoType);
            var three = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(two.e, threeBaseName, maybeThreeType);
            var _v3 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(three.e, A3(toExpression, one.u, two.u, three.u));
            var newIndex = _v3.a;
            var _return = _v3.b;
            return {
                p: function () {
                    var _v4 = _return.p;
                    if (_v4.$ === 1) {
                        var err = _v4.a;
                        return _return.p;
                    }
                    else {
                        var returnAnnotation = _v4.a;
                        return $elm$core$Result$Ok({
                            a1: returnAnnotation.a1,
                            f: returnAnnotation.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(one.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(two.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(three.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.aq))))))
                        });
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
                    T: _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(three.r))
                    ]),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                }),
                d: _return.d
            };
        });
    }, $mdgriffith$elm_codegen$Elm$fn3_fn_unwrapped = function (_v0, _v1, _v2, toExpression) {
        var oneBaseName = _v0.a;
        var maybeOneType = _v0.b;
        var twoBaseName = _v1.a;
        var maybeTwoType = _v1.b;
        var threeBaseName = _v2.a;
        var maybeThreeType = _v2.b;
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var one = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(index, oneBaseName, maybeOneType);
            var two = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(one.e, twoBaseName, maybeTwoType);
            var three = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(two.e, threeBaseName, maybeThreeType);
            var _v3 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(three.e, toExpression(one.u, two.u, three.u));
            var newIndex = _v3.a;
            var _return = _v3.b;
            return {
                p: function () {
                    var _v4 = _return.p;
                    if (_v4.$ === 1) {
                        var err = _v4.a;
                        return _return.p;
                    }
                    else {
                        var returnAnnotation = _v4.a;
                        return $elm$core$Result$Ok({
                            a1: returnAnnotation.a1,
                            f: returnAnnotation.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(one.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(two.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(three.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.aq))))))
                        });
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
                    T: _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(three.r))
                    ]),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                }),
                d: _return.d
            };
        });
    }, $mdgriffith$elm_codegen$Elm$fn3 = F4($mdgriffith$elm_codegen$Elm$fn3_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess_fn = function (a, b) {
        return { $: 20, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias = function (a) {
        return { $: 9, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType = function (a) {
        return { $: 8, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList_fn = function (selector, fields) {
        getFieldFromList: while (true) {
            if (!fields.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var nodifiedTop = fields.a;
                var remain = fields.b;
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodifiedTop);
                var fieldname = _v1.a;
                var contents = _v1.b;
                if (_Utils_eq($mdgriffith$elm_codegen$Internal$Compiler$denode(fieldname), selector)) {
                    return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$denode(contents));
                }
                else {
                    var $temp$selector = selector, $temp$fields = remain;
                    selector = $temp$selector;
                    fields = $temp$fields;
                    continue getFieldFromList;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList = F2($mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField_fn = function (index, _v0) {
        var nameOfRecord = _v0.ef;
        var fieldName = _v0.cH;
        var fieldType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType($mdgriffith$elm_codegen$Internal$Format$formatValue(_Utils_ap(fieldName, $mdgriffith$elm_codegen$Internal$Index$indexToString(index))));
        return $elm$core$Result$Ok({
            a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
            f: $mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(nameOfRecord, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(nameOfRecord), $mdgriffith$elm_codegen$Internal$Compiler$nodify(_List_fromArray([
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldType)))
            ]))), $elm$core$Dict$empty),
            aq: fieldType
        });
    }, $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField = F2($mdgriffith$elm_codegen$Internal$Compiler$inferRecordField_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$resolveField_fn = function (index, type_, aliases, inferences, fieldName) {
        resolveField: while (true) {
            if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
                switch (type_.$) {
                    case 4:
                        var fields = type_.a;
                        var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList_fn(fieldName, fields);
                        if (!_v1.$) {
                            var ann = _v1.a;
                            return $elm$core$Result$Ok({ a1: aliases, f: inferences, aq: ann });
                        }
                        else {
                            return $elm$core$Result$Err(_List_fromArray([
                                $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField({
                                    gW: $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$Compiler$denode, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)), fields),
                                    P: fieldName
                                })
                            ]));
                        }
                    case 5:
                        var name = type_.a;
                        var fields = type_.b;
                        var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList_fn(fieldName, $mdgriffith$elm_codegen$Internal$Compiler$denode(fields));
                        if (!_v2.$) {
                            var ann = _v2.a;
                            return $elm$core$Result$Ok({ a1: aliases, f: inferences, aq: ann });
                        }
                        else {
                            return $elm$core$Result$Err(_List_fromArray([
                                $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField({
                                    gW: $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$Compiler$denode, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)), $mdgriffith$elm_codegen$Internal$Compiler$denode(fields)),
                                    P: fieldName
                                })
                            ]));
                        }
                    case 0:
                        var nameOfRecord = type_.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField_fn(index, { cH: fieldName, ef: nameOfRecord });
                    case 1:
                        var nodedModAndName = type_.a;
                        var vars = type_.b;
                        var _v3 = $mdgriffith$elm_codegen$Internal$Compiler$getAlias_fn(nodedModAndName, aliases);
                        if (_v3.$ === 1) {
                            return $elm$core$Result$Err(_List_fromArray([
                                $mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias({ P: fieldName, al: type_ })
                            ]));
                        }
                        else {
                            var aliased = _v3.a;
                            var $temp$index = index, $temp$type_ = aliased.aE, $temp$aliases = aliases, $temp$inferences = inferences, $temp$fieldName = fieldName;
                            index = $temp$index;
                            type_ = $temp$type_;
                            aliases = $temp$aliases;
                            inferences = $temp$inferences;
                            fieldName = $temp$fieldName;
                            continue resolveField;
                        }
                    case 3:
                        return $elm$core$Result$Err(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType({ P: fieldName, al: type_ })
                        ]));
                    case 2:
                        return $elm$core$Result$Err(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType({ P: fieldName, al: type_ })
                        ]));
                    default:
                        return $elm$core$Result$Err(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType({ P: fieldName, al: type_ })
                        ]));
                }
            }
            else {
                return $elm$core$Result$Err(_List_Nil);
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$resolveField = F5($mdgriffith$elm_codegen$Internal$Compiler$resolveField_fn);
    var $mdgriffith$elm_codegen$Elm$get_fn = function (unformattedFieldName, recordExpression) {
        return function (index) {
            var fieldName = $mdgriffith$elm_codegen$Internal$Format$formatValue(unformattedFieldName);
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, recordExpression);
            var expr = _v0.b;
            return {
                p: function () {
                    var _v1 = expr.p;
                    if (!_v1.$) {
                        var recordAnn = _v1.a;
                        return $mdgriffith$elm_codegen$Internal$Compiler$resolveField_fn(index, recordAnn.aq, recordAnn.a1, recordAnn.f, fieldName);
                    }
                    else {
                        var otherwise = _v1;
                        return otherwise;
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.c), $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName)),
                d: expr.d
            };
        };
    }, $mdgriffith$elm_codegen$Elm$get = F2($mdgriffith$elm_codegen$Elm$get_fn);
    var $author$project$Gen$App$State$init = $mdgriffith$elm_codegen$Elm$value({
        p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("state")
        ]))),
        q: _List_fromArray(["App", "State"]),
        r: "init"
    });
    var $mdgriffith$elm_codegen$Elm$Let$Let = $elm$core$Basics$identity;
    var $mdgriffith$elm_codegen$Elm$Let$letIn = function (_return) {
        return function (index) {
            return { e: index, J: _List_Nil, M: _return };
        };
    };
    var $mdgriffith$elm_codegen$Elm$Case$Branch = $elm$core$Basics$identity;
    var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function (a) {
        return { $: 16, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$EmptyCaseStatement = { $: 2 };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn = function (a, b) {
        return { $: 12, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2($stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn);
    var $mdgriffith$elm_codegen$Elm$Case$combineInferences_fn = function (infs, infResult) {
        if (!infResult.$) {
            var inferred = infResult.a;
            return $elm$core$Result$Ok(_Utils_update(inferred, {
                f: $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(infs, inferred.f)
            }));
        }
        else {
            var err = infResult.a;
            return $elm$core$Result$Err(err);
        }
    }, $mdgriffith$elm_codegen$Elm$Case$combineInferences = F2($mdgriffith$elm_codegen$Elm$Case$combineInferences_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$unifyOn_fn = function (_v0, res) {
        var annDetails = _v0;
        if (res.$ === 1) {
            return res;
        }
        else {
            var inf = res.a;
            var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$unifiable_fn(inf.a1, inf.f, annDetails.p, inf.aq);
            var newInferences = _v2.a;
            var finalResult = _v2.b;
            if (!finalResult.$) {
                var finalType = finalResult.a;
                return $elm$core$Result$Ok({
                    a1: $elm$core$Dict$union_fn(annDetails.a1, inf.a1),
                    f: newInferences,
                    aq: finalType
                });
            }
            else {
                var err = finalResult.a;
                return $elm$core$Result$Err(_List_fromArray([err]));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$unifyOn = F2($mdgriffith$elm_codegen$Internal$Compiler$unifyOn_fn);
    var $mdgriffith$elm_codegen$Elm$Case$captureCaseHelper_fn = function (mainCaseExpressionModule, _v0, accum) {
        var toBranch = _v0;
        var _v1 = toBranch($mdgriffith$elm_codegen$Internal$Index$dive(accum.e));
        var branchIndex = _v1.a;
        var originalPattern = _v1.b;
        var caseExpression = _v1.c;
        var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(branchIndex, caseExpression);
        var newIndex = _v2.a;
        var exp = _v2.b;
        var pattern = function () {
            if (!mainCaseExpressionModule.b) {
                return originalPattern;
            }
            else {
                if (originalPattern.$ === 12) {
                    var named = originalPattern.a;
                    var vars = originalPattern.b;
                    return $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn({ ec: mainCaseExpressionModule, r: named.r }, vars);
                }
                else {
                    return originalPattern;
                }
            }
        }();
        return {
            p: function () {
                var _v3 = accum.p;
                if (_v3.$ === 1) {
                    return $elm$core$Maybe$Just(exp.p);
                }
                else {
                    if (!_v3.a.$) {
                        var gatheredAnnotation = _v3.a.a;
                        return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$unifyOn_fn({ a1: gatheredAnnotation.a1, p: gatheredAnnotation.aq, d: _List_Nil }, $mdgriffith$elm_codegen$Elm$Case$combineInferences_fn(gatheredAnnotation.f, exp.p)));
                    }
                    else {
                        var err = _v3.a;
                        return $elm$core$Maybe$Just(err);
                    }
                }
            }(),
            y: _List_Cons(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(pattern), $mdgriffith$elm_codegen$Internal$Compiler$nodify(exp.c)), accum.y),
            d: _Utils_ap(accum.d, exp.d),
            e: accum.e
        };
    }, $mdgriffith$elm_codegen$Elm$Case$captureCaseHelper = F3($mdgriffith$elm_codegen$Elm$Case$captureCaseHelper_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$importInferences_fn = function (one, two) {
        return {
            a1: $elm$core$Dict$union_fn(one.a1, two.a1),
            f: $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(one.f, two.f),
            aq: two.aq
        };
    }, $mdgriffith$elm_codegen$Internal$Compiler$importInferences = F2($mdgriffith$elm_codegen$Internal$Compiler$importInferences_fn);
    var $mdgriffith$elm_codegen$Elm$Case$captureCase_fn = function (mainExpression, mainExpressionTypeModule, index, branches) {
        var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, mainExpression);
        var branchIndex = _v0.a;
        var mainExpressionDetails = _v0.b;
        var caseExp = $elm$core$List$foldl_fn($mdgriffith$elm_codegen$Elm$Case$captureCaseHelper(mainExpressionTypeModule), { p: $elm$core$Maybe$Nothing, y: _List_Nil, d: _List_Nil, e: branchIndex }, branches);
        return _Utils_Tuple2(mainExpressionDetails, _Utils_update(caseExp, {
            p: function () {
                var _v1 = caseExp.p;
                if ((!_v1.$) && (!_v1.a.$)) {
                    var inference = _v1.a.a;
                    var _v2 = mainExpressionDetails.p;
                    if (_v2.$ === 1) {
                        var err = _v2.a;
                        return $elm$core$Maybe$Just($elm$core$Result$Err(err));
                    }
                    else {
                        var mainAnn = _v2.a;
                        return $elm$core$Maybe$Just($elm$core$Result$Ok($mdgriffith$elm_codegen$Internal$Compiler$importInferences_fn(mainAnn, inference)));
                    }
                }
                else {
                    return caseExp.p;
                }
            }()
        }));
    }, $mdgriffith$elm_codegen$Elm$Case$captureCase = F4($mdgriffith$elm_codegen$Elm$Case$captureCase_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$var_fn = function (index, name) {
        var protectedName = $mdgriffith$elm_codegen$Internal$Format$sanitize(_Utils_ap(name, $mdgriffith$elm_codegen$Internal$Index$indexToString(index)));
        return _Utils_Tuple3($mdgriffith$elm_codegen$Internal$Index$next(index), protectedName, function (existingIndex_) {
            return {
                p: $elm$core$Result$Ok({
                    a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                    f: $elm$core$Dict$empty,
                    aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType($mdgriffith$elm_codegen$Internal$Format$formatValue(_Utils_ap(name, $mdgriffith$elm_codegen$Internal$Index$indexToString(existingIndex_))))
                }),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, protectedName),
                d: _List_Nil
            };
        });
    }, $mdgriffith$elm_codegen$Internal$Compiler$var = F2($mdgriffith$elm_codegen$Internal$Compiler$var_fn);
    var $mdgriffith$elm_codegen$Elm$Case$maybe_fn = function (mainExpression, branches) {
        return function (index) {
            var _v0 = $mdgriffith$elm_codegen$Elm$Case$captureCase_fn(mainExpression, _List_Nil, index, _List_fromArray([
                function (branchIndex) {
                    return _Utils_Tuple3(branchIndex, $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn({ ec: _List_Nil, r: "Nothing" }, _List_Nil), branches.aV);
                },
                function (branchIndex) {
                    var _v1 = branches.aP;
                    var justVarName = _v1.a;
                    var toReturn = _v1.b;
                    var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$var_fn(branchIndex, justVarName);
                    var justIndex = _v2.a;
                    var justName = _v2.b;
                    var justExp = _v2.c;
                    return _Utils_Tuple3(justIndex, $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn({ ec: _List_Nil, r: "Just" }, _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(justName))
                    ])), toReturn(justExp));
                }
            ]));
            var expr = _v0.a;
            var gathered = _v0.b;
            return {
                p: function () {
                    var _v3 = gathered.p;
                    if (_v3.$ === 1) {
                        return $elm$core$Result$Err(_List_fromArray([$mdgriffith$elm_codegen$Internal$Compiler$EmptyCaseStatement]));
                    }
                    else {
                        var ann = _v3.a;
                        return ann;
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression({
                    y: $elm$core$List$reverse(gathered.y),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.c)
                }),
                d: _Utils_ap(expr.d, gathered.d)
            };
        };
    }, $mdgriffith$elm_codegen$Elm$Case$maybe = F2($mdgriffith$elm_codegen$Elm$Case$maybe_fn);
    var $mdgriffith$elm_codegen$Elm$Annotation$named_fn = function (mod, name) {
        return {
            a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
            p: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(mod, $mdgriffith$elm_codegen$Internal$Format$formatType(name))), _List_Nil),
            d: function () {
                if (!mod.b) {
                    return _List_Nil;
                }
                else {
                    return _List_fromArray([mod]);
                }
            }()
        };
    }, $mdgriffith$elm_codegen$Elm$Annotation$named = F2($mdgriffith$elm_codegen$Elm$Annotation$named_fn);
    var $author$project$Gen$Platform$Cmd$none = $mdgriffith$elm_codegen$Elm$value({
        p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
        ]))),
        q: _List_fromArray(["Cmd"]),
        r: "none"
    });
    var $author$project$Press$Generate$Engine$parseUrl = function (url) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Nothing,
            q: _List_fromArray(["Route"]),
            r: "parse"
        }), _List_fromArray([url]));
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$DuplicateFieldInRecord = function (a) {
        return { $: 5, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function (a) {
        return { $: 18, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$record = function (fields) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var unified = $elm$core$List$foldl_fn_unwrapped(function (_v4, found) {
                var unformattedFieldName = _v4.a;
                var fieldExpression = _v4.b;
                var fieldName = $mdgriffith$elm_codegen$Internal$Format$formatValue(unformattedFieldName);
                var _v5 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(found.e, fieldExpression);
                var newIndex = _v5.a;
                var exp = _v5.b;
                return {
                    Y: function () {
                        if ($elm$core$Set$member_fn(fieldName, found.aW)) {
                            return _List_Cons($mdgriffith$elm_codegen$Internal$Compiler$DuplicateFieldInRecord(fieldName), found.Y);
                        }
                        else {
                            var _v6 = exp.p;
                            if (_v6.$ === 1) {
                                if (!_v6.a.b) {
                                    return found.Y;
                                }
                                else {
                                    var errs = _v6.a;
                                    return _Utils_ap(errs, found.Y);
                                }
                            }
                            else {
                                var ann = _v6.a;
                                return found.Y;
                            }
                        }
                    }(),
                    Z: function () {
                        var _v7 = exp.p;
                        if (_v7.$ === 1) {
                            var err = _v7.a;
                            return found.Z;
                        }
                        else {
                            var ann = _v7.a;
                            return _List_Cons(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Format$formatValue(fieldName), ann), found.Z);
                        }
                    }(),
                    aO: _List_Cons(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(exp.c)), found.aO),
                    d: _Utils_ap(exp.d, found.d),
                    e: newIndex,
                    aW: $elm$core$Set$insert_fn(fieldName, found.aW)
                };
            }, { Y: _List_Nil, Z: _List_Nil, aO: _List_Nil, d: _List_Nil, e: index, aW: $elm$core$Set$empty }, fields);
            return {
                p: function () {
                    var _v0 = unified.Y;
                    if (!_v0.b) {
                        return $elm$core$Result$Ok({
                            a1: $elm$core$List$foldl_fn_unwrapped(function (_v1, gathered) {
                                var name = _v1.a;
                                var ann = _v1.b;
                                return $elm$core$Dict$union_fn(ann.a1, gathered);
                            }, $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, unified.Z),
                            f: $elm$core$List$foldl_fn_unwrapped(function (_v2, gathered) {
                                var name = _v2.a;
                                var ann = _v2.b;
                                return $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(ann.f, gathered);
                            }, $elm$core$Dict$empty, unified.Z),
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$map_fn(function (_v3) {
                                var name = _v3.a;
                                var ann = _v3.b;
                                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(name), $mdgriffith$elm_codegen$Internal$Compiler$nodify(ann.aq));
                            }, $elm$core$List$reverse(unified.Z))))
                        });
                    }
                    else {
                        var errs = _v0;
                        return $elm$core$Result$Err(errs);
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, $elm$core$List$reverse(unified.aO))),
                d: unified.d
            };
        });
    };
    var $author$project$Press$Model$toCmd_fn = function (config, frameModel, effect) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("toCmd", config), _List_fromArray([frameModel, effect]));
    }, $author$project$Press$Model$toCmd = F3($author$project$Press$Model$toCmd_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function (a) {
        return { $: 15, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$Let$toExpression = function (_v0) {
        var toScope = _v0;
        return function (index) {
            var scope = toScope(index);
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(scope.e, scope.M);
            var returnIndex = _v1.a;
            var _return = _v1.b;
            return {
                p: _return.p,
                c: function () {
                    var _v2 = _return.c;
                    if (_v2.$ === 15) {
                        var innerReturn = _v2.a;
                        return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression({
                            as: _Utils_ap($elm$core$List$reverse(scope.J), innerReturn.as),
                            c: innerReturn.c
                        });
                    }
                    else {
                        return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression({
                            as: $elm$core$List$reverse(scope.J),
                            c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                        });
                    }
                }(),
                d: _return.d
            };
        };
    };
    var $author$project$Press$Model$toShared_fn = function (config, frameModel) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("toShared", config), _List_fromArray([frameModel]));
    }, $author$project$Press$Model$toShared = F2($author$project$Press$Model$toShared_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function (a) {
        return { $: 13, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$tuple_fn = function (oneExp, twoExp) {
        return function (index) {
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, oneExp);
            var oneIndex = _v0.a;
            var one = _v0.b;
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(oneIndex, twoExp);
            var twoIndex = _v1.a;
            var two = _v1.b;
            return {
                p: $elm$core$Result$map2_fn_unwrapped(function (oneA, twoA) {
                    return {
                        a1: $elm$core$Dict$union_fn(twoA.a1, oneA.a1),
                        f: $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences_fn(twoA.f, oneA.f),
                        aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(_List_fromArray([
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(oneA.aq),
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(twoA.aq)
                        ]))
                    };
                }, one.p, two.p),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(_List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(one.c),
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(two.c)
                ])),
                d: _Utils_ap(one.d, two.d)
            };
        };
    }, $mdgriffith$elm_codegen$Elm$tuple = F2($mdgriffith$elm_codegen$Elm$tuple_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function (a) {
        return { $: 7, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$Let$with_fn = function (_v0, _v1) {
        var toScopeA = _v0;
        var toScopeAB = _v1;
        return function (index) {
            var resultA = toScopeA(index);
            var resultB = toScopeAB(resultA.e);
            return {
                e: resultB.e,
                J: _Utils_ap(resultA.J, resultB.J),
                M: resultB.M(resultA.M)
            };
        };
    }, $mdgriffith$elm_codegen$Elm$Let$with = F2($mdgriffith$elm_codegen$Elm$Let$with_fn);
    var $mdgriffith$elm_codegen$Elm$Let$tuple_fn = function (desiredNameOne, desiredNameTwo, valueExpr, sourceLet) {
        return $mdgriffith$elm_codegen$Elm$Let$with_fn(function (index) {
            var _v0 = $mdgriffith$elm_codegen$Internal$Index$getName_fn(desiredNameOne, index);
            var oneName = _v0.a;
            var oneIndex = _v0.b;
            var _v1 = $mdgriffith$elm_codegen$Internal$Index$getName_fn(desiredNameTwo, oneIndex);
            var twoName = _v1.a;
            var twoIndex = _v1.b;
            var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(twoIndex, valueExpr);
            var newIndex = _v2.a;
            var sourceDetails = _v2.b;
            return {
                e: newIndex,
                J: _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(oneName)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(twoName))
                    ]))), $mdgriffith$elm_codegen$Internal$Compiler$nodify(sourceDetails.c)))
                ]),
                M: _Utils_Tuple2(function (_v3) {
                    return {
                        p: function () {
                            var _v4 = sourceDetails.p;
                            if (_v4.$ === 1) {
                                var e = _v4.a;
                                return $elm$core$Result$Err(e);
                            }
                            else {
                                var inference = _v4.a;
                                var _v5 = inference.aq;
                                if ((((_v5.$ === 3) && _v5.a.b) && _v5.a.b.b) && (!_v5.a.b.b.b)) {
                                    var _v6 = _v5.a;
                                    var _v7 = _v6.a;
                                    var oneType = _v7.b;
                                    var _v8 = _v6.b;
                                    var _v9 = _v8.a;
                                    var twoType = _v9.b;
                                    return $elm$core$Result$Ok({ a1: inference.a1, f: $elm$core$Dict$empty, aq: oneType });
                                }
                                else {
                                    return $elm$core$Result$Err(_List_Nil);
                                }
                            }
                        }(),
                        c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, oneName),
                        d: sourceDetails.d
                    };
                }, function (_v10) {
                    return {
                        p: function () {
                            var _v11 = sourceDetails.p;
                            if (_v11.$ === 1) {
                                var e = _v11.a;
                                return $elm$core$Result$Err(e);
                            }
                            else {
                                var inference = _v11.a;
                                var _v12 = inference.aq;
                                if ((((_v12.$ === 3) && _v12.a.b) && _v12.a.b.b) && (!_v12.a.b.b.b)) {
                                    var _v13 = _v12.a;
                                    var _v14 = _v13.a;
                                    var oneType = _v14.b;
                                    var _v15 = _v13.b;
                                    var _v16 = _v15.a;
                                    var twoType = _v16.b;
                                    return $elm$core$Result$Ok({ a1: inference.a1, f: $elm$core$Dict$empty, aq: twoType });
                                }
                                else {
                                    return $elm$core$Result$Err(_List_Nil);
                                }
                            }
                        }(),
                        c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, $mdgriffith$elm_codegen$Internal$Format$sanitize(twoName)),
                        d: _List_Nil
                    };
                })
            };
        }, sourceLet);
    }, $mdgriffith$elm_codegen$Elm$Let$tuple = F4($mdgriffith$elm_codegen$Elm$Let$tuple_fn);
    var $author$project$Gen$App$Effect$annotation_ = {
        gR: function (effectArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Effect"]), "Effect", _List_fromArray([effectArg0]));
        }
    };
    var $author$project$Gen$App$State$annotation_ = {
        gB: function (cacheArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "State"]), "Cache", _List_fromArray([cacheArg0]));
        }
    };
    var $author$project$Gen$App$Sub$annotation_ = {
        hP: function (subArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Sub"]), "Sub", _List_fromArray([subArg0]));
        }
    };
    var $author$project$Gen$Platform$Cmd$annotation_ = {
        gE: function (cmdArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Cmd"]), "Cmd", _List_fromArray([cmdArg0]));
        }
    };
    var $author$project$Gen$Platform$Sub$annotation_ = {
        hP: function (subArg0) {
            return $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Sub"]), "Sub", _List_fromArray([subArg0]));
        }
    };
    var $author$project$Press$Model$appMsg = $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Msg", _List_fromArray([
        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
    ]));
    var $author$project$Press$Model$sharedType = $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_fromArray(["App", "Shared"]), "Shared");
    var $author$project$Press$Model$types = {
        gB: $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Cache"),
        gR: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Effect", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
        ])),
        au: $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
            _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$author$project$Gen$Browser$Navigation$annotation_.g9, $author$project$Gen$Json$Encode$annotation_.h1]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $author$project$Gen$App$Effect$annotation_.gR($mdgriffith$elm_codegen$Elm$Annotation$var("msg"))))),
            _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $author$project$Gen$App$Effect$annotation_.gR($mdgriffith$elm_codegen$Elm$Annotation$var("msg"))))),
            _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $author$project$Gen$App$Sub$annotation_.hP($mdgriffith$elm_codegen$Elm$Annotation$var("msg")))),
            _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ]), $author$project$Press$Model$appMsg),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "View", _List_fromArray([$author$project$Press$Model$appMsg]))
            ]), $author$project$Gen$Browser$annotation_.aM($author$project$Press$Model$appMsg))),
            _Utils_Tuple2("toCmd", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                $author$project$Gen$App$Effect$annotation_.gR($author$project$Press$Model$appMsg)
            ]), $author$project$Gen$Platform$Cmd$annotation_.gE($author$project$Press$Model$appMsg))),
            _Utils_Tuple2("toSub", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                $author$project$Gen$App$Sub$annotation_.hP($author$project$Press$Model$appMsg)
            ]), $author$project$Gen$Platform$Sub$annotation_.hP($author$project$Press$Model$appMsg))),
            _Utils_Tuple2("toShared", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $author$project$Press$Model$sharedType))
        ])),
        d9: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Model", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
        ])),
        he: $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
            _Utils_Tuple2("key", $author$project$Gen$Browser$Navigation$annotation_.g9),
            _Utils_Tuple2("url", $author$project$Gen$Url$annotation_.af),
            _Utils_Tuple2("states", $author$project$Gen$App$State$annotation_.gB($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "State"))),
            _Utils_Tuple2("frame", $mdgriffith$elm_codegen$Elm$Annotation$var("frame"))
        ])),
        hg: $author$project$Press$Model$appMsg,
        ew: $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "PageModel"),
        hu: $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "PageMsg"),
        hH: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Nothing,
            q: _List_fromArray(["Route"]),
            r: "Route"
        }),
        hQ: $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Subscription", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
        ])),
        bk: function (string) {
            return "To" + string;
        }
    };
    var $mdgriffith$elm_codegen$Elm$val = function (name) {
        return $mdgriffith$elm_codegen$Elm$value({ p: $elm$core$Maybe$Nothing, q: _List_Nil, r: name });
    };
    var $mdgriffith$elm_codegen$Elm$withType_fn = function (ann, _v0) {
        var annDetails = ann;
        var toExp = _v0;
        return function (index) {
            var exp = toExp(index);
            return _Utils_update(exp, {
                p: function () {
                    var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$unifyOn_fn(ann, exp.p);
                    if (!_v1.$) {
                        var unified = _v1.a;
                        return $elm$core$Result$Ok(unified);
                    }
                    else {
                        var _v2 = exp.p;
                        if (!_v2.$) {
                            var expressionAnnotation = _v2.a;
                            return $elm$core$Result$Ok({ a1: expressionAnnotation.a1, f: expressionAnnotation.f, aq: annDetails.p });
                        }
                        else {
                            var err = _v2.a;
                            return $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: $elm$core$Dict$empty, aq: annDetails.p });
                        }
                    }
                }(),
                d: _Utils_ap(exp.d, annDetails.d)
            });
        };
    }, $mdgriffith$elm_codegen$Elm$withType = F2($mdgriffith$elm_codegen$Elm$withType_fn);
    var $author$project$Press$Generate$Engine$app_fn = function (routes, initPage) {
        return $mdgriffith$elm_codegen$Elm$expose($mdgriffith$elm_codegen$Elm$declaration_fn("app", $mdgriffith$elm_codegen$Elm$fn_fn(_Utils_Tuple2("config", $elm$core$Maybe$Just($author$project$Press$Model$types.au)), function (config) {
            return $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "App", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("model"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ])), $author$project$Gen$Browser$call_.bw($mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$fn3_fn_unwrapped(_Utils_Tuple2("flags", $elm$core$Maybe$Just($author$project$Gen$Json$Encode$annotation_.h1)), _Utils_Tuple2("url", $elm$core$Maybe$Just($author$project$Gen$Url$annotation_.af)), _Utils_Tuple2("key", $elm$core$Maybe$Just($author$project$Gen$Browser$Navigation$annotation_.g9)), function (flags, url, key) {
                    var frameInitialized = $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("init", config), _List_fromArray([key, flags]));
                    return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("frameModel", "frameCmd", frameInitialized, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v0) {
                        var frameModel = _v0.a;
                        var frameEffect = _v0.b;
                        var newStates = $mdgriffith$elm_codegen$Elm$Case$maybe_fn($author$project$Press$Generate$Engine$parseUrl(url), {
                            aP: _Utils_Tuple2("route", function (route) {
                                var initializedPage = A3(initPage.bV, route, $author$project$Press$Model$toShared_fn(config, frameModel), $author$project$Gen$App$State$init);
                                return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("pageModel", "tag", initializedPage, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v2) {
                                    var newPage = _v2.a;
                                    var pageTag = _v2.b;
                                    return $mdgriffith$elm_codegen$Elm$tuple_fn(A2($author$project$Gen$App$State$call_.fi, pageTag, A3($author$project$Gen$App$State$call_.dt, pageTag, $mdgriffith$elm_codegen$Elm$get_fn("new", newPage), $author$project$Gen$App$State$init)), $author$project$Press$Model$toCmd_fn(config, frameModel, $mdgriffith$elm_codegen$Elm$get_fn("effect", newPage)));
                                })));
                            }),
                            aV: $mdgriffith$elm_codegen$Elm$tuple_fn($author$project$Gen$App$State$init, $author$project$Gen$Platform$Cmd$none)
                        });
                        return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("pageInitialized", "pageCmd", newStates, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v1) {
                            var pageInitialzied = _v1.a;
                            var pageCmd = _v1.b;
                            return $mdgriffith$elm_codegen$Elm$tuple_fn($mdgriffith$elm_codegen$Elm$withType_fn($author$project$Press$Model$types.d9, $mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                                _Utils_Tuple2("key", key),
                                _Utils_Tuple2("url", url),
                                _Utils_Tuple2("frame", frameModel),
                                _Utils_Tuple2("states", pageInitialzied)
                            ]))), $author$project$Gen$Platform$Cmd$batch(_List_fromArray([
                                $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$cmd($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Msg")), $author$project$Press$Model$toCmd_fn(config, frameModel, A2($author$project$Gen$App$Effect$call_.dP, $mdgriffith$elm_codegen$Elm$val("Global"), frameEffect))),
                                pageCmd
                            ])));
                        })));
                    })));
                })),
                _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val("update"), _List_fromArray([config]))),
                _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val("view"), _List_fromArray([config]))),
                _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val("subscriptions"), _List_fromArray([config]))),
                _Utils_Tuple2("onUrlChange", $mdgriffith$elm_codegen$Elm$val("UrlChanged")),
                _Utils_Tuple2("onUrlRequest", $mdgriffith$elm_codegen$Elm$val("UrlRequested"))
            ]))));
        })));
    }, $author$project$Press$Generate$Engine$app = F2($author$project$Press$Generate$Engine$app_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$deduplicate = function (listToDeduplicate) {
        return $elm$core$List$reverse($elm$core$List$foldl_fn_unwrapped(function (item, untouched) {
            var set = untouched.a;
            var innerList = untouched.b;
            return $elm$core$Set$member_fn(item, set) ? untouched : _Utils_Tuple2($elm$core$Set$insert_fn(item, set), _List_Cons(item, innerList));
        }, _Utils_Tuple2($elm$core$Set$empty, _List_Nil), listToDeduplicate).b);
    };
    var $mdgriffith$elm_codegen$Elm$customType_fn = function (name, variants) {
        return $mdgriffith$elm_codegen$Internal$Compiler$Declaration({
            a5: $elm$core$Maybe$Nothing,
            aj: $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            d: $elm$core$List$concatMap_fn(function (_v0) {
                var listAnn = _v0.b;
                return $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, listAnn);
            }, variants),
            r: name,
            ap: function (index) {
                return {
                    ah: _List_Nil,
                    gL: $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration({
                        gJ: $elm$core$List$map_fn(function (_v1) {
                            var varName = _v1.a;
                            var vars = _v1.b;
                            return $mdgriffith$elm_codegen$Internal$Compiler$nodify({
                                a3: $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, $mdgriffith$elm_codegen$Internal$Compiler$nodify), vars),
                                r: $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Format$formatType(varName))
                            });
                        }, variants),
                        a6: $elm$core$Maybe$Nothing,
                        c3: $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Elm$deduplicate($elm$core$List$concatMap_fn(function (_v2) {
                            var listAnn = _v2.b;
                            return $elm$core$List$concatMap_fn($mdgriffith$elm_codegen$Internal$Compiler$getGenerics, listAnn);
                        }, variants))),
                        r: $mdgriffith$elm_codegen$Internal$Compiler$nodify($mdgriffith$elm_codegen$Internal$Format$formatType(name))
                    }),
                    h4: $elm$core$Maybe$Nothing
                };
            }
        });
    }, $mdgriffith$elm_codegen$Elm$customType = F2($mdgriffith$elm_codegen$Elm$customType_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn = function (opts, decl) {
        switch (decl.$) {
            case 1:
                return decl;
            case 2:
                return decl;
            default:
                var details = decl.a;
                return $mdgriffith$elm_codegen$Internal$Compiler$Declaration(_Utils_update(details, {
                    aj: $mdgriffith$elm_codegen$Internal$Compiler$Exposed(opts)
                }));
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$exposeWith = F2($mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn);
    var $mdgriffith$elm_codegen$Elm$exposeWith = $mdgriffith$elm_codegen$Internal$Compiler$exposeWith;
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
        return { $: 0, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Comments$Markdown = function (a) {
        return { $: 0, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
        return { $: 0, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$RenderedBlock = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$RenderedComment = function (a) {
        return { $: 1, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$RenderedDecl = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Render$addDocs_fn = function (maybeDoc, decl) {
        if (maybeDoc.$ === 1) {
            return decl;
        }
        else {
            var doc = maybeDoc.a;
            switch (decl.$) {
                case 0:
                    var func = decl.a;
                    return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_Utils_update(func, {
                        a6: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
                    }));
                case 1:
                    var typealias = decl.a;
                    return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(_Utils_update(typealias, {
                        a6: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
                    }));
                case 2:
                    var typeDecl = decl.a;
                    return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(_Utils_update(typeDecl, {
                        a6: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
                    }));
                case 3:
                    var sig = decl.a;
                    return decl;
                case 4:
                    return decl;
                default:
                    return decl;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Render$addDocs = F2($mdgriffith$elm_codegen$Internal$Render$addDocs_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
        return { $: 1, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
        return { $: 3, a: a };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Render$addExposed_fn = function (exposed, declaration, otherExposes) {
        if (!exposed.$) {
            return otherExposes;
        }
        else {
            var details = exposed.a;
            switch (declaration.$) {
                case 0:
                    var fn = declaration.a;
                    var fnName = $mdgriffith$elm_codegen$Internal$Compiler$denode(function ($) {
                        return $.r;
                    }($mdgriffith$elm_codegen$Internal$Compiler$denode(fn.gL)));
                    return _List_Cons($stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(fnName), otherExposes);
                case 1:
                    var synonym = declaration.a;
                    var aliasName = $mdgriffith$elm_codegen$Internal$Compiler$denode(synonym.r);
                    return _List_Cons($stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(aliasName), otherExposes);
                case 2:
                    var myType = declaration.a;
                    var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myType.r);
                    return details.aN ? _List_Cons($stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose({
                        r: typeName,
                        hq: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
                    }), otherExposes) : _List_Cons($stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(typeName), otherExposes);
                case 3:
                    var myPort = declaration.a;
                    var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myPort.r);
                    return _List_Cons($stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(typeName), otherExposes);
                case 4:
                    var inf = declaration.a;
                    return otherExposes;
                default:
                    return otherExposes;
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Render$addExposed = F3($mdgriffith$elm_codegen$Internal$Render$addExposed_fn);
    var $mdgriffith$elm_codegen$Internal$Comments$Comment = $elm$core$Basics$identity;
    var $mdgriffith$elm_codegen$Internal$Comments$addPart_fn = function (_v0, part) {
        var parts = _v0;
        return _List_Cons(part, parts);
    }, $mdgriffith$elm_codegen$Internal$Comments$addPart = F2($mdgriffith$elm_codegen$Internal$Comments$addPart_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$fullModName = function (name) {
        return $elm$core$String$join_fn(".", name);
    };
    var $elm$core$List$sortBy = _List_sortBy;
    var $mdgriffith$elm_codegen$Internal$Render$dedupImports = function (mods) {
        return _List_sortBy_fn($mdgriffith$elm_codegen$Internal$Compiler$fullModName, $elm$core$List$foldl_fn_unwrapped(function (mod, _v0) {
            var set = _v0.a;
            var gathered = _v0.b;
            var stringName = $mdgriffith$elm_codegen$Internal$Compiler$fullModName(mod);
            return $elm$core$Set$member_fn(stringName, set) ? _Utils_Tuple2(set, gathered) : _Utils_Tuple2($elm$core$Set$insert_fn(stringName, set), _List_Cons(mod, gathered));
        }, _Utils_Tuple2($elm$core$Set$empty, _List_Nil), mods).b);
    };
    var $mdgriffith$elm_codegen$Internal$Comments$emptyComment = _List_Nil;
    var $elm$core$List$maybeCons_fn = function (f, mx, xs) {
        var _v0 = f(mx);
        if (!_v0.$) {
            var x = _v0.a;
            return _List_Cons(x, xs);
        }
        else {
            return xs;
        }
    }, $elm$core$List$maybeCons = F3($elm$core$List$maybeCons_fn);
    var $elm$core$List$filterMap_fn = function (f, xs) {
        return $elm$core$List$foldr_fn($elm$core$List$maybeCons(f), _List_Nil, xs);
    }, $elm$core$List$filterMap = F2($elm$core$List$filterMap_fn);
    var $mdgriffith$elm_codegen$Internal$Render$matchName_fn = function (one, two) {
        if (one.$ === 1) {
            if (two.$ === 1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            var oneName = one.a;
            if (two.$ === 1) {
                return false;
            }
            else {
                var twoName = two.a;
                return _Utils_eq(oneName, twoName);
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Render$matchName = F2($mdgriffith$elm_codegen$Internal$Render$matchName_fn);
    var $mdgriffith$elm_codegen$Internal$Render$groupExposing = function (items) {
        return $elm$core$List$map_fn(function (doc) {
            return _Utils_update(doc, {
                d2: $elm$core$List$reverse(doc.d2)
            });
        }, $elm$core$List$foldr_fn(F2(function (_v0, acc) {
            var maybeGroup = _v0.a;
            var name = _v0.b;
            if (!acc.b) {
                return _List_fromArray([
                    {
                        av: maybeGroup,
                        d2: _List_fromArray([name])
                    }
                ]);
            }
            else {
                var top = acc.a;
                var groups = acc.b;
                return $mdgriffith$elm_codegen$Internal$Render$matchName_fn(maybeGroup, top.av) ? _List_Cons({
                    av: top.av,
                    d2: _List_Cons(name, top.d2)
                }, groups) : _List_Cons({
                    av: maybeGroup,
                    d2: _List_fromArray([name])
                }, acc);
            }
        }), _List_Nil, items));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
        return { $: 0, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$builtIn = function (name) {
        _v0$13: while (true) {
            if (name.b) {
                if (name.b.b) {
                    if ((name.a === "Platform") && (!name.b.b.b)) {
                        switch (name.b.a) {
                            case "Sub":
                                var _v1 = name.b;
                                return true;
                            case "Cmd":
                                var _v2 = name.b;
                                return true;
                            default:
                                break _v0$13;
                        }
                    }
                    else {
                        break _v0$13;
                    }
                }
                else {
                    switch (name.a) {
                        case "List":
                            return true;
                        case "Maybe":
                            return true;
                        case "String":
                            return true;
                        case "Basics":
                            return true;
                        case "Char":
                            return true;
                        case "Debug":
                            return true;
                        case "Tuple":
                            return true;
                        case "Result":
                            return true;
                        case "Platform":
                            return true;
                        case "Sub":
                            return true;
                        case "Cmd":
                            return true;
                        default:
                            break _v0$13;
                    }
                }
            }
            else {
                break _v0$13;
            }
        }
        return false;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$findAlias_fn = function (modName, aliases) {
        findAlias: while (true) {
            if (!aliases.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var _v1 = aliases.a;
                var aliasModName = _v1.a;
                var alias = _v1.b;
                var remain = aliases.b;
                if (_Utils_eq(modName, aliasModName)) {
                    return $elm$core$Maybe$Just(alias);
                }
                else {
                    var $temp$modName = modName, $temp$aliases = remain;
                    modName = $temp$modName;
                    aliases = $temp$aliases;
                    continue findAlias;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$findAlias = F2($mdgriffith$elm_codegen$Internal$Compiler$findAlias_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$isParser = function (name) {
        _v0$2: while (true) {
            if (name.b && (name.a === "Parser")) {
                if (!name.b.b) {
                    return true;
                }
                else {
                    if ((name.b.a === "Advanced") && (!name.b.b.b)) {
                        var _v1 = name.b;
                        return true;
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return false;
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser = function (name) {
        if ((((name.b && (name.a === "Url")) && name.b.b) && (name.b.a === "Parser")) && (!name.b.b.b)) {
            var _v1 = name.b;
            return true;
        }
        else {
            return false;
        }
    };
    var $mdgriffith$elm_codegen$Internal$Compiler$makeImport_fn = function (aliases, name) {
        if (!name.b) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$findAlias_fn(name, aliases);
            if (_v1.$ === 1) {
                return $mdgriffith$elm_codegen$Internal$Compiler$builtIn(name) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just({
                    cF: $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser(name) ? $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("</>")),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("<?>"))
                    ])))) : ($mdgriffith$elm_codegen$Internal$Compiler$isParser(name) ? $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("|=")),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("|."))
                    ])))) : $elm$core$Maybe$Nothing),
                    ea: $elm$core$Maybe$Nothing,
                    ec: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                });
            }
            else {
                var alias = _v1.a;
                return $elm$core$Maybe$Just({
                    cF: $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser(name) ? $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("</>")),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("<?>"))
                    ])))) : ($mdgriffith$elm_codegen$Internal$Compiler$isParser(name) ? $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("|=")),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("|."))
                    ])))) : $elm$core$Maybe$Nothing),
                    ea: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$nodify(_List_fromArray([alias]))),
                    ec: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                });
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Compiler$makeImport = F2($mdgriffith$elm_codegen$Internal$Compiler$makeImport_fn);
    var $the_sett$elm_pretty_printer$Internals$Concatenate_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $the_sett$elm_pretty_printer$Internals$Concatenate = F2($the_sett$elm_pretty_printer$Internals$Concatenate_fn);
    var $the_sett$elm_pretty_printer$Pretty$append_fn = function (doc1, doc2) {
        return $the_sett$elm_pretty_printer$Internals$Concatenate_fn(function (_v0) {
            return doc1;
        }, function (_v1) {
            return doc2;
        });
    }, $the_sett$elm_pretty_printer$Pretty$append = F2($the_sett$elm_pretty_printer$Pretty$append_fn);
    var $elm_community$basics_extra$Basics$Extra$flip_fn = function (f, b, a) {
        return A2(f, a, b);
    }, $elm_community$basics_extra$Basics$Extra$flip_fn_unwrapped = function (f, b, a) {
        return f(a, b);
    }, $elm_community$basics_extra$Basics$Extra$flip = F3($elm_community$basics_extra$Basics$Extra$flip_fn);
    var $the_sett$elm_pretty_printer$Pretty$a_a0 = $the_sett$elm_pretty_printer$Pretty$append, $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$a_a0);
    var $the_sett$elm_pretty_printer$Internals$Line_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $the_sett$elm_pretty_printer$Internals$Line = F2($the_sett$elm_pretty_printer$Internals$Line_fn);
    var $the_sett$elm_pretty_printer$Pretty$line = $the_sett$elm_pretty_printer$Internals$Line_fn(" ", "");
    var $the_sett$elm_pretty_printer$Internals$Empty = { $: 0 };
    var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
    var $the_sett$elm_pretty_printer$Pretty$join_fn = function (sep, docs) {
        join: while (true) {
            if (!docs.b) {
                return $the_sett$elm_pretty_printer$Pretty$empty;
            }
            else {
                if (!docs.a.$) {
                    var _v1 = docs.a;
                    var ds = docs.b;
                    var $temp$sep = sep, $temp$docs = ds;
                    sep = $temp$sep;
                    docs = $temp$docs;
                    continue join;
                }
                else {
                    var d = docs.a;
                    var ds = docs.b;
                    var step = F2(function (x, rest) {
                        if (!x.$) {
                            return rest;
                        }
                        else {
                            var doc = x;
                            return $the_sett$elm_pretty_printer$Pretty$append_fn(sep, $the_sett$elm_pretty_printer$Pretty$append_fn(doc, rest));
                        }
                    });
                    var spersed = $elm$core$List$foldr_fn(step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
                    return $the_sett$elm_pretty_printer$Pretty$append_fn(d, spersed);
                }
            }
        }
    }, $the_sett$elm_pretty_printer$Pretty$join = F2($the_sett$elm_pretty_printer$Pretty$join_fn);
    var $the_sett$elm_pretty_printer$Pretty$lines_a0 = $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$lines_a0);
    var $elm$core$Maybe$map_fn = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0 = $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0);
    var $mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0 = $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0);
    var $the_sett$elm_pretty_printer$Internals$Text_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $the_sett$elm_pretty_printer$Internals$Text = F2($the_sett$elm_pretty_printer$Internals$Text_fn);
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = function (_char) {
        return _String_cons_fn(_char, "");
    };
    var $the_sett$elm_pretty_printer$Pretty$char = function (c) {
        return $the_sett$elm_pretty_printer$Internals$Text_fn($elm$core$String$fromChar(c), $elm$core$Maybe$Nothing);
    };
    var $the_sett$elm_pretty_printer$Pretty$surround_fn = function (left, right, doc) {
        return $the_sett$elm_pretty_printer$Pretty$append_fn($the_sett$elm_pretty_printer$Pretty$append_fn(left, doc), right);
    }, $the_sett$elm_pretty_printer$Pretty$surround = F3($the_sett$elm_pretty_printer$Pretty$surround_fn);
    var $the_sett$elm_pretty_printer$Pretty$parens = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$char("("), $the_sett$elm_pretty_printer$Pretty$char(")"), doc);
    };
    var $the_sett$elm_pretty_printer$Pretty$string = function (val) {
        return $the_sett$elm_pretty_printer$Internals$Text_fn(val, $elm$core$Maybe$Nothing);
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose = function (tlExpose) {
        switch (tlExpose.$) {
            case 0:
                var val = tlExpose.a;
                return $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(val));
            case 1:
                var val = tlExpose.a;
                return $the_sett$elm_pretty_printer$Pretty$string(val);
            case 2:
                var val = tlExpose.a;
                return $the_sett$elm_pretty_printer$Pretty$string(val);
            default:
                var exposedType = tlExpose.a;
                var _v1 = exposedType.hq;
                if (_v1.$ === 1) {
                    return $the_sett$elm_pretty_printer$Pretty$string(exposedType.r);
                }
                else {
                    return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("(..)"), $the_sett$elm_pretty_printer$Pretty$string(exposedType.r));
                }
        }
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes = function (exposes) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose, exposes));
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes = function (exposes) {
        if (!exposes.b) {
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("");
        }
        else {
            var hd = exposes.a;
            var tl = exposes.b;
            return $elm$core$List$foldl_fn_unwrapped(function (exp, result) {
                var _v1 = _Utils_Tuple2(exp, result);
                if (_v1.a.$ === 3) {
                    var typeExpose = _v1.a.a;
                    var _v2 = typeExpose.hq;
                    if (!_v2.$) {
                        return exp;
                    }
                    else {
                        return result;
                    }
                }
                else {
                    if (_v1.b.$ === 3) {
                        var typeExpose = _v1.b.a;
                        var _v3 = typeExpose.hq;
                        if (!_v3.$) {
                            return result;
                        }
                        else {
                            return exp;
                        }
                    }
                    else {
                        return result;
                    }
                }
            }, hd, tl);
        }
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName = function (tle) {
        switch (tle.$) {
            case 0:
                var val = tle.a;
                return val;
            case 1:
                var val = tle.a;
                return val;
            case 2:
                var val = tle.a;
                return val;
            default:
                var exposedType = tle.a;
                return exposedType.r;
        }
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName = function (innerImports) {
        var _v0 = function () {
            if (!innerImports.b) {
                return _Utils_Tuple3("", _List_Nil, _List_fromArray([_List_Nil]));
            }
            else {
                var hd = innerImports.a;
                return $elm$core$List$foldl_fn_unwrapped(function (exp, _v2) {
                    var currName = _v2.a;
                    var currAccum = _v2.b;
                    var accum = _v2.c;
                    var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(exp);
                    return _Utils_eq(nextName, currName) ? _Utils_Tuple3(currName, _List_Cons(exp, currAccum), accum) : _Utils_Tuple3(nextName, _List_fromArray([exp]), _List_Cons(currAccum, accum));
                }, _Utils_Tuple3($mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(hd), _List_Nil, _List_Nil), innerImports);
            }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(_List_Cons(hdGroup, remGroups));
    };
    var $elm$core$List$sortWith = _List_sortWith;
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder_fn = function (tlel, tler) {
        var _v0 = _Utils_Tuple2(tlel, tler);
        if (!_v0.a.$) {
            if (!_v0.b.$) {
                return _Utils_compare_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel), $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler));
            }
            else {
                return 0;
            }
        }
        else {
            if (!_v0.b.$) {
                return 2;
            }
            else {
                return _Utils_compare_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel), $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder = F2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder_fn);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings = function (tlExposings) {
        return $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName(_List_sortWith_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder, tlExposings)));
    };
    var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(" ");
    var $mdgriffith$elm_codegen$Internal$Write$prettyExposing = function (exposing_) {
        var exposings = function () {
            if (!exposing_.$) {
                return $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(".."));
            }
            else {
                var tll = exposing_.a;
                return $the_sett$elm_pretty_printer$Pretty$parens($mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes($mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, tll))));
            }
        }();
        return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, exposings, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("exposing")));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn = function (prettyFn, maybeVal) {
        return $elm$core$Maybe$withDefault_fn($the_sett$elm_pretty_printer$Pretty$empty, $elm$core$Maybe$map_fn(prettyFn, maybeVal));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyMaybe = F2($mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn);
    var $mdgriffith$elm_codegen$Internal$Write$dot = $the_sett$elm_pretty_printer$Pretty$string(".");
    var $mdgriffith$elm_codegen$Internal$Write$prettyModuleName = function (name) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($mdgriffith$elm_codegen$Internal$Write$dot, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, name));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias = function (name) {
        if (!name.b) {
            return $the_sett$elm_pretty_printer$Pretty$empty;
        }
        else {
            return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$join_fn($mdgriffith$elm_codegen$Internal$Write$dot, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, name)), $the_sett$elm_pretty_printer$Pretty$string("as "));
        }
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyImport = function (import_) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$space, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("import"),
            $mdgriffith$elm_codegen$Internal$Write$prettyModuleName($mdgriffith$elm_codegen$Internal$Compiler$denode(import_.ec)),
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, import_.ea)),
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettyExposing, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, import_.cF))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe_a0 = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe_a0);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll_a0 = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll_a0);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify = function (exp) {
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll_a0 = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll_a0);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings_fn = function (left, right) {
        var _v0 = _Utils_Tuple2(left, right);
        if (!_v0.a.$) {
            var range = _v0.a.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
        }
        else {
            if (!_v0.b.$) {
                var range = _v0.b.a;
                return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
            }
            else {
                var leftNodes = _v0.a.a;
                var rightNodes = _v0.b.a;
                return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll_a0, $elm$core$List$append_fn($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll_a0, leftNodes), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll_a0, rightNodes))));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings = F2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings_fn);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings_fn = function (maybeLeft, maybeRight) {
        var _v0 = _Utils_Tuple2(maybeLeft, maybeRight);
        if (_v0.a.$ === 1) {
            if (_v0.b.$ === 1) {
                var _v1 = _v0.a;
                var _v2 = _v0.b;
                return $elm$core$Maybe$Nothing;
            }
            else {
                var _v4 = _v0.a;
                var right = _v0.b.a;
                return $elm$core$Maybe$Just(right);
            }
        }
        else {
            if (_v0.b.$ === 1) {
                var left = _v0.a.a;
                var _v3 = _v0.b;
                return $elm$core$Maybe$Just(left);
            }
            else {
                var left = _v0.a.a;
                var right = _v0.b.a;
                return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings_fn(left, right));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings = F2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings_fn);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe_a0 = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe_a0);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$or_fn = function (ma, mb) {
        if (ma.$ === 1) {
            return mb;
        }
        else {
            return ma;
        }
    }, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$or = F2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$or_fn);
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing = function (exp) {
        if (!exp.$) {
            var range = exp.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
        }
        else {
            var nodes = exp.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll_a0, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll_a0, nodes))));
        }
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports = function (innerImports) {
        if (!innerImports.b) {
            return {
                cF: $elm$core$Maybe$Nothing,
                ea: $elm$core$Maybe$Nothing,
                ec: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify(_List_Nil)
            };
        }
        else {
            var hd = innerImports.a;
            var tl = innerImports.b;
            var combinedImports = $elm$core$List$foldl_fn_unwrapped(function (imp, result) {
                return {
                    cF: $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe_a0, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings_fn($elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe_a0, imp.cF), $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe_a0, result.cF))),
                    ea: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$or_fn(imp.ea, result.ea),
                    ec: imp.ec
                };
            }, hd, tl);
            return _Utils_update(combinedImports, {
                cF: $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode, A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify)), combinedImports.cF)
            });
        }
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName = function (innerImports) {
        var _v0 = function () {
            if (!innerImports.b) {
                return _Utils_Tuple3(_List_Nil, _List_Nil, _List_fromArray([_List_Nil]));
            }
            else {
                var hd = innerImports.a;
                return $elm$core$List$foldl_fn_unwrapped(function (imp, _v2) {
                    var currName = _v2.a;
                    var currAccum = _v2.b;
                    var accum = _v2.c;
                    var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.ec);
                    return _Utils_eq(nextName, currName) ? _Utils_Tuple3(currName, _List_Cons(imp, currAccum), accum) : _Utils_Tuple3(nextName, _List_fromArray([imp]), _List_Cons(currAccum, accum));
                }, _Utils_Tuple3($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(hd.ec), _List_Nil, _List_Nil), innerImports);
            }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(_List_Cons(hdGroup, remGroups));
    };
    var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports = function (imports) {
        var impName = function (imp) {
            return $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.ec);
        };
        return $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName(_List_sortBy_fn(impName, imports)));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyImports = function (imports) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyImport, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports(imports)));
    };
    var $mdgriffith$elm_codegen$Internal$Write$importsPretty = function (imports) {
        if (!imports.b) {
            return $the_sett$elm_pretty_printer$Pretty$line;
        }
        else {
            return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $mdgriffith$elm_codegen$Internal$Write$prettyImports(imports))));
        }
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyComments = function (comments) {
        if (!comments.b) {
            return $the_sett$elm_pretty_printer$Pretty$empty;
        }
        else {
            return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, comments))));
        }
    };
    var $elm$core$List$drop_fn = function (n, list) {
        drop: while (true) {
            if (n <= 0) {
                return list;
            }
            else {
                if (!list.b) {
                    return list;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    }, $elm$core$List$drop = F2($elm$core$List$drop_fn);
    var $the_sett$elm_pretty_printer$Internals$Nest_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $the_sett$elm_pretty_printer$Internals$Nest = F2($the_sett$elm_pretty_printer$Internals$Nest_fn);
    var $the_sett$elm_pretty_printer$Pretty$nest_fn = function (depth, doc) {
        return $the_sett$elm_pretty_printer$Internals$Nest_fn(depth, function (_v0) {
            return doc;
        });
    }, $the_sett$elm_pretty_printer$Pretty$nest = F2($the_sett$elm_pretty_printer$Pretty$nest_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation = function (docs) {
        return _String_contains_fn("\n", docs) ? $the_sett$elm_pretty_printer$Pretty$string("{-| " + (docs + "\n-}")) : $the_sett$elm_pretty_printer$Pretty$string("{-| " + (docs + " -}"));
    };
    var $the_sett$elm_pretty_printer$Internals$Union_fn = function (a, b) {
        return { $: 5, a: a, b: b };
    }, $the_sett$elm_pretty_printer$Internals$Union = F2($the_sett$elm_pretty_printer$Internals$Union_fn);
    var $the_sett$elm_pretty_printer$Internals$flatten = function (doc) {
        flatten: while (true) {
            switch (doc.$) {
                case 1:
                    var doc1 = doc.a;
                    var doc2 = doc.b;
                    return $the_sett$elm_pretty_printer$Internals$Concatenate_fn(function (_v1) {
                        return $the_sett$elm_pretty_printer$Internals$flatten(doc1(0));
                    }, function (_v2) {
                        return $the_sett$elm_pretty_printer$Internals$flatten(doc2(0));
                    });
                case 2:
                    var i = doc.a;
                    var doc1 = doc.b;
                    return $the_sett$elm_pretty_printer$Internals$Nest_fn(i, function (_v3) {
                        return $the_sett$elm_pretty_printer$Internals$flatten(doc1(0));
                    });
                case 5:
                    var doc1 = doc.a;
                    var doc2 = doc.b;
                    var $temp$doc = doc1;
                    doc = $temp$doc;
                    continue flatten;
                case 4:
                    var hsep = doc.a;
                    return $the_sett$elm_pretty_printer$Internals$Text_fn(hsep, $elm$core$Maybe$Nothing);
                case 6:
                    var fn = doc.a;
                    var $temp$doc = fn(0);
                    doc = $temp$doc;
                    continue flatten;
                case 7:
                    var fn = doc.a;
                    var $temp$doc = fn(0);
                    doc = $temp$doc;
                    continue flatten;
                default:
                    var x = doc;
                    return x;
            }
        }
    };
    var $the_sett$elm_pretty_printer$Pretty$group = function (doc) {
        return $the_sett$elm_pretty_printer$Internals$Union_fn($the_sett$elm_pretty_printer$Internals$flatten(doc), doc);
    };
    var $mdgriffith$elm_codegen$Internal$Write$isNakedCompound = function (typeAnn) {
        switch (typeAnn.$) {
            case 1:
                if (!typeAnn.b.b) {
                    return false;
                }
                else {
                    var args = typeAnn.b;
                    return true;
                }
            case 6:
                return true;
            default:
                return false;
        }
    };
    var $elm$core$Tuple$mapBoth_fn = function (funcA, funcB, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(funcA(x), funcB(y));
    }, $elm$core$Tuple$mapBoth = F3($elm$core$Tuple$mapBoth_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot_fn = function (aliases, name) {
        if (!name.b) {
            return $the_sett$elm_pretty_printer$Pretty$empty;
        }
        else {
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$findAlias_fn(name, aliases);
            if (_v1.$ === 1) {
                return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$dot, $the_sett$elm_pretty_printer$Pretty$join_fn($mdgriffith$elm_codegen$Internal$Write$dot, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, name)));
            }
            else {
                var alias = _v1.a;
                return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$dot, $the_sett$elm_pretty_printer$Pretty$string(alias));
            }
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot = F2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot_fn);
    var $the_sett$elm_pretty_printer$Pretty$separators = function (sep) {
        return $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Internals$Line_fn(sep, sep));
    };
    var $the_sett$elm_pretty_printer$Pretty$words_a0 = $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$words = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$words_a0);
    var $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn_fn = function (aliases, _v8) {
        var name = _v8.a;
        var ann = _v8.b;
        return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$nest_fn(4, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                $the_sett$elm_pretty_printer$Pretty$string(name),
                $the_sett$elm_pretty_printer$Pretty$string(":")
            ])),
            $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, ann)
        ]))));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn = F2($mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation_fn = function (aliases, left, right) {
        var expandLeft = function (ann) {
            if (ann.$ === 6) {
                return $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens_fn(aliases, ann);
            }
            else {
                return $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, ann);
            }
        };
        var innerFnTypeAnn = F2(function (innerLeft, innerRight) {
            var rightSide = expandRight($mdgriffith$elm_codegen$Internal$Compiler$denode(innerRight));
            if (rightSide.b) {
                var hd = rightSide.a;
                var tl = rightSide.b;
                return _List_Cons(expandLeft($mdgriffith$elm_codegen$Internal$Compiler$denode(innerLeft)), _List_Cons($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                    $the_sett$elm_pretty_printer$Pretty$string("->"),
                    hd
                ])), tl));
            }
            else {
                return _List_Nil;
            }
        });
        var expandRight = function (ann) {
            if (ann.$ === 6) {
                var innerLeft = ann.a;
                var innerRight = ann.b;
                return A2(innerFnTypeAnn, innerLeft, innerRight);
            }
            else {
                return _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, ann)
                ]);
            }
        };
        return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, A2(innerFnTypeAnn, left, right)));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation = F3($mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord_fn = function (aliases, paramName, fields) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("{"),
            $the_sett$elm_pretty_printer$Pretty$string(paramName)
        ])));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        var addBarToFirst = function (exprs) {
            if (!exprs.b) {
                return _List_Nil;
            }
            else {
                var hd = exprs.a;
                var tl = exprs.b;
                return _List_Cons($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, hd, $the_sett$elm_pretty_printer$Pretty$string("| ")), tl);
            }
        };
        if (!fields.b) {
            return $the_sett$elm_pretty_printer$Pretty$string("{}");
        }
        else {
            return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$empty, close, $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", addBarToFirst($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases), $elm$core$List$map_fn(A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode), fields)))), open))));
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord = F3($mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyRecord_fn = function (aliases, fields) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("{"));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!fields.b) {
            return $the_sett$elm_pretty_printer$Pretty$string("{}");
        }
        else {
            return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases), $elm$core$List$map_fn(A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode), fields)))));
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyRecord = F2($mdgriffith$elm_codegen$Internal$Write$prettyRecord_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTupled_fn = function (aliases, anns) {
        return $the_sett$elm_pretty_printer$Pretty$parens($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation(aliases), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, anns))), $the_sett$elm_pretty_printer$Pretty$space)));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTupled = F2($mdgriffith$elm_codegen$Internal$Write$prettyTupled_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn = function (aliases, typeAnn) {
        switch (typeAnn.$) {
            case 0:
                var val = typeAnn.a;
                return $the_sett$elm_pretty_printer$Pretty$string(val);
            case 1:
                var fqName = typeAnn.a;
                var anns = typeAnn.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyTyped_fn(aliases, fqName, anns);
            case 2:
                return $the_sett$elm_pretty_printer$Pretty$string("()");
            case 3:
                var anns = typeAnn.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyTupled_fn(aliases, anns);
            case 4:
                var recordDef = typeAnn.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyRecord_fn(aliases, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, recordDef));
            case 5:
                var paramName = typeAnn.a;
                var recordDef = typeAnn.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(paramName), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, $mdgriffith$elm_codegen$Internal$Compiler$denode(recordDef)));
            default:
                var fromAnn = typeAnn.a;
                var toAnn = typeAnn.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation_fn(aliases, fromAnn, toAnn);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation = F2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens_fn = function (aliases, typeAnn) {
        return $mdgriffith$elm_codegen$Internal$Write$isNakedCompound(typeAnn) ? $the_sett$elm_pretty_printer$Pretty$parens($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, typeAnn)) : $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, typeAnn);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens = F2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTyped_fn = function (aliases, fqName, anns) {
        var argsDoc = $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, anns)));
        var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$denode(fqName);
        var moduleName = _v0.a;
        var typeName = _v0.b;
        var typeDoc = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(typeName), $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot_fn(aliases, moduleName));
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([typeDoc, argsDoc]));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTyped = F3($mdgriffith$elm_codegen$Internal$Write$prettyTyped_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor_fn = function (aliases, cons) {
        return $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(cons.r)),
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, cons.a3)))
        ]))));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor = F2($mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors_fn = function (aliases, constructors) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("| "), $the_sett$elm_pretty_printer$Pretty$line), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor(aliases), constructors));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors = F2($mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyCustomType_fn = function (aliases, type_) {
        var customTypePretty = $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors_fn(aliases, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, type_.gJ)), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("= "), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("type"),
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(type_.r)),
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, type_.c3)))
        ]))))));
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettyDocumentation, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, type_.a6)),
            customTypePretty
        ]));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyCustomType = F2($mdgriffith$elm_codegen$Internal$Write$prettyCustomType_fn);
    var $mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses_fn = function (context, expression) {
        var shouldRemove = function (expr) {
            var _v3 = _Utils_Tuple3(context.ac, context.ab, expr);
            _v3$1: while (true) {
                if (_v3.a) {
                    return true;
                }
                else {
                    switch (_v3.c.$) {
                        case 1:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return (context.o < 11) ? true : false;
                            }
                        case 3:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                var _v4 = _v3.c;
                                return true;
                            }
                        case 7:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 8:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 9:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 10:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 11:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 12:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 13:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 18:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 19:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 20:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                var _v5 = _v3.c;
                                return true;
                            }
                        case 21:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return true;
                            }
                        case 22:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                var _v6 = _v3.c;
                                return true;
                            }
                        default:
                            if (_v3.b) {
                                break _v3$1;
                            }
                            else {
                                return false;
                            }
                    }
                }
            }
            return true;
        };
        var removeParens = function (expr) {
            if (expr.$ === 14) {
                var innerExpr = expr.a;
                return shouldRemove($mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)) ? removeParens($mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)) : expr;
            }
            else {
                return expr;
            }
        };
        var addParens = function (expr) {
            var _v1 = _Utils_Tuple3(context.ac, context.ab, expr);
            _v1$4: while (true) {
                if ((!_v1.a) && (!_v1.b)) {
                    switch (_v1.c.$) {
                        case 15:
                            return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
                        case 16:
                            return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
                        case 17:
                            return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
                        case 4:
                            var _v2 = _v1.c;
                            return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
                        default:
                            break _v1$4;
                    }
                }
                else {
                    break _v1$4;
                }
            }
            return expr;
        };
        return addParens(removeParens(expression));
    }, $mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses = F2($mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses_fn);
    var $the_sett$elm_pretty_printer$Internals$Column = function (a) {
        return { $: 7, a: a };
    };
    var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
    var $the_sett$elm_pretty_printer$Internals$Nesting = function (a) {
        return { $: 6, a: a };
    };
    var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
    var $the_sett$elm_pretty_printer$Pretty$align = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$column(function (currentColumn) {
            return $the_sett$elm_pretty_printer$Pretty$nesting(function (indentLvl) {
                return $the_sett$elm_pretty_printer$Pretty$nest_fn(currentColumn - indentLvl, doc);
            });
        });
    };
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn = function (currentIndent, spaces) {
        var modded = _Basics_modBy_fn(4, currentIndent - spaces);
        return (!modded) ? 4 : modded;
    }, $mdgriffith$elm_codegen$Internal$Write$decrementIndent = F2($mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn);
    var $mdgriffith$elm_codegen$Internal$Write$doubleLines_a0 = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line), $mdgriffith$elm_codegen$Internal$Write$doubleLines = $the_sett$elm_pretty_printer$Pretty$join($mdgriffith$elm_codegen$Internal$Write$doubleLines_a0);
    var $mdgriffith$elm_codegen$Internal$Write$escapeChar = function (val) {
        switch (val) {
            case "\\":
                return "\\\\";
            case "'":
                return "\\'";
            case "\t":
                return "\\t";
            case "\n":
                return "\\n";
            default:
                var c = val;
                return $elm$core$String$fromChar(c);
        }
    };
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $the_sett$elm_pretty_printer$Internals$copy_fn = function (i, s) {
        return (!i) ? "" : _Utils_ap(s, $the_sett$elm_pretty_printer$Internals$copy_fn(i - 1, s));
    }, $the_sett$elm_pretty_printer$Internals$copy = F2($the_sett$elm_pretty_printer$Internals$copy_fn);
    var $the_sett$elm_pretty_printer$Pretty$hang_fn = function (spaces, doc) {
        return $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$nest_fn(spaces, doc));
    }, $the_sett$elm_pretty_printer$Pretty$hang = F2($the_sett$elm_pretty_printer$Pretty$hang_fn);
    var $the_sett$elm_pretty_printer$Pretty$indent_fn = function (spaces, doc) {
        return $the_sett$elm_pretty_printer$Pretty$hang_fn(spaces, $the_sett$elm_pretty_printer$Pretty$append_fn($the_sett$elm_pretty_printer$Pretty$string($the_sett$elm_pretty_printer$Internals$copy_fn(spaces, " ")), doc));
    }, $the_sett$elm_pretty_printer$Pretty$indent = F2($the_sett$elm_pretty_printer$Pretty$indent_fn);
    var $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn = function (flag, doc) {
        return flag ? doc : $the_sett$elm_pretty_printer$Pretty$group(doc);
    }, $mdgriffith$elm_codegen$Internal$Write$optionalGroup = F2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn);
    var $mdgriffith$elm_codegen$Internal$Write$precedence = function (symbol) {
        switch (symbol) {
            case ">>":
                return 9;
            case "<<":
                return 9;
            case "^":
                return 8;
            case "*":
                return 7;
            case "/":
                return 7;
            case "//":
                return 7;
            case "%":
                return 7;
            case "rem":
                return 7;
            case "+":
                return 6;
            case "-":
                return 6;
            case "++":
                return 5;
            case "::":
                return 5;
            case "==":
                return 4;
            case "/=":
                return 4;
            case "<":
                return 4;
            case ">":
                return 4;
            case "<=":
                return 4;
            case ">=":
                return 4;
            case "&&":
                return 3;
            case "||":
                return 2;
            case "|>":
                return 0;
            case "<|":
                return 0;
            default:
                return 0;
        }
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
        return { $: 14, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses_fn = function (isTop, pattern) {
        var shouldRemove = function (pat) {
            var _v5 = _Utils_Tuple2(isTop, pat);
            _v5$2: while (true) {
                switch (_v5.b.$) {
                    case 12:
                        if (!_v5.a) {
                            var _v6 = _v5.b;
                            return false;
                        }
                        else {
                            break _v5$2;
                        }
                    case 13:
                        var _v7 = _v5.b;
                        return false;
                    default:
                        break _v5$2;
                }
            }
            return isTop;
        };
        var removeParens = function (pat) {
            if (pat.$ === 14) {
                var innerPat = pat.a;
                return shouldRemove($mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)) ? removeParens($mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)) : pat;
            }
            else {
                return pat;
            }
        };
        var addParens = function (pat) {
            var _v1 = _Utils_Tuple2(isTop, pat);
            _v1$2: while (true) {
                if (!_v1.a) {
                    switch (_v1.b.$) {
                        case 12:
                            if (_v1.b.b.b) {
                                var _v2 = _v1.b;
                                var _v3 = _v2.b;
                                return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern($mdgriffith$elm_codegen$Internal$Compiler$nodify(pat));
                            }
                            else {
                                break _v1$2;
                            }
                        case 13:
                            var _v4 = _v1.b;
                            return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern($mdgriffith$elm_codegen$Internal$Compiler$nodify(pat));
                        default:
                            break _v1$2;
                    }
                }
                else {
                    break _v1$2;
                }
            }
            return pat;
        };
        return addParens(removeParens(pattern));
    }, $mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses = F2($mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses_fn);
    var $the_sett$elm_pretty_printer$Pretty$braces = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$char("{"), $the_sett$elm_pretty_printer$Pretty$char("}"), doc);
    };
    var $mdgriffith$elm_codegen$Internal$Write$quotes = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$char("\""), $the_sett$elm_pretty_printer$Pretty$char("\""), doc);
    };
    var $mdgriffith$elm_codegen$Internal$Write$singleQuotes = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$char("'"), $the_sett$elm_pretty_printer$Pretty$char("'"), doc);
    };
    var $elm$core$String$fromList = _String_fromList;
    var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
        unsafeToDigit: while (true) {
            switch (num) {
                case 0:
                    return "0";
                case 1:
                    return "1";
                case 2:
                    return "2";
                case 3:
                    return "3";
                case 4:
                    return "4";
                case 5:
                    return "5";
                case 6:
                    return "6";
                case 7:
                    return "7";
                case 8:
                    return "8";
                case 9:
                    return "9";
                case 10:
                    return "a";
                case 11:
                    return "b";
                case 12:
                    return "c";
                case 13:
                    return "d";
                case 14:
                    return "e";
                case 15:
                    return "f";
                default:
                    var $temp$num = num;
                    num = $temp$num;
                    continue unsafeToDigit;
            }
        }
    };
    var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits_fn = function (digits, num) {
        unsafePositiveToDigits: while (true) {
            if (num < 16) {
                return _List_Cons($rtfeldman$elm_hex$Hex$unsafeToDigit(num), digits);
            }
            else {
                var $temp$digits = _List_Cons($rtfeldman$elm_hex$Hex$unsafeToDigit(_Basics_modBy_fn(16, num)), digits), $temp$num = (num / 16) | 0;
                digits = $temp$digits;
                num = $temp$num;
                continue unsafePositiveToDigits;
            }
        }
    }, $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits_fn);
    var $rtfeldman$elm_hex$Hex$toString = function (num) {
        return $elm$core$String$fromList((num < 0) ? _List_Cons("-", $rtfeldman$elm_hex$Hex$unsafePositiveToDigits_fn(_List_Nil, -num)) : $rtfeldman$elm_hex$Hex$unsafePositiveToDigits_fn(_List_Nil, num));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn = function (aliases, isTop, pattern) {
        var _v0 = $mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses_fn(isTop, pattern);
        switch (_v0.$) {
            case 0:
                return $the_sett$elm_pretty_printer$Pretty$string("_");
            case 1:
                return $the_sett$elm_pretty_printer$Pretty$string("()");
            case 2:
                var val = _v0.a;
                return $mdgriffith$elm_codegen$Internal$Write$singleQuotes($the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Write$escapeChar(val)));
            case 3:
                var val = _v0.a;
                return $mdgriffith$elm_codegen$Internal$Write$quotes($the_sett$elm_pretty_printer$Pretty$string(val));
            case 4:
                var val = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(val));
            case 5:
                var val = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$string($rtfeldman$elm_hex$Hex$toString(val));
            case 6:
                var val = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(val));
            case 7:
                var vals = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$parens($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, true), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, vals))), $the_sett$elm_pretty_printer$Pretty$space)));
            case 8:
                var fields = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$braces($the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, fields)))));
            case 9:
                var hdPat = _v0.a;
                var tlPat = _v0.b;
                return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, false, $mdgriffith$elm_codegen$Internal$Compiler$denode(hdPat)),
                    $the_sett$elm_pretty_printer$Pretty$string("::"),
                    $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, false, $mdgriffith$elm_codegen$Internal$Compiler$denode(tlPat))
                ]));
            case 10:
                var listPats = _v0.a;
                if (!listPats.b) {
                    return $the_sett$elm_pretty_printer$Pretty$string("[]");
                }
                else {
                    var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("["));
                    var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("]"), $the_sett$elm_pretty_printer$Pretty$space);
                    return $the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, listPats))));
                }
            case 11:
                var _var = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$string(_var);
            case 12:
                var qnRef = _v0.a;
                var listPats = _v0.b;
                return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_Cons($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(qnRef.r), $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot_fn(aliases, qnRef.ec)), $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, listPats))));
            case 13:
                var pat = _v0.a;
                var name = _v0.b;
                return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, false, $mdgriffith$elm_codegen$Internal$Compiler$denode(pat)),
                    $the_sett$elm_pretty_printer$Pretty$string("as"),
                    $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(name))
                ]));
            default:
                var pat = _v0.a;
                return $the_sett$elm_pretty_printer$Pretty$parens($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, true, $mdgriffith$elm_codegen$Internal$Compiler$denode(pat)));
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner = F3($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyArgs_fn = function (aliases, args) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false), args));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyArgs = F2($mdgriffith$elm_codegen$Internal$Write$prettyArgs_fn);
    var $elm$core$String$replace_fn = function (before, after, string) {
        return $elm$core$String$join_fn(after, $elm$core$String$split_fn(before, string));
    }, $elm$core$String$replace = F3($elm$core$String$replace_fn);
    var $mdgriffith$elm_codegen$Internal$Write$escape = function (val) {
        return $elm$core$String$replace_fn("\t", "\\t", $elm$core$String$replace_fn("\n", "\\n", $elm$core$String$replace_fn("\"", "\\\"", $elm$core$String$replace_fn("\\", "\\\\", val))));
    };
    var $mdgriffith$elm_codegen$Internal$Write$tripleQuotes = function (doc) {
        return $the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$string("\"\"\""), $the_sett$elm_pretty_printer$Pretty$string("\"\"\""), doc);
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyLiteral = function (val) {
        return _String_contains_fn("\n", val) ? $mdgriffith$elm_codegen$Internal$Write$tripleQuotes($the_sett$elm_pretty_printer$Pretty$string(val)) : $mdgriffith$elm_codegen$Internal$Write$quotes($the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Write$escape(val)));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyPattern_fn = function (aliases, pattern) {
        return $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, true, pattern);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyPattern = F2($mdgriffith$elm_codegen$Internal$Write$prettyPattern_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettySignature_fn = function (aliases, sig) {
        return $the_sett$elm_pretty_printer$Pretty$group($the_sett$elm_pretty_printer$Pretty$nest_fn(4, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(sig.r)),
                $the_sett$elm_pretty_printer$Pretty$string(":")
            ])),
            $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(sig.a$))
        ]))));
    }, $mdgriffith$elm_codegen$Internal$Write$prettySignature = F2($mdgriffith$elm_codegen$Internal$Write$prettySignature_fn);
    var $the_sett$elm_pretty_printer$Pretty$tightline = $the_sett$elm_pretty_printer$Internals$Line_fn("", "");
    var $elm$core$String$padLeft_fn = function (n, _char, string) {
        return _Utils_ap($elm$core$String$repeat_fn(n - $elm$core$String$length(string), $elm$core$String$fromChar(_char)), string);
    }, $elm$core$String$padLeft = F3($elm$core$String$padLeft_fn);
    var $mdgriffith$elm_codegen$Internal$Write$toHexString = function (val) {
        var padWithZeros = function (str) {
            var length = $elm$core$String$length(str);
            return (length < 2) ? $elm$core$String$padLeft_fn(2, "0", str) : (((length > 2) && (length < 4)) ? $elm$core$String$padLeft_fn(4, "0", str) : (((length > 4) && (length < 8)) ? $elm$core$String$padLeft_fn(8, "0", str) : str));
        };
        return "0x" + padWithZeros($elm$core$String$toUpper($rtfeldman$elm_hex$Hex$toString(val)));
    };
    var $mdgriffith$elm_codegen$Internal$Write$topContext = { ab: false, ac: true, o: 11 };
    var $elm$core$List$unzip = function (pairs) {
        var aHead = _List_Cons(undefined, _List_Nil);
        var bHead = _List_Cons(undefined, _List_Nil);
        var aEnd = aHead;
        var bEnd = bHead;
        for (; pairs.b; pairs = pairs.b) {
            var tuple = pairs.a;
            var aNext = _List_Cons(tuple.a, _List_Nil);
            aEnd.b = aNext;
            aEnd = aNext;
            var bNext = _List_Cons(tuple.b, _List_Nil);
            bEnd.b = bNext;
            bEnd = bNext;
        }
        return _Utils_Tuple2(aHead.b, bHead.
            b);
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyApplication_fn = function (aliases, indent, exprs) {
        var _v30 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip($elm$core$List$map_fn(A3($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, { ab: false, ac: false, o: 11 }, 4), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, exprs))));
        var prettyExpressions = _v30.a;
        var alwaysBreak = _v30.b;
        return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, prettyExpressions)))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyApplication = F3($mdgriffith$elm_codegen$Internal$Write$prettyApplication_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock_fn = function (aliases, indent, caseBlock) {
        var prettyCase = function (_v29) {
            var pattern = _v29.a;
            var expr = _v29.b;
            return $the_sett$elm_pretty_printer$Pretty$indent_fn(indent, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$indent_fn(4, $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)).a), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(" ->"), $mdgriffith$elm_codegen$Internal$Write$prettyPattern_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern))))));
        };
        var patternsPart = $the_sett$elm_pretty_printer$Pretty$join_fn($mdgriffith$elm_codegen$Internal$Write$doubleLines_a0, $elm$core$List$map_fn(prettyCase, caseBlock.y));
        var casePart = function () {
            var _v28 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(caseBlock.c));
            var caseExpression = _v28.a;
            var alwaysBreak = _v28.b;
            return $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
                $the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
                    $the_sett$elm_pretty_printer$Pretty$string("case"),
                    caseExpression
                ])))),
                $the_sett$elm_pretty_printer$Pretty$string("of")
            ])));
        }();
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([casePart, patternsPart]))), true);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock = F3($mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyExpression_fn = function (aliases, expression) {
        return $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, expression).a;
    }, $mdgriffith$elm_codegen$Internal$Write$prettyExpression = F2($mdgriffith$elm_codegen$Internal$Write$prettyExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn = function (aliases, context, indent, expression) {
        var _v26 = $mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses_fn(context, expression);
        switch (_v26.$) {
            case 0:
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("()"), false);
            case 1:
                var exprs = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyApplication_fn(aliases, indent, exprs);
            case 2:
                var symbol = _v26.a;
                var dir = _v26.b;
                var exprl = _v26.c;
                var exprr = _v26.d;
                return $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication_fn(aliases, indent, symbol, dir, exprl, exprr);
            case 3:
                var modl = _v26.a;
                var val = _v26.b;
                return _Utils_Tuple2($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(val), $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot_fn(aliases, modl)), false);
            case 4:
                var exprBool = _v26.a;
                var exprTrue = _v26.b;
                var exprFalse = _v26.c;
                return $mdgriffith$elm_codegen$Internal$Write$prettyIfBlock_fn(aliases, indent, exprBool, exprTrue, exprFalse);
            case 5:
                var symbol = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string(symbol)), false);
            case 6:
                var symbol = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string(symbol), false);
            case 7:
                var val = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(val)), false);
            case 8:
                var val = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Write$toHexString(val)), false);
            case 9:
                var val = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(val)), false);
            case 10:
                var expr = _v26.a;
                var _v27 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
                var prettyExpr = _v27.a;
                var alwaysBreak = _v27.b;
                return _Utils_Tuple2($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, prettyExpr, $the_sett$elm_pretty_printer$Pretty$string("-")), alwaysBreak);
            case 11:
                var val = _v26.a;
                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$prettyLiteral(val), false);
            case 12:
                var val = _v26.a;
                return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$singleQuotes($the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Write$escapeChar(val))), false);
            case 13:
                var exprs = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression_fn(aliases, indent, exprs);
            case 14:
                var expr = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression_fn(aliases, indent, expr);
            case 15:
                var letBlock = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyLetBlock_fn(aliases, indent, letBlock);
            case 16:
                var caseBlock = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock_fn(aliases, indent, caseBlock);
            case 17:
                var lambda = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression_fn(aliases, indent, lambda);
            case 18:
                var setters = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr_fn(aliases, setters);
            case 19:
                var exprs = _v26.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyList_fn(aliases, indent, exprs);
            case 20:
                var expr = _v26.a;
                var field = _v26.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess_fn(aliases, expr, field);
            case 21:
                var field = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string(field), false);
            case 22:
                var _var = _v26.a;
                var setters = _v26.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression_fn(aliases, indent, _var, setters);
            default:
                var val = _v26.a;
                return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("glsl"), true);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner = F4($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyFun_fn = function (aliases, fn) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettyDocumentation, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, fn.a6)),
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettySignature(aliases), $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, fn.hK)),
            $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(fn.gL))
        ]));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyFun = F2($mdgriffith$elm_codegen$Internal$Write$prettyFun_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation_fn = function (aliases, impl) {
        return $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$prettyExpression_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(impl.c)), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(impl.r)),
            $mdgriffith$elm_codegen$Internal$Write$prettyArgs_fn(aliases, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, impl.a3)),
            $the_sett$elm_pretty_printer$Pretty$string("=")
        ])))));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation = F2($mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyIfBlock_fn = function (aliases, indent, exprBool, exprTrue, exprFalse) {
        var innerIfBlock = F3(function (innerExprBool, innerExprTrue, innerExprFalse) {
            var truePart = $the_sett$elm_pretty_printer$Pretty$indent_fn(indent, $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprTrue)).a);
            var ifPart = function () {
                var _v25 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool));
                var prettyBoolExpr = _v25.a;
                var alwaysBreak = _v25.b;
                return $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
                    $the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$string("if"),
                        $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool)).a
                    ])))),
                    $the_sett$elm_pretty_printer$Pretty$string("then")
                ])));
            }();
            var falsePart = function () {
                var _v24 = $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse);
                if (_v24.$ === 4) {
                    var nestedExprBool = _v24.a;
                    var nestedExprTrue = _v24.b;
                    var nestedExprFalse = _v24.c;
                    return A3(innerIfBlock, nestedExprBool, nestedExprTrue, nestedExprFalse);
                }
                else {
                    return _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$indent_fn(indent, $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse)).a)
                    ]);
                }
            }();
            var elsePart = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("else"), $the_sett$elm_pretty_printer$Pretty$line);
            var context = $mdgriffith$elm_codegen$Internal$Write$topContext;
            if (!falsePart.b) {
                return _List_Nil;
            }
            else {
                if (!falsePart.b.b) {
                    var falseExpr = falsePart.a;
                    return _List_fromArray([ifPart, truePart, elsePart, falseExpr]);
                }
                else {
                    var hd = falsePart.a;
                    var tl = falsePart.b;
                    return $elm$core$List$append_fn(_List_fromArray([
                        ifPart,
                        truePart,
                        $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([elsePart, hd]))
                    ]), tl);
                }
            }
        });
        var prettyExpressions = A3(innerIfBlock, exprBool, exprTrue, exprFalse);
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, prettyExpressions)), true);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyIfBlock = F5($mdgriffith$elm_codegen$Internal$Write$prettyIfBlock_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression_fn = function (aliases, indent, lambda) {
        var _v22 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(lambda.c));
        var prettyExpr = _v22.a;
        var alwaysBreak = _v22.b;
        return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(" ->"), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, lambda.T))), $the_sett$elm_pretty_printer$Pretty$string("\\"))),
            prettyExpr
        ]))))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression = F3($mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyLetBlock_fn = function (aliases, indent, letBlock) {
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("let"),
            $the_sett$elm_pretty_printer$Pretty$indent_fn(indent, $the_sett$elm_pretty_printer$Pretty$join_fn($mdgriffith$elm_codegen$Internal$Write$doubleLines_a0, $elm$core$List$map_fn(A2($mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration, aliases, indent), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, letBlock.as)))),
            $the_sett$elm_pretty_printer$Pretty$string("in"),
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(letBlock.c)).a
        ]))), true);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyLetBlock = F3($mdgriffith$elm_codegen$Internal$Write$prettyLetBlock_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration_fn = function (aliases, indent, letDecl) {
        if (!letDecl.$) {
            var fn = letDecl.a;
            return $mdgriffith$elm_codegen$Internal$Write$prettyFun_fn(aliases, fn);
        }
        else {
            var pattern = letDecl.a;
            var expr = letDecl.b;
            return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$indent_fn(indent, $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)).a), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner_fn(aliases, false, $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern)),
                $the_sett$elm_pretty_printer$Pretty$string("=")
            ]))));
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration = F3($mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyList_fn = function (aliases, indent, exprs) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("["));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("]"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!exprs.b) {
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("[]"), false);
        }
        else {
            var _v20 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip($elm$core$List$map_fn(A3($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, $mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn(indent, 2)), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, exprs))));
            var prettyExpressions = _v20.a;
            var alwaysBreak = _v20.b;
            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyList = F3($mdgriffith$elm_codegen$Internal$Write$prettyList_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication_fn = function (aliases, indent, symbol, dir, exprl, exprr) {
        return (symbol === "<|") ? $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft_fn(aliases, indent, symbol, dir, exprl, exprr) : $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight_fn(aliases, indent, symbol, dir, exprl, exprr);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication = F6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft_fn = function (aliases, indent, symbol, _v16, exprl, exprr) {
        var context = {
            ab: true,
            ac: false,
            o: $mdgriffith$elm_codegen$Internal$Write$precedence(symbol)
        };
        var _v17 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, context, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(exprr));
        var prettyExpressionRight = _v17.a;
        var alwaysBreakRight = _v17.b;
        var _v18 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, context, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(exprl));
        var prettyExpressionLeft = _v18.a;
        var alwaysBreakLeft = _v18.b;
        var alwaysBreak = alwaysBreakLeft || alwaysBreakRight;
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$nest_fn(4, $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                prettyExpressionLeft,
                $the_sett$elm_pretty_printer$Pretty$string(symbol)
            ])),
            prettyExpressionRight
        ])))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft = F6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight_fn = function (aliases, indent, symbol, _v11, exprl, exprr) {
        var expandExpr = F3(function (innerIndent, context, expr) {
            if (expr.$ === 2) {
                var sym = expr.a;
                var left = expr.c;
                var right = expr.d;
                return A4(innerOpApply, false, sym, left, right);
            }
            else {
                return _List_fromArray([
                    $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, context, innerIndent, expr)
                ]);
            }
        });
        var innerOpApply = F4(function (isTop, sym, left, right) {
            var innerIndent = $mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn(4, $elm$core$String$length(symbol) + 1);
            var leftIndent = isTop ? indent : innerIndent;
            var context = {
                ab: "<|" === sym,
                ac: false,
                o: $mdgriffith$elm_codegen$Internal$Write$precedence(sym)
            };
            var rightSide = A3(expandExpr, innerIndent, context, $mdgriffith$elm_codegen$Internal$Compiler$denode(right));
            if (rightSide.b) {
                var _v14 = rightSide.a;
                var hdExpr = _v14.a;
                var hdBreak = _v14.b;
                var tl = rightSide.b;
                return $elm$core$List$append_fn(A3(expandExpr, leftIndent, context, $mdgriffith$elm_codegen$Internal$Compiler$denode(left)), _List_Cons(_Utils_Tuple2($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, hdExpr, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string(sym))), hdBreak), tl));
            }
            else {
                return _List_Nil;
            }
        });
        var _v12 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip(A4(innerOpApply, true, symbol, exprl, exprr)));
        var prettyExpressions = _v12.a;
        var alwaysBreak = _v12.b;
        return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $the_sett$elm_pretty_printer$Pretty$line), prettyExpressions))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight = F6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression_fn = function (aliases, indent, expr) {
        var open = $the_sett$elm_pretty_printer$Pretty$string("(");
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(")"), $the_sett$elm_pretty_printer$Pretty$tightline);
        var _v10 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, $mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn(indent, 1), $mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
        var prettyExpr = _v10.a;
        var alwaysBreak = _v10.b;
        return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, $the_sett$elm_pretty_printer$Pretty$nest_fn(1, prettyExpr)))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression = F3($mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess_fn = function (aliases, expr, field) {
        var _v9 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
        var prettyExpr = _v9.a;
        var alwaysBreak = _v9.b;
        return _Utils_Tuple2($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(field)), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$dot, prettyExpr)), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess = F3($mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr_fn = function (aliases, setters) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("{"));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!setters.b) {
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("{}"), false);
        }
        else {
            var _v8 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, setters))));
            var prettyExpressions = _v8.a;
            var alwaysBreak = _v8.b;
            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr = F2($mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression_fn = function (aliases, indent, _var, setters) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("{"),
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(_var))
        ])));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("}"), $the_sett$elm_pretty_printer$Pretty$line);
        var addBarToFirst = function (exprs) {
            if (!exprs.b) {
                return _List_Nil;
            }
            else {
                var hd = exprs.a;
                var tl = exprs.b;
                return _List_Cons($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, hd, $the_sett$elm_pretty_printer$Pretty$string("| ")), tl);
            }
        };
        if (!setters.b) {
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("{}"), false);
        }
        else {
            var _v5 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, setters))));
            var prettyExpressions = _v5.a;
            var alwaysBreak = _v5.b;
            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$surround_fn($the_sett$elm_pretty_printer$Pretty$empty, close, $the_sett$elm_pretty_printer$Pretty$nest_fn(indent, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", addBarToFirst(prettyExpressions)), open))))), alwaysBreak);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression = F4($mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettySetter_fn = function (aliases, _v2) {
        var fld = _v2.a;
        var val = _v2.b;
        var _v3 = $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner_fn(aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, $mdgriffith$elm_codegen$Internal$Compiler$denode(val));
        var prettyExpr = _v3.a;
        var alwaysBreak = _v3.b;
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$nest_fn(4, $mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(fld)),
                $the_sett$elm_pretty_printer$Pretty$string("=")
            ])),
            prettyExpr
        ])))), alwaysBreak);
    }, $mdgriffith$elm_codegen$Internal$Write$prettySetter = F2($mdgriffith$elm_codegen$Internal$Write$prettySetter_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression_fn = function (aliases, indent, exprs) {
        var open = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string("("));
        var close = $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string(")"), $the_sett$elm_pretty_printer$Pretty$line);
        if (!exprs.b) {
            return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$string("()"), false);
        }
        else {
            var _v1 = $elm$core$Tuple$mapSecond_fn($elm$core$List$any($elm$core$Basics$identity), $elm$core$List$unzip($elm$core$List$map_fn(A3($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, $mdgriffith$elm_codegen$Internal$Write$decrementIndent_fn(indent, 2)), $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, exprs))));
            var prettyExpressions = _v1.a;
            var alwaysBreak = _v1.b;
            return _Utils_Tuple2($mdgriffith$elm_codegen$Internal$Write$optionalGroup_fn(alwaysBreak, $the_sett$elm_pretty_printer$Pretty$align($the_sett$elm_pretty_printer$Pretty$surround_fn(open, close, A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)))), alwaysBreak);
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression = F3($mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring_fn = function (aliases, pattern, expr) {
        return $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                $mdgriffith$elm_codegen$Internal$Write$prettyPattern_fn(aliases, pattern),
                $the_sett$elm_pretty_printer$Pretty$string("=")
            ])),
            $mdgriffith$elm_codegen$Internal$Write$prettyExpression_fn(aliases, expr)
        ])));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring = F3($mdgriffith$elm_codegen$Internal$Write$prettyDestructuring_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyInfix = function (infix_) {
        var dirToString = function (direction) {
            switch (direction) {
                case 0:
                    return "left";
                case 1:
                    return "right";
                default:
                    return "non";
            }
        };
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("infix"),
            $the_sett$elm_pretty_printer$Pretty$string(dirToString($mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.k))),
            $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt($mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.o))),
            $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.n))),
            $the_sett$elm_pretty_printer$Pretty$string("="),
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.l))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration_fn = function (aliases, sig) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("port"),
            $mdgriffith$elm_codegen$Internal$Write$prettySignature_fn(aliases, sig)
        ]));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration = F2($mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias_fn = function (aliases, tAlias) {
        var typeAliasPretty = $the_sett$elm_pretty_printer$Pretty$nest_fn(4, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.a$)), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("type alias"),
            $the_sett$elm_pretty_printer$Pretty$string($mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.r)),
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeAll_a0, tAlias.c3))),
            $the_sett$elm_pretty_printer$Pretty$string("=")
        ])))));
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, _List_fromArray([
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($mdgriffith$elm_codegen$Internal$Write$prettyDocumentation, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, tAlias.a6)),
            typeAliasPretty
        ]));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias = F2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration_fn = function (aliases, decl) {
        switch (decl.$) {
            case 0:
                var fn = decl.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyFun_fn(aliases, fn);
            case 1:
                var tAlias = decl.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias_fn(aliases, tAlias);
            case 2:
                var type_ = decl.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyCustomType_fn(aliases, type_);
            case 3:
                var sig = decl.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration_fn(aliases, sig);
            case 4:
                var infix_ = decl.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyInfix(infix_);
            default:
                var pattern = decl.a;
                var expr = decl.b;
                return $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring_fn(aliases, $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern), $mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
        }
    }, $mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration = F2($mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyDeclarations_fn = function (aliases, decls) {
        return $elm$core$List$foldl_fn($elm$core$Basics$apL, $the_sett$elm_pretty_printer$Pretty$empty, $elm$core$Basics$composeR_fn($elm$core$List$reverse, A2($elm$core$Basics$composeR, $elm$core$List$drop(1), $elm$core$List$reverse), $elm$core$List$concatMap_fn(function (decl) {
            switch (decl.$) {
                case 1:
                    var content = decl.a;
                    return _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$string(content + "\n")),
                        A2($elm$core$Basics$composeR, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line), $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line))
                    ]);
                case 2:
                    var source = decl.a;
                    return _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$string(source)),
                        A2($elm$core$Basics$composeR, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line), A2($elm$core$Basics$composeR, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line), $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)))
                    ]);
                default:
                    var innerDecl = decl.a;
                    return _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$a($mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration_fn(aliases, innerDecl)),
                        A2($elm$core$Basics$composeR, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line), A2($elm$core$Basics$composeR, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line), $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)))
                    ]);
            }
        }, decls)));
    }, $mdgriffith$elm_codegen$Internal$Write$prettyDeclarations = F2($mdgriffith$elm_codegen$Internal$Write$prettyDeclarations_fn);
    var $mdgriffith$elm_codegen$Internal$Comments$delimeters = function (doc) {
        return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$string("-}"), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, doc, $the_sett$elm_pretty_printer$Pretty$string("{-| "))));
    };
    var $mdgriffith$elm_codegen$Internal$Comments$getParts = function (_v0) {
        var parts = _v0;
        return $elm$core$List$reverse(parts);
    };
    var $mdgriffith$elm_codegen$Internal$Comments$DocTags = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Comments$fitAndSplit_fn = function (width, tags) {
        if (!tags.b) {
            return _List_Nil;
        }
        else {
            var t = tags.a;
            var ts = tags.b;
            var _v1 = $elm$core$List$foldl_fn_unwrapped(function (tag, _v2) {
                var allSplits = _v2.a;
                var curSplit = _v2.b;
                var remaining = _v2.c;
                return (_Utils_cmp($elm$core$String$length(tag), remaining) < 1) ? _Utils_Tuple3(allSplits, _List_Cons(tag, curSplit), remaining - $elm$core$String$length(tag)) : _Utils_Tuple3(_Utils_ap(allSplits, _List_fromArray([
                    $elm$core$List$reverse(curSplit)
                ])), _List_fromArray([tag]), width - $elm$core$String$length(tag));
            }, _Utils_Tuple3(_List_Nil, _List_fromArray([t]), width - $elm$core$String$length(t)), ts);
            var splitsExceptLast = _v1.a;
            var lastSplit = _v1.b;
            return _Utils_ap(splitsExceptLast, _List_fromArray([
                $elm$core$List$reverse(lastSplit)
            ]));
        }
    }, $mdgriffith$elm_codegen$Internal$Comments$fitAndSplit = F2($mdgriffith$elm_codegen$Internal$Comments$fitAndSplit_fn);
    var $elm$core$List$sort = function (xs) {
        return _List_sortBy_fn($elm$core$Basics$identity, xs);
    };
    var $mdgriffith$elm_codegen$Internal$Comments$mergeDocTags = function (innerParts) {
        var _v0 = $elm$core$List$foldr_fn(F2(function (part, _v1) {
            var accum = _v1.a;
            var context = _v1.b;
            if (context.$ === 1) {
                if (part.$ === 2) {
                    var tags = part.a;
                    return _Utils_Tuple2(accum, $elm$core$Maybe$Just(tags));
                }
                else {
                    var otherPart = part;
                    return _Utils_Tuple2(_List_Cons(otherPart, accum), $elm$core$Maybe$Nothing);
                }
            }
            else {
                var contextTags = context.a;
                if (part.$ === 2) {
                    var tags = part.a;
                    return _Utils_Tuple2(accum, $elm$core$Maybe$Just(_Utils_ap(contextTags, tags)));
                }
                else {
                    var otherPart = part;
                    return _Utils_Tuple2(_List_Cons(otherPart, _List_Cons($mdgriffith$elm_codegen$Internal$Comments$DocTags($elm$core$List$sort(contextTags)), accum)), $elm$core$Maybe$Nothing);
                }
            }
        }), _Utils_Tuple2(_List_Nil, $elm$core$Maybe$Nothing), innerParts);
        var partsExceptMaybeFirst = _v0.a;
        var maybeFirstPart = _v0.b;
        if (maybeFirstPart.$ === 1) {
            return partsExceptMaybeFirst;
        }
        else {
            var tags = maybeFirstPart.a;
            return _List_Cons($mdgriffith$elm_codegen$Internal$Comments$DocTags($elm$core$List$sort(tags)), partsExceptMaybeFirst);
        }
    };
    var $mdgriffith$elm_codegen$Internal$Comments$layoutTags_fn = function (width, parts) {
        return $elm$core$List$foldr_fn(F2(function (part, _v0) {
            var accumParts = _v0.a;
            var accumDocTags = _v0.b;
            if (part.$ === 2) {
                var tags = part.a;
                var splits = $mdgriffith$elm_codegen$Internal$Comments$fitAndSplit_fn(width, tags);
                return _Utils_Tuple2(_Utils_ap($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Comments$DocTags, splits), accumParts), _Utils_ap(accumDocTags, splits));
            }
            else {
                var otherPart = part;
                return _Utils_Tuple2(_List_Cons(otherPart, accumParts), accumDocTags);
            }
        }), _Utils_Tuple2(_List_Nil, _List_Nil), $mdgriffith$elm_codegen$Internal$Comments$mergeDocTags(parts));
    }, $mdgriffith$elm_codegen$Internal$Comments$layoutTags = F2($mdgriffith$elm_codegen$Internal$Comments$layoutTags_fn);
    var $the_sett$elm_pretty_printer$Internals$NLine_fn = function (a, b, c) {
        return { $: 2, a: a, b: b, c: c };
    }, $the_sett$elm_pretty_printer$Internals$NLine = F3($the_sett$elm_pretty_printer$Internals$NLine_fn);
    var $the_sett$elm_pretty_printer$Internals$NNil = { $: 0 };
    var $the_sett$elm_pretty_printer$Internals$NText_fn = function (a, b, c) {
        return { $: 1, a: a, b: b, c: c };
    }, $the_sett$elm_pretty_printer$Internals$NText = F3($the_sett$elm_pretty_printer$Internals$NText_fn);
    var $the_sett$elm_pretty_printer$Internals$fits_fn = function (w, normal) {
        fits: while (true) {
            if (w < 0) {
                return false;
            }
            else {
                switch (normal.$) {
                    case 0:
                        return true;
                    case 1:
                        var text = normal.a;
                        var innerNormal = normal.b;
                        var $temp$w = w - $elm$core$String$length(text), $temp$normal = innerNormal(0);
                        w = $temp$w;
                        normal = $temp$normal;
                        continue fits;
                    default:
                        return true;
                }
            }
        }
    }, $the_sett$elm_pretty_printer$Internals$fits = F2($the_sett$elm_pretty_printer$Internals$fits_fn);
    var $the_sett$elm_pretty_printer$Internals$better_fn = function (w, k, doc, doc2Fn) {
        return $the_sett$elm_pretty_printer$Internals$fits_fn(w - k, doc) ? doc : doc2Fn(0);
    }, $the_sett$elm_pretty_printer$Internals$better = F4($the_sett$elm_pretty_printer$Internals$better_fn);
    var $the_sett$elm_pretty_printer$Internals$best_fn = function (width, startCol, x) {
        var be = F3(function (w, k, docs) {
            be: while (true) {
                if (!docs.b) {
                    return $the_sett$elm_pretty_printer$Internals$NNil;
                }
                else {
                    switch (docs.a.b.$) {
                        case 0:
                            var _v1 = docs.a;
                            var i = _v1.a;
                            var _v2 = _v1.b;
                            var ds = docs.b;
                            var $temp$w = w, $temp$k = k, $temp$docs = ds;
                            w = $temp$w;
                            k = $temp$k;
                            docs = $temp$docs;
                            continue be;
                        case 1:
                            var _v3 = docs.a;
                            var i = _v3.a;
                            var _v4 = _v3.b;
                            var doc = _v4.a;
                            var doc2 = _v4.b;
                            var ds = docs.b;
                            var $temp$w = w, $temp$k = k, $temp$docs = _List_Cons(_Utils_Tuple2(i, doc(0)), _List_Cons(_Utils_Tuple2(i, doc2(0)), ds));
                            w = $temp$w;
                            k = $temp$k;
                            docs = $temp$docs;
                            continue be;
                        case 2:
                            var _v5 = docs.a;
                            var i = _v5.a;
                            var _v6 = _v5.b;
                            var j = _v6.a;
                            var doc = _v6.b;
                            var ds = docs.b;
                            var $temp$w = w, $temp$k = k, $temp$docs = _List_Cons(_Utils_Tuple2(i + j, doc(0)), ds);
                            w = $temp$w;
                            k = $temp$k;
                            docs = $temp$docs;
                            continue be;
                        case 3:
                            var _v7 = docs.a;
                            var i = _v7.a;
                            var _v8 = _v7.b;
                            var text = _v8.a;
                            var maybeTag = _v8.b;
                            var ds = docs.b;
                            return $the_sett$elm_pretty_printer$Internals$NText_fn(text, function (_v9) {
                                return A3(be, w, k + $elm$core$String$length(text), ds);
                            }, maybeTag);
                        case 4:
                            var _v10 = docs.a;
                            var i = _v10.a;
                            var _v11 = _v10.b;
                            var vsep = _v11.b;
                            var ds = docs.b;
                            return $the_sett$elm_pretty_printer$Internals$NLine_fn(i, vsep, function (_v12) {
                                return A3(be, w, i + $elm$core$String$length(vsep), ds);
                            });
                        case 5:
                            var _v13 = docs.a;
                            var i = _v13.a;
                            var _v14 = _v13.b;
                            var doc = _v14.a;
                            var doc2 = _v14.b;
                            var ds = docs.b;
                            return $the_sett$elm_pretty_printer$Internals$better_fn(w, k, A3(be, w, k, _List_Cons(_Utils_Tuple2(i, doc), ds)), function (_v15) {
                                return A3(be, w, k, _List_Cons(_Utils_Tuple2(i, doc2), ds));
                            });
                        case 6:
                            var _v16 = docs.a;
                            var i = _v16.a;
                            var fn = _v16.b.a;
                            var ds = docs.b;
                            var $temp$w = w, $temp$k = k, $temp$docs = _List_Cons(_Utils_Tuple2(i, fn(i)), ds);
                            w = $temp$w;
                            k = $temp$k;
                            docs = $temp$docs;
                            continue be;
                        default:
                            var _v17 = docs.a;
                            var i = _v17.a;
                            var fn = _v17.b.a;
                            var ds = docs.b;
                            var $temp$w = w, $temp$k = k, $temp$docs = _List_Cons(_Utils_Tuple2(i, fn(k)), ds);
                            w = $temp$w;
                            k = $temp$k;
                            docs = $temp$docs;
                            continue be;
                    }
                }
            }
        });
        return A3(be, width, startCol, _List_fromArray([
            _Utils_Tuple2(0, x)
        ]));
    }, $the_sett$elm_pretty_printer$Internals$best = F3($the_sett$elm_pretty_printer$Internals$best_fn);
    var $the_sett$elm_pretty_printer$Internals$layout = function (normal) {
        var layoutInner = F2(function (normal2, acc) {
            layoutInner: while (true) {
                switch (normal2.$) {
                    case 0:
                        return acc;
                    case 1:
                        var text = normal2.a;
                        var innerNormal = normal2.b;
                        var maybeTag = normal2.c;
                        var $temp$normal2 = innerNormal(0), $temp$acc = _List_Cons(text, acc);
                        normal2 = $temp$normal2;
                        acc = $temp$acc;
                        continue layoutInner;
                    default:
                        var i = normal2.a;
                        var sep = normal2.b;
                        var innerNormal = normal2.c;
                        var norm = innerNormal(0);
                        if (norm.$ === 2) {
                            var $temp$normal2 = innerNormal(0), $temp$acc = _List_Cons("\n" + sep, acc);
                            normal2 = $temp$normal2;
                            acc = $temp$acc;
                            continue layoutInner;
                        }
                        else {
                            var $temp$normal2 = innerNormal(0), $temp$acc = _List_Cons("\n" + ($the_sett$elm_pretty_printer$Internals$copy_fn(i, " ") + sep), acc);
                            normal2 = $temp$normal2;
                            acc = $temp$acc;
                            continue layoutInner;
                        }
                }
            }
        });
        return $elm$core$String$concat($elm$core$List$reverse(A2(layoutInner, normal, _List_Nil)));
    };
    var $the_sett$elm_pretty_printer$Pretty$pretty_fn = function (w, doc) {
        return $the_sett$elm_pretty_printer$Internals$layout($the_sett$elm_pretty_printer$Internals$best_fn(w, 0, doc));
    }, $the_sett$elm_pretty_printer$Pretty$pretty = F2($the_sett$elm_pretty_printer$Pretty$pretty_fn);
    var $mdgriffith$elm_codegen$Internal$Comments$prettyCode = function (val) {
        return $the_sett$elm_pretty_printer$Pretty$indent_fn(4, $the_sett$elm_pretty_printer$Pretty$string(val));
    };
    var $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown = function (val) {
        return $the_sett$elm_pretty_printer$Pretty$string(val);
    };
    var $mdgriffith$elm_codegen$Internal$Comments$prettyTags = function (tags) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("@docs"),
            $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$string(", "), $elm$core$List$map_fn($the_sett$elm_pretty_printer$Pretty$string, tags))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart = function (part) {
        switch (part.$) {
            case 0:
                var val = part.a;
                return $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown(val);
            case 1:
                var val = part.a;
                return $mdgriffith$elm_codegen$Internal$Comments$prettyCode(val);
            default:
                var tags = part.a;
                return $mdgriffith$elm_codegen$Internal$Comments$prettyTags(tags);
        }
    };
    var $mdgriffith$elm_codegen$Internal$Comments$prettyFileComment_fn = function (width, comment) {
        var _v0 = $mdgriffith$elm_codegen$Internal$Comments$layoutTags_fn(width, $mdgriffith$elm_codegen$Internal$Comments$getParts(comment));
        var parts = _v0.a;
        var splits = _v0.b;
        return _Utils_Tuple2($the_sett$elm_pretty_printer$Pretty$pretty_fn(width, $mdgriffith$elm_codegen$Internal$Comments$delimeters($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$lines_a0, $elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart, parts)))), splits);
    }, $mdgriffith$elm_codegen$Internal$Comments$prettyFileComment = F2($mdgriffith$elm_codegen$Internal$Comments$prettyFileComment_fn);
    var $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData = function (moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("module"),
            $mdgriffith$elm_codegen$Internal$Write$prettyModuleName($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ec)),
            $mdgriffith$elm_codegen$Internal$Write$prettyExposing($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.cF))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData = function (moduleData) {
        var prettyCmdAndSub = F2(function (maybeCmd, maybeSub) {
            var _v0 = _Utils_Tuple2(maybeCmd, maybeSub);
            if (!_v0.a.$) {
                if (!_v0.b.$) {
                    var cmdName = _v0.a.a;
                    var subName = _v0.b.a;
                    return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$string("where { command ="),
                        $the_sett$elm_pretty_printer$Pretty$string(cmdName),
                        $the_sett$elm_pretty_printer$Pretty$string(","),
                        $the_sett$elm_pretty_printer$Pretty$string("subscription ="),
                        $the_sett$elm_pretty_printer$Pretty$string(subName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                    ])));
                }
                else {
                    var cmdName = _v0.a.a;
                    var _v3 = _v0.b;
                    return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$string("where { command ="),
                        $the_sett$elm_pretty_printer$Pretty$string(cmdName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                    ])));
                }
            }
            else {
                if (_v0.b.$ === 1) {
                    var _v1 = _v0.a;
                    var _v2 = _v0.b;
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var _v4 = _v0.a;
                    var subName = _v0.b.a;
                    return $elm$core$Maybe$Just($the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
                        $the_sett$elm_pretty_printer$Pretty$string("where { subscription ="),
                        $the_sett$elm_pretty_printer$Pretty$string(subName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                    ])));
                }
            }
        });
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("effect module"),
            $mdgriffith$elm_codegen$Internal$Write$prettyModuleName($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ec)),
            $mdgriffith$elm_codegen$Internal$Write$prettyMaybe_fn($elm$core$Basics$identity, A2(prettyCmdAndSub, $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, moduleData.gH), $elm$core$Maybe$map_fn($mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe_a0, moduleData.hQ))),
            $mdgriffith$elm_codegen$Internal$Write$prettyExposing($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.cF))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData = function (moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$join_fn($the_sett$elm_pretty_printer$Pretty$words_a0, _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("port module"),
            $mdgriffith$elm_codegen$Internal$Write$prettyModuleName($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ec)),
            $mdgriffith$elm_codegen$Internal$Write$prettyExposing($mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.cF))
        ]));
    };
    var $mdgriffith$elm_codegen$Internal$Write$prettyModule = function (mod) {
        switch (mod.$) {
            case 0:
                var defaultModuleData = mod.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData(defaultModuleData);
            case 1:
                var defaultModuleData = mod.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData(defaultModuleData);
            default:
                var effectModuleData = mod.a;
                return $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData(effectModuleData);
        }
    };
    var $mdgriffith$elm_codegen$Internal$Write$prepareLayout_fn = function (width, file) {
        return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$prettyDeclarations_fn(file.a1, file.as), $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$importsPretty(file.d), function (doc) {
            var _v0 = file.gI;
            if (_v0.$ === 1) {
                return doc;
            }
            else {
                var fileComment = _v0.a;
                var _v1 = $mdgriffith$elm_codegen$Internal$Comments$prettyFileComment_fn(width, fileComment);
                var fileCommentStr = _v1.a;
                var innerTags = _v1.b;
                return $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $mdgriffith$elm_codegen$Internal$Write$prettyComments(_List_fromArray([fileCommentStr])), doc));
            }
        }($elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $elm_community$basics_extra$Basics$Extra$flip_fn($the_sett$elm_pretty_printer$Pretty$a_a0, $the_sett$elm_pretty_printer$Pretty$line, $mdgriffith$elm_codegen$Internal$Write$prettyModule(file.eb))))));
    }, $mdgriffith$elm_codegen$Internal$Write$prepareLayout = F2($mdgriffith$elm_codegen$Internal$Write$prepareLayout_fn);
    var $mdgriffith$elm_codegen$Internal$Write$pretty_fn = function (width, file) {
        return $the_sett$elm_pretty_printer$Pretty$pretty_fn(width, $mdgriffith$elm_codegen$Internal$Write$prepareLayout_fn(width, file));
    }, $mdgriffith$elm_codegen$Internal$Write$pretty = F2($mdgriffith$elm_codegen$Internal$Write$pretty_fn);
    var $mdgriffith$elm_codegen$Internal$Write$write_a0 = 80, $mdgriffith$elm_codegen$Internal$Write$write = $mdgriffith$elm_codegen$Internal$Write$pretty($mdgriffith$elm_codegen$Internal$Write$write_a0);
    var $mdgriffith$elm_codegen$Internal$Render$render_fn = function (toDocComment, fileDetails) {
        var rendered = $elm$core$List$foldl_fn_unwrapped(function (decl, gathered) {
            switch (decl.$) {
                case 1:
                    var comm = decl.a;
                    return _Utils_update(gathered, {
                        as: _List_Cons($mdgriffith$elm_codegen$Internal$Compiler$RenderedComment(comm), gathered.as)
                    });
                case 2:
                    var block = decl.a;
                    return _Utils_update(gathered, {
                        as: _List_Cons($mdgriffith$elm_codegen$Internal$Compiler$RenderedBlock(block), gathered.as)
                    });
                default:
                    var decDetails = decl.a;
                    var result = decDetails.ap(fileDetails.e);
                    return {
                        as: _List_Cons($mdgriffith$elm_codegen$Internal$Compiler$RenderedDecl($mdgriffith$elm_codegen$Internal$Render$addDocs_fn(decDetails.a5, result.gL)), gathered.as),
                        aj: $mdgriffith$elm_codegen$Internal$Render$addExposed_fn(decDetails.aj, result.gL, gathered.aj),
                        ak: function () {
                            var _v5 = decDetails.aj;
                            if (!_v5.$) {
                                return gathered.ak;
                            }
                            else {
                                var details = _v5.a;
                                return _List_Cons(_Utils_Tuple2(details.av, decDetails.r), gathered.ak);
                            }
                        }(),
                        aw: function () {
                            if (gathered.aw) {
                                return gathered.aw;
                            }
                            else {
                                var _v6 = result.gL;
                                if (_v6.$ === 3) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        }(),
                        d: _Utils_ap(result.ah, _Utils_ap(decDetails.d, gathered.d)),
                        go: function () {
                            var _v7 = result.h4;
                            if (_v7.$ === 1) {
                                return gathered.go;
                            }
                            else {
                                var warn = _v7.a;
                                return _List_Cons(warn, gathered.go);
                            }
                        }()
                    };
            }
        }, { as: _List_Nil, aj: _List_Nil, ak: _List_Nil, aw: false, d: _List_Nil, go: _List_Nil }, fileDetails.as);
        var body = $mdgriffith$elm_codegen$Internal$Write$pretty_fn($mdgriffith$elm_codegen$Internal$Write$write_a0, {
            a1: fileDetails.a1,
            gI: function () {
                var _v0 = rendered.ak;
                if (!_v0.b) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Comments$addPart_fn($mdgriffith$elm_codegen$Internal$Comments$emptyComment, $mdgriffith$elm_codegen$Internal$Comments$Markdown("\n" + $elm$core$String$join_fn("\n\n", toDocComment($mdgriffith$elm_codegen$Internal$Render$groupExposing(_List_sortBy_fn(function (_v1) {
                        var group = _v1.a;
                        if (group.$ === 1) {
                            return "zzzzzzzzz";
                        }
                        else {
                            var name = group.a;
                            return name;
                        }
                    }, rendered.ak)))))));
                }
            }(),
            as: $elm$core$List$reverse(rendered.as),
            d: $elm$core$List$filterMap_fn($mdgriffith$elm_codegen$Internal$Compiler$makeImport(fileDetails.a1), $mdgriffith$elm_codegen$Internal$Render$dedupImports(rendered.d)),
            eb: (rendered.aw ? $stil4m$elm_syntax$Elm$Syntax$Module$PortModule : $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule)({
                cF: function () {
                    var _v3 = rendered.aj;
                    if (!_v3.b) {
                        return $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange));
                    }
                    else {
                        return $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit($elm$core$List$map_fn($mdgriffith$elm_codegen$Internal$Compiler$nodifyAll_a0, rendered.aj)));
                    }
                }(),
                ec: $mdgriffith$elm_codegen$Internal$Compiler$nodify(fileDetails.ec)
            })
        });
        return {
            b8: body,
            hy: $elm$core$String$join_fn("/", fileDetails.ec) + ".elm",
            go: rendered.go
        };
    }, $mdgriffith$elm_codegen$Internal$Render$render = F2($mdgriffith$elm_codegen$Internal$Render$render_fn);
    var $mdgriffith$elm_codegen$Elm$docs = function (group) {
        var _v0 = group.av;
        if (_v0.$ === 1) {
            return "@docs " + $elm$core$String$join_fn(", ", group.d2);
        }
        else {
            var groupName = _v0.a;
            return "## " + (groupName + ("\n\n@docs " + $elm$core$String$join_fn(", ", group.d2)));
        }
    };
    var $elm$core$List$isEmpty = function (xs) {
        if (!xs.b) {
            return true;
        }
        else {
            return false;
        }
    };
    var $mdgriffith$elm_codegen$Elm$renderStandardComment = function (groups) {
        return $elm$core$List$isEmpty(groups) ? _List_Nil : $elm$core$List$map_fn($mdgriffith$elm_codegen$Elm$docs, groups);
    };
    var $mdgriffith$elm_codegen$Internal$Index$startIndex = $mdgriffith$elm_codegen$Internal$Index$Index_fn(0, _List_Nil, $elm$core$Set$empty, true);
    var $mdgriffith$elm_codegen$Elm$file_fn = function (mod, decs) {
        return $mdgriffith$elm_codegen$Internal$Render$render_fn($mdgriffith$elm_codegen$Elm$renderStandardComment, { a1: _List_Nil, as: decs, e: $mdgriffith$elm_codegen$Internal$Index$startIndex, ec: mod });
    }, $mdgriffith$elm_codegen$Elm$file = F2($mdgriffith$elm_codegen$Elm$file_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$toVarWithType_fn = function (index, desiredName, _v0) {
        var ann = _v0;
        var _v1 = $mdgriffith$elm_codegen$Internal$Index$getName_fn(desiredName, index);
        var name = _v1.a;
        var newIndex = _v1.b;
        return {
            t: function (ignoredIndex_) {
                return {
                    p: $elm$core$Result$Ok({ a1: ann.a1, f: $elm$core$Dict$empty, aq: ann.p }),
                    c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, name),
                    d: ann.d
                };
            },
            e: newIndex,
            r: name
        };
    }, $mdgriffith$elm_codegen$Internal$Compiler$toVarWithType = F3($mdgriffith$elm_codegen$Internal$Compiler$toVarWithType_fn);
    var $mdgriffith$elm_codegen$Elm$Case$branch1_fn = function (name, _v0, toExp) {
        var argName = _v0.a;
        var argType = _v0.b;
        return function (index) {
            var _var = $mdgriffith$elm_codegen$Internal$Compiler$toVarWithType_fn(index, argName, argType);
            return _Utils_Tuple3(_var.e, $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern_fn({
                ec: _List_Nil,
                r: $mdgriffith$elm_codegen$Internal$Format$formatType(name)
            }, _List_fromArray([
                $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(_var.r))
            ])), toExp(_var.t));
        };
    }, $mdgriffith$elm_codegen$Elm$Case$branch1 = F3($mdgriffith$elm_codegen$Elm$Case$branch1_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getTypeModule = function (_v0) {
        var annotation = _v0;
        var _v1 = annotation.p;
        if (_v1.$ === 1) {
            var _v2 = _v1.a;
            var _v3 = _v2.b;
            var mod = _v3.a;
            var typeName = _v3.b;
            return mod;
        }
        else {
            return _List_Nil;
        }
    };
    var $mdgriffith$elm_codegen$Elm$Case$custom_fn = function (mainExpression, annotation, branches) {
        return function (index) {
            var myMain = $mdgriffith$elm_codegen$Elm$withType_fn(annotation, mainExpression);
            var _v0 = $mdgriffith$elm_codegen$Elm$Case$captureCase_fn(myMain, $mdgriffith$elm_codegen$Internal$Compiler$getTypeModule(annotation), $mdgriffith$elm_codegen$Internal$Index$dive(index), branches);
            var expr = _v0.a;
            var gathered = _v0.b;
            return {
                p: function () {
                    var _v1 = gathered.p;
                    if (_v1.$ === 1) {
                        return $elm$core$Result$Err(_List_fromArray([$mdgriffith$elm_codegen$Internal$Compiler$EmptyCaseStatement]));
                    }
                    else {
                        var ann = _v1.a;
                        return ann;
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression({
                    y: $elm$core$List$reverse(gathered.y),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.c)
                }),
                d: _Utils_ap(expr.d, gathered.d)
            };
        };
    }, $mdgriffith$elm_codegen$Elm$Case$custom = F3($mdgriffith$elm_codegen$Elm$Case$custom_fn);
    var $mdgriffith$elm_codegen$Elm$Declare$fn3_fn = function (name, one, two, three, toExp) {
        var funcExp = $mdgriffith$elm_codegen$Elm$fn3_fn(one, two, three, toExp);
        var valueFrom = function (importFrom) {
            return function (index) {
                var toFnExp = funcExp;
                var fnExp = toFnExp(index);
                return {
                    p: fnExp.p,
                    c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(importFrom, $mdgriffith$elm_codegen$Internal$Format$sanitize(name)),
                    d: fnExp.d
                };
            };
        };
        var call = F4(function (importFrom, argOne, argTwo, argThree) {
            return $mdgriffith$elm_codegen$Elm$apply_fn(valueFrom(importFrom), _List_fromArray([argOne, argTwo, argThree]));
        });
        return {
            bV: call(_List_Nil),
            U: call,
            gL: $mdgriffith$elm_codegen$Elm$declaration_fn(name, funcExp),
            h1: valueFrom
        };
    }, $mdgriffith$elm_codegen$Elm$Declare$fn3 = F5($mdgriffith$elm_codegen$Elm$Declare$fn3_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
        return { $: 11, a: a };
    };
    var $mdgriffith$elm_codegen$Internal$Types$nodify = function (exp) {
        return $stil4m$elm_syntax$Elm$Syntax$Node$Node_fn($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
    };
    var $mdgriffith$elm_codegen$Internal$Types$string = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Types$nodify(_Utils_Tuple2(_List_Nil, "String")), _List_Nil);
    var $mdgriffith$elm_codegen$Elm$string = function (literal) {
        return function (_v0) {
            return {
                p: $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: $elm$core$Dict$empty, aq: $mdgriffith$elm_codegen$Internal$Types$string }),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$Literal(literal),
                d: _List_Nil
            };
        };
    };
    var $author$project$Gen$App$State$get_fn = function (getArg, getArg0) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$string,
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("state")
            ])))),
            q: _List_fromArray(["App", "State"]),
            r: "get"
        }), _List_fromArray([
            $mdgriffith$elm_codegen$Elm$string(getArg),
            getArg0
        ]));
    }, $author$project$Gen$App$State$get = F2($author$project$Gen$App$State$get_fn);
    var $mdgriffith$elm_codegen$Elm$Case$otherwise = function (toExp) {
        return function (index) {
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$var_fn(index, "otherwise");
            var otherwiseIndex = _v0.a;
            var otherwiseName = _v0.b;
            var otherwiseExp = _v0.c;
            return _Utils_Tuple3(otherwiseIndex, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(otherwiseName), toExp(otherwiseExp));
        };
    };
    var $elm$core$Tuple$pair_fn = function (a, b) {
        return _Utils_Tuple2(a, b);
    }, $elm$core$Tuple$pair = F2($elm$core$Tuple$pair_fn);
    var $author$project$Press$Model$getPage_fn = function (key, states, onFound) {
        return $mdgriffith$elm_codegen$Elm$Case$maybe_fn($author$project$Gen$App$State$get_fn(key, states), {
            aP: $elm$core$Tuple$pair_fn("foundPage", function (foundPage) {
                return $mdgriffith$elm_codegen$Elm$Case$custom_fn(foundPage, $author$project$Press$Model$types.ew, _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Case$branch1_fn(key, _Utils_Tuple2("page", $author$project$Press$Model$types.ew), onFound.aP),
                    $mdgriffith$elm_codegen$Elm$Case$otherwise(function (_v0) {
                        return onFound.aV;
                    })
                ]));
            }),
            aV: onFound.aV
        });
    }, $author$project$Press$Model$getPage = F3($author$project$Press$Model$getPage_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$getAnnotation = function (exp) {
        return exp.p;
    };
    var $mdgriffith$elm_codegen$Elm$maybe = function (maybeContent) {
        return function (index) {
            if (maybeContent.$ === 1) {
                return {
                    p: $elm$core$Result$Ok($mdgriffith$elm_codegen$Internal$Compiler$getInnerInference_fn(index, $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$var("a")))),
                    c: $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, "Nothing"),
                    d: _List_Nil
                };
            }
            else {
                var contentExp = maybeContent.a;
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, contentExp);
                var content = _v1.b;
                return {
                    p: $elm$core$Result$map_fn(function (ann) {
                        return {
                            a1: ann.a1,
                            f: ann.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2(_List_Nil, "Maybe")), _List_fromArray([
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify(ann.aq)
                            ]))
                        };
                    }, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotation(content)),
                    c: $stil4m$elm_syntax$Elm$Syntax$Expression$Application(_List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue_fn(_List_Nil, "Just")),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression($mdgriffith$elm_codegen$Internal$Compiler$nodify(content.c)))
                    ])),
                    d: $mdgriffith$elm_codegen$Internal$Compiler$getImports(content)
                };
            }
        };
    };
    var $mdgriffith$elm_codegen$Elm$just = function (content) {
        return $mdgriffith$elm_codegen$Elm$maybe($elm$core$Maybe$Just(content));
    };
    var $mdgriffith$elm_codegen$Elm$nothing = $mdgriffith$elm_codegen$Elm$maybe($elm$core$Maybe$Nothing);
    var $author$project$Gen$App$Page$values_ = {
        bc: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                    _Utils_Tuple2("init", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                        $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                        ]))
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Effect"]), "Effect", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))))),
                    _Utils_Tuple2("update", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                        $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Effect"]), "Effect", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))))),
                    _Utils_Tuple2("subscriptions", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                        $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Sub"]), "Sub", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ])))),
                    _Utils_Tuple2("view", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                        $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "View"]), "View", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))))
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ])))),
            q: _List_fromArray(["App", "Page"]),
            r: "page"
        }),
        fU: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Effect"]), "Effect", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ]))))),
            q: _List_fromArray(["App", "Page"]),
            r: "toInit"
        }),
        f$: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Sub"]), "Sub", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ])))),
            q: _List_fromArray(["App", "Page"]),
            r: "toSubscriptions"
        }),
        f0: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("model"), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "Effect"]), "Effect", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ]))))),
            q: _List_fromArray(["App", "Page"]),
            r: "toUpdate"
        }),
        f2: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                    _Utils_Tuple2("toParams", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$var("params"))),
                    _Utils_Tuple2("onParamChange", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("params")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "ParamChange", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))))
                ]))
            ])))),
            q: _List_fromArray(["App", "Page"]),
            r: "toUrlSync"
        }),
        f3: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["App", "View"]), "View", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ])))),
            q: _List_fromArray(["App", "Page"]),
            r: "toView"
        }),
        gr: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                    _Utils_Tuple2("toParams", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$var("params"))),
                    _Utils_Tuple2("onParamChange", $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("params")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "ParamChange", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))))
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("model")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Page", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("params"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("shared"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("model")
            ])))),
            q: _List_fromArray(["App", "Page"]),
            r: "withUrlSync"
        })
    };
    var $author$project$Press$Model$initPage = function (routes) {
        return $mdgriffith$elm_codegen$Elm$Declare$fn3_fn("initPage", _Utils_Tuple2("route", $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_fromArray(["Route"]), "Route"))), _Utils_Tuple2("shared", $elm$core$Maybe$Just($author$project$Press$Model$sharedType)), _Utils_Tuple2("cache", $elm$core$Maybe$Just($author$project$Gen$App$State$annotation_.gB($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "State")))), F3(function (route, shared, cache) {
            return $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                _Utils_Tuple2("new", $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "State")),
                _Utils_Tuple2("effect", $author$project$Gen$App$Effect$annotation_.gR($author$project$Press$Model$types.hg))
            ])), $mdgriffith$elm_codegen$Elm$Annotation$string), $mdgriffith$elm_codegen$Elm$Case$custom_fn(route, $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_fromArray(["Route"]), "Route"), $elm$core$List$map_fn(function (routeInfo) {
                var stateKey = routeInfo.r;
                var pageMsgTypeName = $author$project$Press$Model$types.bk(routeInfo.r);
                var pageModule = routeInfo.ec;
                var pageConfig = $mdgriffith$elm_codegen$Elm$value({ p: $elm$core$Maybe$Nothing, q: pageModule, r: "page" });
                return $mdgriffith$elm_codegen$Elm$Case$branch1_fn(routeInfo.r, _Utils_Tuple2("params", $mdgriffith$elm_codegen$Elm$Annotation$unit), function (params) {
                    var initialized = $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$apply_fn($author$project$Gen$App$Page$values_.fU, _List_fromArray([pageConfig])), _List_fromArray([
                        params,
                        shared,
                        $author$project$Press$Model$getPage_fn(stateKey, cache, { aP: $mdgriffith$elm_codegen$Elm$just, aV: $mdgriffith$elm_codegen$Elm$nothing })
                    ]));
                    return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("newPage", "pageEffect", initialized, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v0) {
                        var newPage = _v0.a;
                        var pageEffect = _v0.b;
                        return $mdgriffith$elm_codegen$Elm$tuple_fn($mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                            _Utils_Tuple2("new", $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val(stateKey), _List_fromArray([newPage]))),
                            _Utils_Tuple2("effect", A2($author$project$Gen$App$Effect$call_.dP, $mdgriffith$elm_codegen$Elm$val(pageMsgTypeName), pageEffect))
                        ])), $mdgriffith$elm_codegen$Elm$string(stateKey));
                    })));
                });
            }, routes)));
        }));
    };
    var $author$project$Gen$Platform$Sub$batch = function (batchArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
            ])))),
            q: _List_fromArray(["Sub"]),
            r: "batch"
        }), _List_fromArray([
            $mdgriffith$elm_codegen$Elm$list(batchArg)
        ]));
    };
    var $author$project$Gen$App$Sub$call_ = {
        bK: function (batchArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ])))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Sub"]),
                r: "batch"
            }), _List_fromArray([batchArg]));
        },
        dP: F2(function (mapArg, mapArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ])))),
                q: _List_fromArray(["App", "Sub"]),
                r: "map"
            }), _List_fromArray([mapArg, mapArg0]));
        }),
        f_: function (toSubscriptionArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["App", "Sub"]),
                r: "toSubscription"
            }), _List_fromArray([toSubscriptionArg]));
        }
    };
    var $author$project$Gen$App$State$current = function (currentArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Maybe", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("state")
            ])))),
            q: _List_fromArray(["App", "State"]),
            r: "current"
        }), _List_fromArray([currentArg]));
    };
    var $mdgriffith$elm_codegen$Elm$fn2_fn = function (_v0, _v1, toExpression) {
        var oneBaseName = _v0.a;
        var maybeOneType = _v0.b;
        var twoBaseName = _v1.a;
        var maybeTwoType = _v1.b;
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var one = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(index, oneBaseName, maybeOneType);
            var two = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(one.e, twoBaseName, maybeTwoType);
            var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(two.e, A2(toExpression, one.u, two.u));
            var newIndex_ = _v2.a;
            var _return = _v2.b;
            return {
                p: function () {
                    var _v3 = _return.p;
                    if (_v3.$ === 1) {
                        var err = _v3.a;
                        return _return.p;
                    }
                    else {
                        var returnAnnotation = _v3.a;
                        return $elm$core$Result$Ok({
                            a1: returnAnnotation.a1,
                            f: returnAnnotation.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(one.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(two.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.aq))))
                        });
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
                    T: _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.r))
                    ]),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                }),
                d: _return.d
            };
        });
    }, $mdgriffith$elm_codegen$Elm$fn2_fn_unwrapped = function (_v0, _v1, toExpression) {
        var oneBaseName = _v0.a;
        var maybeOneType = _v0.b;
        var twoBaseName = _v1.a;
        var maybeTwoType = _v1.b;
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var one = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(index, oneBaseName, maybeOneType);
            var two = $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType_fn(one.e, twoBaseName, maybeTwoType);
            var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(two.e, toExpression(one.u, two.u));
            var newIndex_ = _v2.a;
            var _return = _v2.b;
            return {
                p: function () {
                    var _v3 = _return.p;
                    if (_v3.$ === 1) {
                        var err = _v3.a;
                        return _return.p;
                    }
                    else {
                        var returnAnnotation = _v3.a;
                        return $elm$core$Result$Ok({
                            a1: returnAnnotation.a1,
                            f: returnAnnotation.f,
                            aq: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(one.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(two.aq), $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.aq))))
                        });
                    }
                }(),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression({
                    T: _List_fromArray([
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.r)),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.r))
                    ]),
                    c: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.c)
                }),
                d: _return.d
            };
        });
    }, $mdgriffith$elm_codegen$Elm$fn2 = F3($mdgriffith$elm_codegen$Elm$fn2_fn);
    var $author$project$Gen$Platform$Sub$none = $mdgriffith$elm_codegen$Elm$value({
        p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Sub", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
        ]))),
        q: _List_fromArray(["Sub"]),
        r: "none"
    });
    var $author$project$Press$Model$toSub_fn = function (config, frameModel, sub) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("toSub", config), _List_fromArray([frameModel, sub]));
    }, $author$project$Press$Model$toSub = F3($author$project$Press$Model$toSub_fn);
    var $author$project$Press$Generate$Engine$subscriptions = function (routes) {
        return $mdgriffith$elm_codegen$Elm$declaration_fn("subscriptions", $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$author$project$Press$Model$types.au, $author$project$Press$Model$types.d9]), $author$project$Gen$Platform$Sub$annotation_.hP($author$project$Press$Model$types.hg)), $mdgriffith$elm_codegen$Elm$fn2_fn_unwrapped(_Utils_Tuple2("config", $elm$core$Maybe$Just($author$project$Press$Model$types.au)), _Utils_Tuple2("model", $elm$core$Maybe$Just($author$project$Press$Model$types.d9)), function (config, model) {
            return $author$project$Gen$Platform$Sub$batch(_List_fromArray([
                $author$project$Press$Model$toSub_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model), A2($author$project$Gen$App$Sub$call_.dP, $mdgriffith$elm_codegen$Elm$val("Global"), $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("subscriptions", config), _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$get_fn("frame", model)
                ])))),
                $mdgriffith$elm_codegen$Elm$Case$maybe_fn($author$project$Gen$App$State$current($mdgriffith$elm_codegen$Elm$get_fn("states", model)), {
                    aP: _Utils_Tuple2("current", function (current) {
                        return $author$project$Press$Model$toSub_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model), $mdgriffith$elm_codegen$Elm$Case$custom_fn(current, $author$project$Press$Model$types.ew, $elm$core$List$map_fn(function (route) {
                            var stateKey = route.r;
                            var pageMsgTypeName = $author$project$Press$Model$types.bk(route.r);
                            var pageModule = route.ec;
                            return $mdgriffith$elm_codegen$Elm$Case$branch1_fn(stateKey, _Utils_Tuple2("pageModel", $mdgriffith$elm_codegen$Elm$Annotation$named_fn(pageModule, "Model")), function (pageState) {
                                return A2($author$project$Gen$App$Sub$call_.dP, $mdgriffith$elm_codegen$Elm$val(pageMsgTypeName), $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$apply_fn($author$project$Gen$App$Page$values_.f$, _List_fromArray([
                                    $mdgriffith$elm_codegen$Elm$value({ p: $elm$core$Maybe$Nothing, q: pageModule, r: "page" })
                                ])), _List_fromArray([
                                    $author$project$Press$Model$toShared_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model)),
                                    pageState
                                ])));
                            });
                        }, routes)));
                    }),
                    aV: $author$project$Gen$Platform$Sub$none
                })
            ]));
        })));
    };
    var $author$project$Gen$Browser$Navigation$call_ = {
        bD: F2(function (backArg, backArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil),
                    $mdgriffith$elm_codegen$Elm$Annotation$int
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser", "Navigation"]),
                r: "back"
            }), _List_fromArray([backArg, backArg0]));
        }),
        cV: F2(function (forwardArg, forwardArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil),
                    $mdgriffith$elm_codegen$Elm$Annotation$int
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser", "Navigation"]),
                r: "forward"
            }), _List_fromArray([forwardArg, forwardArg0]));
        }),
        dM: function (loadArg) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$mdgriffith$elm_codegen$Elm$Annotation$string]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser", "Navigation"]),
                r: "load"
            }), _List_fromArray([loadArg]));
        },
        eL: F2(function (pushUrlArg, pushUrlArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil),
                    $mdgriffith$elm_codegen$Elm$Annotation$string
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser", "Navigation"]),
                r: "pushUrl"
            }), _List_fromArray([pushUrlArg, pushUrlArg0]));
        }),
        eY: F2(function (replaceUrlArg, replaceUrlArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser", "Navigation"]), "Key", _List_Nil),
                    $mdgriffith$elm_codegen$Elm$Annotation$string
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cmd", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                ])))),
                q: _List_fromArray(["Browser", "Navigation"]),
                r: "replaceUrl"
            }), _List_fromArray([replaceUrlArg, replaceUrlArg0]));
        })
    };
    var $author$project$Gen$App$State$toNotFound = function (toNotFoundArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("state")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Cache", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("state")
            ])))),
            q: _List_fromArray(["App", "State"]),
            r: "toNotFound"
        }), _List_fromArray([toNotFoundArg]));
    };
    var $author$project$Gen$Url$toString = function (toStringArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Url", _List_Nil)
            ]), $mdgriffith$elm_codegen$Elm$Annotation$string)),
            q: _List_fromArray(["Url"]),
            r: "toString"
        }), _List_fromArray([toStringArg]));
    };
    var $author$project$Press$Model$setState_fn = function (key, val, model) {
        return A3($author$project$Gen$App$State$call_.dt, key, val, $mdgriffith$elm_codegen$Elm$get_fn("states", model));
    }, $author$project$Press$Model$setState = F3($author$project$Press$Model$setState_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression_fn = function (a, b) {
        return { $: 22, a: a, b: b };
    }, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$RecordUpdateIncorrectFields = function (a) {
        return { $: 11, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$presentAndMatching_fn = function (fieldName, fieldInference, existingFields) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, gathered) {
            var _v1 = _v0.b;
            var _v2 = _v1.a;
            var existingFieldName = _v2.b;
            var _v3 = _v1.b;
            var existingFieldType = _v3.b;
            return gathered ? gathered : (_Utils_eq(fieldName, existingFieldName) ? true : false);
        }, false, existingFields);
    }, $mdgriffith$elm_codegen$Elm$presentAndMatching = F3($mdgriffith$elm_codegen$Elm$presentAndMatching_fn);
    var $mdgriffith$elm_codegen$Elm$verifyFieldsHelper_fn = function (existingFields, updatedFields) {
        verifyFieldsHelper: while (true) {
            if (!updatedFields.b) {
                return true;
            }
            else {
                var _v1 = updatedFields.a;
                var fieldName = _v1.a;
                var fieldInference = _v1.b;
                var remain = updatedFields.b;
                if ($mdgriffith$elm_codegen$Elm$presentAndMatching_fn(fieldName, fieldInference, existingFields)) {
                    var $temp$existingFields = existingFields, $temp$updatedFields = remain;
                    existingFields = $temp$existingFields;
                    updatedFields = $temp$updatedFields;
                    continue verifyFieldsHelper;
                }
                else {
                    return false;
                }
            }
        }
    }, $mdgriffith$elm_codegen$Elm$verifyFieldsHelper = F2($mdgriffith$elm_codegen$Elm$verifyFieldsHelper_fn);
    var $mdgriffith$elm_codegen$Elm$verifyFields_fn = function (updatedFields, existingFields) {
        return $mdgriffith$elm_codegen$Elm$verifyFieldsHelper_fn(existingFields, updatedFields) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just($mdgriffith$elm_codegen$Internal$Compiler$RecordUpdateIncorrectFields({
            gx: $elm$core$List$map_fn(function (_v0) {
                var fieldName = _v0.a;
                var fieldInference = _v0.b;
                return _Utils_Tuple2(fieldName, fieldInference.aq);
            }, updatedFields),
            gW: $elm$core$List$map_fn(function (_v1) {
                var _v2 = _v1.b;
                var _v3 = _v2.a;
                var fieldName = _v3.b;
                var _v4 = _v2.b;
                var fieldInference = _v4.b;
                return _Utils_Tuple2(fieldName, fieldInference);
            }, existingFields)
        }));
    }, $mdgriffith$elm_codegen$Elm$verifyFields = F2($mdgriffith$elm_codegen$Elm$verifyFields_fn);
    var $mdgriffith$elm_codegen$Elm$updateRecord_fn = function (fields, recordExpression) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(function (index) {
            var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, recordExpression);
            var recordIndex = _v0.a;
            var recordExp = _v0.b;
            var _v1 = $elm$core$List$foldl_fn_unwrapped(function (_v2, _v3) {
                var fieldNameUnformatted = _v2.a;
                var fieldExp = _v2.b;
                var currentIndex = _v3.a;
                var fieldAnnotationResult = _v3.b;
                var items = _v3.c;
                var fieldName = $mdgriffith$elm_codegen$Internal$Format$formatValue(fieldNameUnformatted);
                var _v4 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(currentIndex, fieldExp);
                var newIndex = _v4.a;
                var exp = _v4.b;
                var currentFieldAnnotations = function () {
                    if (!fieldAnnotationResult.$) {
                        var fieldAnns = fieldAnnotationResult.a;
                        var _v6 = exp.p;
                        if (!_v6.$) {
                            var fs = _v6.a;
                            return $elm$core$Result$Ok(_List_Cons(_Utils_Tuple2(fieldName, fs), fieldAnns));
                        }
                        else {
                            var newErr = _v6.a;
                            return $elm$core$Result$Err(newErr);
                        }
                    }
                    else {
                        var err = fieldAnnotationResult.a;
                        var _v7 = exp.p;
                        if (!_v7.$) {
                            return fieldAnnotationResult;
                        }
                        else {
                            var newErr = _v7.a;
                            return $elm$core$Result$Err(_Utils_ap(err, newErr));
                        }
                    }
                }();
                return _Utils_Tuple3(newIndex, currentFieldAnnotations, _List_Cons(_Utils_Tuple2(fieldName, exp), items));
            }, _Utils_Tuple3(recordIndex, $elm$core$Result$Ok(_List_Nil), _List_Nil), fields);
            var fieldIndex = _v1.a;
            var fieldAnnotationsGathered = _v1.b;
            var fieldDetails = _v1.c;
            return {
                p: function () {
                    if (fieldAnnotationsGathered.$ === 1) {
                        var fieldErrors = fieldAnnotationsGathered.a;
                        return $elm$core$Result$Err(fieldErrors);
                    }
                    else {
                        var verifiedFieldAnnotations = fieldAnnotationsGathered.a;
                        var _v9 = recordExp.p;
                        if (!_v9.$) {
                            var recordAnn = _v9.a;
                            var _v10 = recordAnn.aq;
                            switch (_v10.$) {
                                case 4:
                                    var existingFields = _v10.a;
                                    var _v11 = $mdgriffith$elm_codegen$Elm$verifyFields_fn(verifiedFieldAnnotations, existingFields);
                                    if (_v11.$ === 1) {
                                        return recordExp.p;
                                    }
                                    else {
                                        var err = _v11.a;
                                        return $elm$core$Result$Err(_List_fromArray([err]));
                                    }
                                case 0:
                                    var nameOfRecord = _v10.a;
                                    return $elm$core$Result$Ok({
                                        a1: recordAnn.a1,
                                        f: $mdgriffith$elm_codegen$Internal$Compiler$addInference_fn(nameOfRecord, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(nameOfRecord), $mdgriffith$elm_codegen$Internal$Compiler$nodify($elm$core$List$map_fn(function (_v12) {
                                            var fieldName = _v12.a;
                                            var inference = _v12.b;
                                            return $mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(inference.aq)));
                                        }, verifiedFieldAnnotations))), recordAnn.f),
                                        aq: recordAnn.aq
                                    });
                                default:
                                    var otherwise = _v10;
                                    return recordExp.p;
                            }
                        }
                        else {
                            var otherwise = _v9;
                            return otherwise;
                        }
                    }
                }(),
                c: function () {
                    var _v13 = recordExp.c;
                    if (_v13.$ === 3) {
                        var name = _v13.b;
                        return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(name), $elm$core$List$map_fn(function (_v14) {
                            var fieldName = _v14.a;
                            var expDetails = _v14.b;
                            return $mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(expDetails.c)));
                        }, $elm$core$List$reverse(fieldDetails)));
                    }
                    else {
                        var name = "record" + $mdgriffith$elm_codegen$Internal$Index$indexToString(fieldIndex);
                        return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression({
                            as: _List_fromArray([
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(name)), $mdgriffith$elm_codegen$Internal$Compiler$nodify(recordExp.c)))
                            ]),
                            c: $mdgriffith$elm_codegen$Internal$Compiler$nodify($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression_fn($mdgriffith$elm_codegen$Internal$Compiler$nodify(name), $elm$core$List$map_fn(function (_v15) {
                                var fieldName = _v15.a;
                                var expDetails = _v15.b;
                                return $mdgriffith$elm_codegen$Internal$Compiler$nodify(_Utils_Tuple2($mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName), $mdgriffith$elm_codegen$Internal$Compiler$nodify(expDetails.c)));
                            }, fieldDetails)))
                        });
                    }
                }(),
                d: $elm$core$List$concatMap_fn(A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $mdgriffith$elm_codegen$Internal$Compiler$getImports), fieldDetails)
            };
        });
    }, $mdgriffith$elm_codegen$Elm$updateRecord = F2($mdgriffith$elm_codegen$Elm$updateRecord_fn);
    var $author$project$Press$Model$updatePageBranches_fn = function (routes, config, shared, model) {
        return $elm$core$List$map_fn(function (route) {
            var stateKey = route.r;
            var pageMsgTypeName = $author$project$Press$Model$types.bk(route.r);
            var pageModule = route.ec;
            return $mdgriffith$elm_codegen$Elm$Case$branch1_fn(pageMsgTypeName, _Utils_Tuple2("pageMsg", $mdgriffith$elm_codegen$Elm$Annotation$named_fn(pageModule, "Msg")), function (pageMsg) {
                return $author$project$Press$Model$getPage_fn(stateKey, $mdgriffith$elm_codegen$Elm$get_fn("states", model), {
                    aP: function (pageState) {
                        var updated = $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$apply_fn($author$project$Gen$App$Page$values_.f0, _List_fromArray([
                            $mdgriffith$elm_codegen$Elm$value({ p: $elm$core$Maybe$Nothing, q: pageModule, r: "page" })
                        ])), _List_fromArray([shared, pageMsg, pageState]));
                        return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("updatedPage", "pageEffect", updated, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v0) {
                            var innerPageModel = _v0.a;
                            var pageEffect = _v0.b;
                            var pageModel = $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val(stateKey), _List_fromArray([innerPageModel]));
                            return $mdgriffith$elm_codegen$Elm$tuple_fn($mdgriffith$elm_codegen$Elm$updateRecord_fn(_List_fromArray([
                                _Utils_Tuple2("states", $author$project$Press$Model$setState_fn($mdgriffith$elm_codegen$Elm$string(stateKey), pageModel, model))
                            ]), model), $author$project$Press$Model$toCmd_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model), A2($author$project$Gen$App$Effect$call_.dP, $mdgriffith$elm_codegen$Elm$val(pageMsgTypeName), pageEffect)));
                        })));
                    },
                    aV: $mdgriffith$elm_codegen$Elm$tuple_fn(model, $author$project$Gen$Platform$Cmd$none)
                });
            });
        }, routes);
    }, $author$project$Press$Model$updatePageBranches = F4($author$project$Press$Model$updatePageBranches_fn);
    var $author$project$Press$Generate$Engine$update_fn = function (routes, initPage) {
        return $mdgriffith$elm_codegen$Elm$declaration_fn("update", $mdgriffith$elm_codegen$Elm$fn3_fn_unwrapped(_Utils_Tuple2("config", $elm$core$Maybe$Just($author$project$Press$Model$types.au)), _Utils_Tuple2("msg", $elm$core$Maybe$Just($author$project$Press$Model$types.hg)), _Utils_Tuple2("model", $elm$core$Maybe$Just($author$project$Press$Model$types.d9)), function (config, msg, model) {
            return $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($author$project$Press$Model$types.d9, $mdgriffith$elm_codegen$Elm$Annotation$cmd($author$project$Press$Model$types.hg)), $mdgriffith$elm_codegen$Elm$Case$custom_fn(msg, $author$project$Press$Model$types.hg, _Utils_ap(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Case$branch1_fn("UrlRequested", _Utils_Tuple2("request", $author$project$Gen$Browser$annotation_.gi), function (request) {
                    return $mdgriffith$elm_codegen$Elm$Case$custom_fn(request, $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Browser"]), "UrlRequest", _List_Nil), _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Case$branch1_fn("Internal", _Utils_Tuple2("url", $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Url", _List_Nil)), function (url) {
                            return $mdgriffith$elm_codegen$Elm$tuple_fn(model, A2($author$project$Gen$Browser$Navigation$call_.eL, $mdgriffith$elm_codegen$Elm$get_fn("key", model), $author$project$Gen$Url$toString(url)));
                        }),
                        $mdgriffith$elm_codegen$Elm$Case$branch1_fn("External", _Utils_Tuple2("url", $mdgriffith$elm_codegen$Elm$Annotation$string), function (url) {
                            return $mdgriffith$elm_codegen$Elm$tuple_fn(model, $author$project$Gen$Browser$Navigation$call_.dM(url));
                        })
                    ]));
                }),
                $mdgriffith$elm_codegen$Elm$Case$branch1_fn("UrlChanged", _Utils_Tuple2("url", $author$project$Gen$Url$annotation_.af), function (url) {
                    var parsed = $author$project$Press$Generate$Engine$parseUrl(url);
                    return $mdgriffith$elm_codegen$Elm$Case$maybe_fn(parsed, {
                        aP: $elm$core$Tuple$pair_fn("route", function (route) {
                            var initializedPage = A3(initPage.bV, route, $author$project$Press$Model$toShared_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model)), $mdgriffith$elm_codegen$Elm$get_fn("states", model));
                            return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("pageModel", "tag", initializedPage, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v0) {
                                var newPage = _v0.a;
                                var pageTag = _v0.b;
                                return $mdgriffith$elm_codegen$Elm$tuple_fn($mdgriffith$elm_codegen$Elm$updateRecord_fn(_List_fromArray([
                                    _Utils_Tuple2("states", A2($author$project$Gen$App$State$call_.fi, pageTag, A3($author$project$Gen$App$State$call_.dt, pageTag, $mdgriffith$elm_codegen$Elm$get_fn("new", newPage), $mdgriffith$elm_codegen$Elm$get_fn("states", model))))
                                ]), model), $author$project$Press$Model$toCmd_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model), $mdgriffith$elm_codegen$Elm$get_fn("effect", newPage)));
                            })));
                        }),
                        aV: function () {
                            var updatedModel = $mdgriffith$elm_codegen$Elm$updateRecord_fn(_List_fromArray([
                                _Utils_Tuple2("states", $author$project$Gen$App$State$toNotFound($mdgriffith$elm_codegen$Elm$get_fn("states", model)))
                            ]), model);
                            return $mdgriffith$elm_codegen$Elm$tuple_fn(updatedModel, $author$project$Gen$Platform$Cmd$none);
                        }()
                    });
                }),
                $mdgriffith$elm_codegen$Elm$Case$branch1_fn("Global", _Utils_Tuple2("frameMsg", $mdgriffith$elm_codegen$Elm$Annotation$var("frameMsg")), function (frameMsg) {
                    var updatedFrame = $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("update", config), _List_fromArray([
                        frameMsg,
                        $mdgriffith$elm_codegen$Elm$get_fn("frame", model)
                    ]));
                    return $mdgriffith$elm_codegen$Elm$Let$toExpression($mdgriffith$elm_codegen$Elm$Let$tuple_fn("newFrame", "frameEffect", updatedFrame, $mdgriffith$elm_codegen$Elm$Let$letIn(function (_v1) {
                        var newFrame = _v1.a;
                        var frameEffect = _v1.b;
                        return $mdgriffith$elm_codegen$Elm$tuple_fn($mdgriffith$elm_codegen$Elm$updateRecord_fn(_List_fromArray([
                            _Utils_Tuple2("frame", newFrame)
                        ]), model), $author$project$Press$Model$toCmd_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model), A2($author$project$Gen$App$Effect$call_.dP, $mdgriffith$elm_codegen$Elm$val("Global"), frameEffect)));
                    })));
                })
            ]), $author$project$Press$Model$updatePageBranches_fn(routes, config, $author$project$Press$Model$toShared_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model)), model))));
        }));
    }, $author$project$Press$Generate$Engine$update = F2($author$project$Press$Generate$Engine$update_fn);
    var $mdgriffith$elm_codegen$Elm$Variant_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mdgriffith$elm_codegen$Elm$Variant = F2($mdgriffith$elm_codegen$Elm$Variant_fn);
    var $mdgriffith$elm_codegen$Elm$variant = function (name) {
        return $mdgriffith$elm_codegen$Elm$Variant_fn(name, _List_Nil);
    };
    var $mdgriffith$elm_codegen$Elm$variantWith = $mdgriffith$elm_codegen$Elm$Variant;
    var $author$project$Gen$App$View$call_ = {
        dP: F2(function (mapArg, mapArg0) {
            return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
                p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "View", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "View", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ])))),
                q: _List_fromArray(["App", "View"]),
                r: "map"
            }), _List_fromArray([mapArg, mapArg0]));
        })
    };
    var $author$project$Press$Generate$Engine$view = function (routes) {
        return $mdgriffith$elm_codegen$Elm$declaration_fn("view", $mdgriffith$elm_codegen$Elm$fn2_fn_unwrapped(_Utils_Tuple2("config", $elm$core$Maybe$Just($author$project$Press$Model$types.au)), _Utils_Tuple2("model", $elm$core$Maybe$Just($author$project$Press$Model$types.d9)), function (config, model) {
            var frameView = function (pageView) {
                return $mdgriffith$elm_codegen$Elm$withType_fn($author$project$Gen$Browser$annotation_.aM($author$project$Press$Model$types.hg), $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$get_fn("view", config), _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$val("Global"),
                    $mdgriffith$elm_codegen$Elm$get_fn("frame", model),
                    pageView
                ])));
            };
            return frameView($mdgriffith$elm_codegen$Elm$Case$maybe_fn($author$project$Gen$App$State$current($mdgriffith$elm_codegen$Elm$get_fn("states", model)), {
                aP: _Utils_Tuple2("current", function (current) {
                    return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val("View"), _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Case$custom_fn(current, $author$project$Press$Model$types.ew, $elm$core$List$map_fn(function (route) {
                            var stateKey = route.r;
                            var pageMsgTypeName = $author$project$Press$Model$types.bk(route.r);
                            var pageModule = route.ec;
                            return $mdgriffith$elm_codegen$Elm$Case$branch1_fn(stateKey, _Utils_Tuple2("pageModel", $mdgriffith$elm_codegen$Elm$Annotation$named_fn(pageModule, "Model")), function (pageState) {
                                return A2($author$project$Gen$App$View$call_.dP, $mdgriffith$elm_codegen$Elm$fn_fn(_Utils_Tuple2("innerMsg", $elm$core$Maybe$Nothing), function (innerMsg) {
                                    return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val(pageMsgTypeName), _List_fromArray([innerMsg]));
                                }), $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$apply_fn($author$project$Gen$App$Page$values_.f3, _List_fromArray([
                                    $mdgriffith$elm_codegen$Elm$value({ p: $elm$core$Maybe$Nothing, q: pageModule, r: "page" })
                                ])), _List_fromArray([
                                    $author$project$Press$Model$toShared_fn(config, $mdgriffith$elm_codegen$Elm$get_fn("frame", model)),
                                    pageState
                                ])));
                            });
                        }, routes))
                    ]));
                }),
                aV: $mdgriffith$elm_codegen$Elm$val("NotFound")
            }));
        }));
    };
    var $author$project$Press$Generate$Engine$generate = function (routes) {
        var initPage = $author$project$Press$Model$initPage(routes);
        return $mdgriffith$elm_codegen$Elm$file_fn(_List_fromArray(["App", "Engine"]), _List_fromArray([
            $author$project$Press$Generate$Engine$app_fn(routes, initPage),
            $mdgriffith$elm_codegen$Elm$expose($mdgriffith$elm_codegen$Elm$alias_fn("App", $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Program", _List_fromArray([
                $author$project$Gen$Json$Encode$annotation_.h1,
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Model", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("frame")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_Nil, "Msg", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("frameMsg")
                ]))
            ])))),
            $mdgriffith$elm_codegen$Elm$alias_fn("Model", $author$project$Press$Model$types.he),
            $mdgriffith$elm_codegen$Elm$customType_fn("State", $elm$core$List$map_fn(function (route) {
                return $mdgriffith$elm_codegen$Elm$Variant_fn(route.r, _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$named_fn(route.ec, "Model")
                ]));
            }, routes)),
            $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn({ aN: true, av: $elm$core$Maybe$Nothing }, $mdgriffith$elm_codegen$Elm$customType_fn("View", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$variant("NotFound"),
                $mdgriffith$elm_codegen$Elm$Variant_fn("View", _List_fromArray([
                    $author$project$Gen$App$View$annotation_.h3($mdgriffith$elm_codegen$Elm$Annotation$var("appMsg"))
                ]))
            ]))),
            function () {
                var pageVariants = $elm$core$List$map_fn(function (route) {
                    return $mdgriffith$elm_codegen$Elm$Variant_fn($author$project$Press$Model$types.bk(route.r), _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$named_fn(route.ec, "Msg")
                    ]));
                }, routes);
                return $mdgriffith$elm_codegen$Elm$customType_fn("Msg", _Utils_ap(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Variant_fn("UrlRequested", _List_fromArray([$author$project$Gen$Browser$annotation_.gi])),
                    $mdgriffith$elm_codegen$Elm$Variant_fn("UrlChanged", _List_fromArray([$author$project$Gen$Url$annotation_.af])),
                    $mdgriffith$elm_codegen$Elm$Variant_fn("Global", _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$Annotation$var("frameMsg")
                    ]))
                ]), pageVariants));
            }(),
            $author$project$Press$Generate$Engine$update_fn(routes, initPage),
            initPage.gL,
            $author$project$Press$Generate$Engine$view(routes),
            $author$project$Press$Generate$Engine$subscriptions(routes)
        ]));
    };
    var $author$project$Press$Generate$generatePage = function (route) {
        var _v0 = route.aq;
        if (!_v0.$) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var files = _v0.a.gY;
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Press$Generate$generatePages = function (routes) {
        return $elm$core$List$filterMap_fn($author$project$Press$Generate$generatePage, routes);
    };
    var $mdgriffith$elm_codegen$Internal$Index$startChecked = function (checked) {
        return $mdgriffith$elm_codegen$Internal$Index$Index_fn(0, _List_Nil, $elm$core$Set$empty, checked);
    };
    var $mdgriffith$elm_codegen$Elm$fileWith_fn = function (mod, options, decs) {
        return $mdgriffith$elm_codegen$Internal$Render$render_fn(options.a5, {
            a1: options.a1,
            as: decs,
            e: $mdgriffith$elm_codegen$Internal$Index$startChecked(true),
            ec: mod
        });
    }, $mdgriffith$elm_codegen$Elm$fileWith = F3($mdgriffith$elm_codegen$Elm$fileWith_fn);
    var $mdgriffith$elm_codegen$Elm$Annotation$dict_fn = function (keyArg, valArg) {
        return $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([keyArg, valArg]));
    }, $mdgriffith$elm_codegen$Elm$Annotation$dict = F2($mdgriffith$elm_codegen$Elm$Annotation$dict_fn);
    var $elm$core$Dict$isEmpty = function (dict) {
        if (dict.$ === -2) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Set$isEmpty = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$isEmpty(dict);
    };
    var $author$project$Press$Generate$hasNoParams = function (params) {
        return $elm$core$Set$isEmpty(params.N) && (!params.S);
    };
    var $author$project$Press$Generate$paramType = function (route) {
        var _v0 = route.aq;
        if (_v0.$ === 1) {
            return $mdgriffith$elm_codegen$Elm$Annotation$record(_List_fromArray([
                _Utils_Tuple2("sourceUrl", $mdgriffith$elm_codegen$Elm$Annotation$string)
            ]));
        }
        else {
            var _v1 = route.aC;
            var queryParams = _v1.am;
            var path = _v1.hy;
            if ($author$project$Press$Generate$hasNoParams(queryParams)) {
                return $mdgriffith$elm_codegen$Elm$Annotation$record(_List_Nil);
            }
            else {
                var addCatchall = function (fields) {
                    return queryParams.S ? _List_Cons(_Utils_Tuple2("params", $mdgriffith$elm_codegen$Elm$Annotation$dict_fn($mdgriffith$elm_codegen$Elm$Annotation$string, $mdgriffith$elm_codegen$Elm$Annotation$string)), fields) : fields;
                };
                return $mdgriffith$elm_codegen$Elm$Annotation$record($elm$core$List$concat(_List_fromArray([
                    $elm$core$List$filterMap_fn(function (piece) {
                        if (!piece.$) {
                            return $elm$core$Maybe$Nothing;
                        }
                        else {
                            var name = piece.a;
                            return $elm$core$Maybe$Just(_Utils_Tuple2(name, $mdgriffith$elm_codegen$Elm$Annotation$string));
                        }
                    }, path),
                    addCatchall($elm$core$List$map_fn(function (field) {
                        return _Utils_Tuple2(field, $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$string));
                    }, $elm$core$Set$toList(queryParams.N)))
                ])));
            }
        }
    };
    var $author$project$Gen$Dict$empty = $mdgriffith$elm_codegen$Elm$value({
        p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
            $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
            $mdgriffith$elm_codegen$Elm$Annotation$var("v")
        ]))),
        q: _List_fromArray(["Dict"]),
        r: "empty"
    });
    var $mdgriffith$elm_codegen$Elm$Op$BinOp_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $mdgriffith$elm_codegen$Elm$Op$BinOp = F3($mdgriffith$elm_codegen$Elm$Op$BinOp_fn);
    var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = 0;
    var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication_fn = function (a, b, c, d) {
        return { $: 2, a: a, b: b, c: c, d: d };
    }, $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4($stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication_fn);
    var $mdgriffith$elm_codegen$Elm$Op$applyPipe_fn = function (_v0, infixAnnotation, l, r) {
        var symbol = _v0.a;
        var dir = _v0.b;
        return function (index) {
            var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(index, l);
            var leftIndex = _v1.a;
            var left = _v1.b;
            var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails_fn(leftIndex, r);
            var rightIndex = _v2.a;
            var right = _v2.b;
            var annotationIndex = $mdgriffith$elm_codegen$Internal$Index$next(rightIndex);
            return {
                p: $mdgriffith$elm_codegen$Internal$Compiler$applyType_fn(index, $elm$core$Result$Ok({ a1: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, f: $elm$core$Dict$empty, aq: infixAnnotation }), _List_fromArray([left, right])),
                c: $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication_fn(symbol, dir, $mdgriffith$elm_codegen$Internal$Compiler$nodify(left.c), $mdgriffith$elm_codegen$Internal$Compiler$nodify(right.c)),
                d: _Utils_ap(left.d, right.d)
            };
        };
    }, $mdgriffith$elm_codegen$Elm$Op$applyPipe = F4($mdgriffith$elm_codegen$Elm$Op$applyPipe_fn);
    var $mdgriffith$elm_codegen$Internal$Types$function_fn = function (args, _return) {
        return $elm$core$List$foldr_fn(F2(function (ann, fn) {
            return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation_fn($mdgriffith$elm_codegen$Internal$Types$nodify(ann), $mdgriffith$elm_codegen$Internal$Types$nodify(fn));
        }), _return, args);
    }, $mdgriffith$elm_codegen$Internal$Types$function = F2($mdgriffith$elm_codegen$Internal$Types$function_fn);
    var $mdgriffith$elm_codegen$Internal$Types$formatValue = function (str) {
        var formatted = _Utils_eq($elm$core$String$toUpper(str), str) ? $elm$core$String$toLower(str) : _Utils_ap($elm$core$String$toLower($elm$core$String$left_fn(1, str)), $elm$core$String$dropLeft_fn(1, str));
        return $mdgriffith$elm_codegen$Internal$Format$sanitize(formatted);
    };
    var $mdgriffith$elm_codegen$Internal$Types$var = function (name) {
        return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType($mdgriffith$elm_codegen$Internal$Types$formatValue(name));
    };
    var $mdgriffith$elm_codegen$Elm$Op$pipe_fn = function (r, l) {
        return $mdgriffith$elm_codegen$Elm$Op$applyPipe_fn($mdgriffith$elm_codegen$Elm$Op$BinOp_fn("|>", 0, 0), $mdgriffith$elm_codegen$Internal$Types$function_fn(_List_fromArray([
            $mdgriffith$elm_codegen$Internal$Types$var("a"),
            $mdgriffith$elm_codegen$Internal$Types$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Internal$Types$var("a")
            ]), $mdgriffith$elm_codegen$Internal$Types$var("b"))
        ]), $mdgriffith$elm_codegen$Internal$Types$var("b")), l, r);
    }, $mdgriffith$elm_codegen$Elm$Op$pipe = F2($mdgriffith$elm_codegen$Elm$Op$pipe_fn);
    var $author$project$Gen$AppUrl$toString = function (toStringArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["AppUrl"]), "AppUrl", _List_Nil)
            ]), $mdgriffith$elm_codegen$Elm$Annotation$string)),
            q: _List_fromArray(["AppUrl"]),
            r: "toString"
        }), _List_fromArray([toStringArg]));
    };
    var $mdgriffith$elm_codegen$Elm$Annotation$bool = $mdgriffith$elm_codegen$Elm$Annotation$typed_fn(_List_Nil, "Bool", _List_Nil);
    var $author$project$Gen$Dict$values_ = {
        ci: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "diff"
        }),
        gT: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ]))),
            q: _List_fromArray(["Dict"]),
            r: "empty"
        }),
        cN: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$bool),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "filter"
        }),
        cR: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b"))),
            q: _List_fromArray(["Dict"]),
            r: "foldl"
        }),
        cS: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b"))),
            q: _List_fromArray(["Dict"]),
            r: "foldr"
        }),
        c$: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("comparable"), $mdgriffith$elm_codegen$Elm$Annotation$var("v")))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "fromList"
        }),
        c4: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$var("v")))),
            q: _List_fromArray(["Dict"]),
            r: "get"
        }),
        dt: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "insert"
        }),
        dw: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "intersect"
        }),
        dy: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$bool)),
            q: _List_fromArray(["Dict"]),
            r: "isEmpty"
        }),
        dD: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$var("k")))),
            q: _List_fromArray(["Dict"]),
            r: "keys"
        }),
        dP: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("b")),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("b")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "map"
        }),
        d1: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$bool)),
            q: _List_fromArray(["Dict"]),
            r: "member"
        }),
        d5: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("result")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("result")),
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("result")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("result")),
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("result")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$var("result")),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$var("result")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$var("result"))),
            q: _List_fromArray(["Dict"]),
            r: "merge"
        }),
        eB: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]), $mdgriffith$elm_codegen$Elm$Annotation$bool),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ]))))),
            q: _List_fromArray(["Dict"]),
            r: "partition"
        }),
        eR: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "remove"
        }),
        fj: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "singleton"
        }),
        fk: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$int)),
            q: _List_fromArray(["Dict"]),
            r: "size"
        }),
        fW: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$tuple_fn($mdgriffith$elm_codegen$Elm$Annotation$var("k"), $mdgriffith$elm_codegen$Elm$Annotation$var("v"))))),
            q: _List_fromArray(["Dict"]),
            r: "toList"
        }),
        gg: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ])),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "union"
        }),
        h0: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$var("v"))
                ]), $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$var("v"))),
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$var("comparable"),
                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
            ])))),
            q: _List_fromArray(["Dict"]),
            r: "update"
        }),
        gk: $mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Dict"]), "Dict", _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                    $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                ]))
            ]), $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$var("v")))),
            q: _List_fromArray(["Dict"]),
            r: "values"
        })
    };
    var $author$project$Press$Generate$renderPath_fn = function (path, queryParams, paramValues) {
        var addParamString = function (base) {
            return $author$project$Press$Generate$hasNoParams(queryParams) ? $author$project$Gen$AppUrl$toString($mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                _Utils_Tuple2("path", base),
                _Utils_Tuple2("queryParameters", $author$project$Gen$Dict$empty),
                _Utils_Tuple2("fragment", $mdgriffith$elm_codegen$Elm$nothing)
            ]))) : (queryParams.S ? $author$project$Gen$AppUrl$toString($mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                _Utils_Tuple2("path", base),
                _Utils_Tuple2("queryParameters", $mdgriffith$elm_codegen$Elm$get_fn("params", paramValues)),
                _Utils_Tuple2("fragment", $mdgriffith$elm_codegen$Elm$nothing)
            ]))) : $author$project$Gen$AppUrl$toString($mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                _Utils_Tuple2("path", base),
                _Utils_Tuple2("queryParameters", $elm$core$Set$foldl_fn_unwrapped(function (field, dict) {
                    return $mdgriffith$elm_codegen$Elm$Op$pipe_fn($mdgriffith$elm_codegen$Elm$apply_fn($author$project$Gen$Dict$values_.dt, _List_fromArray([
                        $mdgriffith$elm_codegen$Elm$string(field),
                        $mdgriffith$elm_codegen$Elm$get_fn(field, paramValues)
                    ])), dict);
                }, $author$project$Gen$Dict$empty, queryParams.N)),
                _Utils_Tuple2("fragment", $mdgriffith$elm_codegen$Elm$nothing)
            ]))));
        };
        return addParamString($mdgriffith$elm_codegen$Elm$list($elm$core$List$map_fn(function (piece) {
            if (!piece.$) {
                var token = piece.a;
                return $mdgriffith$elm_codegen$Elm$string(token);
            }
            else {
                var _var = piece.a;
                return $mdgriffith$elm_codegen$Elm$get_fn(_var, paramValues);
            }
        }, path)));
    }, $author$project$Press$Generate$renderPath = F3($author$project$Press$Generate$renderPath_fn);
    var $author$project$Press$Generate$urlEncoder = function (routes) {
        return _List_fromArray([
            $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn({
                aN: true,
                av: $elm$core$Maybe$Just("Encodings")
            }, $mdgriffith$elm_codegen$Elm$declaration_fn("toUrl", $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Route")
            ]), $mdgriffith$elm_codegen$Elm$Annotation$string), $mdgriffith$elm_codegen$Elm$fn_fn(_Utils_Tuple2("route", $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Route"))), function (route) {
                return $mdgriffith$elm_codegen$Elm$Case$custom_fn(route, $mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Route"), $elm$core$List$map_fn(function (individualRoute) {
                    var name = individualRoute.r;
                    var pattern = individualRoute.aC;
                    return $mdgriffith$elm_codegen$Elm$Case$branch1_fn(name, _Utils_Tuple2("params", $author$project$Press$Generate$paramType(individualRoute)), function (params) {
                        var _v0 = pattern;
                        var path = _v0.hy;
                        var queryParams = _v0.am;
                        return $author$project$Press$Generate$renderPath_fn(path, queryParams, params);
                    });
                }, routes));
            }))))
        ]);
    };
    var $author$project$Gen$AppUrl$fromUrl = function (fromUrlArg) {
        return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$value({
            p: $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["Url"]), "Url", _List_Nil)
            ]), $mdgriffith$elm_codegen$Elm$Annotation$namedWith_fn(_List_fromArray(["AppUrl"]), "AppUrl", _List_Nil))),
            q: _List_fromArray(["AppUrl"]),
            r: "fromUrl"
        }), _List_fromArray([fromUrlArg]));
    };
    var $elm$core$List$filter_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            if (f(xs.a)) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        return tmp.
            b;
    }, $elm$core$List$filter = F2($elm$core$List$filter_fn);
    var $author$project$Press$Generate$surround_fn = function (first, last, middle) {
        return _Utils_ap(first, _Utils_ap(middle, last));
    }, $author$project$Press$Generate$surround = F3($author$project$Press$Generate$surround_fn);
    var $mdgriffith$elm_codegen$Internal$Compiler$Block = function (a) {
        return { $: 2, a: a };
    };
    var $mdgriffith$elm_codegen$Elm$unsafe = function (source) {
        return $mdgriffith$elm_codegen$Internal$Compiler$Block($elm$core$String$trim(source));
    };
    var $author$project$Press$Generate$wrapList = function (fields) {
        if (!fields.b) {
            return "[]";
        }
        else {
            return $author$project$Press$Generate$surround_fn("[ ", " ]", $elm$core$String$join_fn(", ", fields));
        }
    };
    var $author$project$Press$Generate$wrapRecord = function (fields) {
        if (!fields.b) {
            return "{}";
        }
        else {
            return $author$project$Press$Generate$surround_fn("\n                { ", "\n                }", $elm$core$String$join_fn("\n                , ", fields));
        }
    };
    var $author$project$Press$Generate$parseAppUrl = function (routes) {
        var paths = $elm$core$String$join_fn("\n\n", $elm$core$List$concatMap_fn(function (route) {
            var _v0 = route.aq;
            if (!_v0.$) {
                var _v1 = route.aC;
                var path = _v1.hy;
                var queryParams = _v1.am;
                var queryParamFields = function () {
                    if (queryParams.S) {
                        return _List_fromArray(["params = appUrl.queryParameters"]);
                    }
                    else {
                        var _v4 = $elm$core$Set$toList(queryParams.N);
                        if (!_v4.b) {
                            return _List_Nil;
                        }
                        else {
                            var specificFields = _v4;
                            return $elm$core$List$map_fn(function (field) {
                                return field + (" = getSingle " + (field + " appUrl.queryParameters"));
                            }, specificFields);
                        }
                    }
                }();
                var fieldsFromPath = $elm$core$List$filterMap_fn(function (piece) {
                    if (!piece.$) {
                        var token = piece.a;
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var _var = piece.a;
                        return $elm$core$Maybe$Just(_var + (" = " + _var));
                    }
                }, path);
                var constructedRoute = route.r + (" " + $author$project$Press$Generate$wrapRecord(_Utils_ap(fieldsFromPath, queryParamFields)));
                var branch = $author$project$Press$Generate$wrapList($elm$core$List$map_fn(function (piece) {
                    if (!piece.$) {
                        var token = piece.a;
                        return $author$project$Press$Generate$surround_fn("\"", "\"", token);
                    }
                    else {
                        var _var = piece.a;
                        return _var;
                    }
                }, path));
                return _List_fromArray(["        " + (branch + (" ->\n            Just <| " + constructedRoute))]);
            }
            else {
                var files = _v0.a.gY;
                return $elm$core$List$map_fn(function (file) {
                    var pieces = $elm$core$String$join_fn(", ", $elm$core$List$map_fn(A2($author$project$Press$Generate$surround, "\"", "\""), $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$String$split_fn("/", file.hy))));
                    var constructedRoute = route.r + (" { sourceUrl = \"/assets" + (file.hy + ".md\" }"));
                    return "        [ " + (pieces + (" ] ->\n            Just <| " + constructedRoute));
                }, files);
            }
        }, $elm$core$List$reverse(routes)));
        return $mdgriffith$elm_codegen$Elm$unsafe($elm$core$String$replace_fn("${paths}", paths, "\n\nparseAppUrl : AppUrl.AppUrl -> Maybe Route\nparseAppUrl appUrl = \n    case appUrl.path of\n${paths}\n\n        _ -> \n            Nothing\n"));
    };
    var $author$project$Press$Generate$urlParser = function (routes) {
        return _List_fromArray([
            $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn({
                aN: true,
                av: $elm$core$Maybe$Just("Encodings")
            }, $mdgriffith$elm_codegen$Elm$declaration_fn("parse", $mdgriffith$elm_codegen$Elm$withType_fn($mdgriffith$elm_codegen$Elm$Annotation$function_fn(_List_fromArray([$author$project$Gen$Url$annotation_.af]), $mdgriffith$elm_codegen$Elm$Annotation$maybe($mdgriffith$elm_codegen$Elm$Annotation$named_fn(_List_Nil, "Route"))), $mdgriffith$elm_codegen$Elm$fn_fn(_Utils_Tuple2("url", $elm$core$Maybe$Just($author$project$Gen$Url$annotation_.af)), function (url) {
                var appUrl = $author$project$Gen$AppUrl$fromUrl(url);
                return $mdgriffith$elm_codegen$Elm$apply_fn($mdgriffith$elm_codegen$Elm$val("parseAppUrl"), _List_fromArray([appUrl]));
            })))),
            $author$project$Press$Generate$parseAppUrl(routes),
            $mdgriffith$elm_codegen$Elm$unsafe("\ngetSingle : String -> AppUrl.QueryParameters -> Maybe String\ngetSingle field appUrlParams =\n    case Dict.get field appUrlParams of\n        Nothing ->\n            Nothing\n\n        Just [] ->\n            Nothing\n\n        Just (single :: _) ->\n            Just single\n\n\ngetList : String -> AppUrl.QueryParameters -> List String\ngetList field appUrlParams =\n    Dict.get field appUrlParams\n        |> Maybe.withDefault []\n\n")
        ]);
    };
    var $author$project$Press$Generate$generateRoutes = function (routes) {
        return $mdgriffith$elm_codegen$Elm$fileWith_fn(_List_fromArray(["Route"]), {
            a1: _List_Nil,
            a5: function (groups) {
                return $elm$core$List$map_fn($mdgriffith$elm_codegen$Elm$docs, _List_sortBy_fn(function (doc) {
                    var _v0 = doc.av;
                    if (_v0.$ === 1) {
                        return 0;
                    }
                    else {
                        switch (_v0.a) {
                            case "Route":
                                return 1;
                            case "Params":
                                return 2;
                            case "Encodings":
                                return 3;
                            default:
                                return 4;
                        }
                    }
                }, groups));
            }
        }, $elm$core$List$concat(_List_fromArray([
            _List_fromArray([
                $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn({
                    aN: true,
                    av: $elm$core$Maybe$Just("Route")
                }, $mdgriffith$elm_codegen$Elm$customType_fn("Route", $elm$core$List$map_fn(function (route) {
                    return $mdgriffith$elm_codegen$Elm$Variant_fn(route.r, _List_fromArray([
                        $author$project$Press$Generate$paramType(route)
                    ]));
                }, routes)))
            ]),
            $elm$core$List$map_fn(function (route) {
                return $mdgriffith$elm_codegen$Internal$Compiler$exposeWith_fn({
                    aN: false,
                    av: $elm$core$Maybe$Just("Params")
                }, $mdgriffith$elm_codegen$Elm$alias_fn(route.r + "_Params", $author$project$Press$Generate$paramType(route)));
            }, routes),
            $author$project$Press$Generate$urlEncoder(routes),
            $author$project$Press$Generate$urlParser(routes)
        ])));
    };
    var $dillonkearns$elm_markdown$Markdown$Block$foldl_fn = function (_function, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var block = list.a;
                var remainingBlocks = list.b;
                switch (block.$) {
                    case 0:
                        var html = block.a;
                        if (!html.$) {
                            var children = html.c;
                            var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = _Utils_ap(children, remainingBlocks);
                            _function = $temp$function;
                            acc = $temp$acc;
                            list = $temp$list;
                            continue foldl;
                        }
                        else {
                            var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                            _function = $temp$function;
                            acc = $temp$acc;
                            list = $temp$list;
                            continue foldl;
                        }
                    case 1:
                        var blocks = block.b;
                        var childBlocks = $elm$core$List$concatMap_fn(function (_v3) {
                            var children = _v3.b;
                            return children;
                        }, blocks);
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = _Utils_ap(childBlocks, remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 2:
                        var blocks = block.c;
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = _Utils_ap($elm$core$List$concat(blocks), remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 3:
                        var blocks = block.a;
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = _Utils_ap(blocks, remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 4:
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 5:
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 6:
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 7:
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    default:
                        var $temp$function = _function, $temp$acc = A2(_function, block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$Block$foldl_fn_unwrapped = function (_function, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var block = list.a;
                var remainingBlocks = list.b;
                switch (block.$) {
                    case 0:
                        var html = block.a;
                        if (!html.$) {
                            var children = html.c;
                            var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = _Utils_ap(children, remainingBlocks);
                            _function = $temp$function;
                            acc = $temp$acc;
                            list = $temp$list;
                            continue foldl;
                        }
                        else {
                            var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                            _function = $temp$function;
                            acc = $temp$acc;
                            list = $temp$list;
                            continue foldl;
                        }
                    case 1:
                        var blocks = block.b;
                        var childBlocks = $elm$core$List$concatMap_fn(function (_v3) {
                            var children = _v3.b;
                            return children;
                        }, blocks);
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = _Utils_ap(childBlocks, remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 2:
                        var blocks = block.c;
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = _Utils_ap($elm$core$List$concat(blocks), remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 3:
                        var blocks = block.a;
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = _Utils_ap(blocks, remainingBlocks);
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 4:
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 5:
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 6:
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    case 7:
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                    default:
                        var $temp$function = _function, $temp$acc = _function(block, acc), $temp$list = remainingBlocks;
                        _function = $temp$function;
                        acc = $temp$acc;
                        list = $temp$list;
                        continue foldl;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$Block$foldl = F3($dillonkearns$elm_markdown$Markdown$Block$foldl_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText = function (block) {
        switch (block.$) {
            case 5:
                var inlines = block.a;
                return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
            case 0:
                var html = block.a;
                if (!html.$) {
                    var blocks = html.c;
                    return $dillonkearns$elm_markdown$Markdown$Block$foldl_fn_unwrapped(function (nestedBlock, soFar) {
                        return _Utils_ap(soFar, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(nestedBlock));
                    }, "", blocks);
                }
                else {
                    return "";
                }
            case 1:
                var items = block.b;
                return $elm$core$String$join_fn("\n", $elm$core$List$map_fn(function (_v4) {
                    var blocks = _v4.b;
                    return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
                }, items));
            case 2:
                var items = block.c;
                return $elm$core$String$join_fn("\n", $elm$core$List$map_fn(function (blocks) {
                    return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
                }, items));
            case 3:
                var blocks = block.a;
                return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
            case 4:
                var inlines = block.b;
                return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
            case 6:
                var header = block.a;
                var rows = block.b;
                return $elm$core$String$join_fn("\n", $elm$core$List$concat(_List_fromArray([
                    $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Block$extractInlineText, $elm$core$List$map_fn(function ($) {
                        return $.dE;
                    }, header)),
                    $elm$core$List$concat($elm$core$List$map_fn($elm$core$List$map($dillonkearns$elm_markdown$Markdown$Block$extractInlineText), rows))
                ])));
            case 7:
                var body = block.a.gA;
                return body;
            default:
                return "";
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Block$extractInlineText = function (inlines) {
        return $elm$core$List$foldl_fn($dillonkearns$elm_markdown$Markdown$Block$extractTextHelp, "", inlines);
    };
    var $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp_fn = function (inline, text) {
        switch (inline.$) {
            case 7:
                var str = inline.a;
                return _Utils_ap(text, str);
            case 8:
                return text + " ";
            case 6:
                var str = inline.a;
                return _Utils_ap(text, str);
            case 1:
                var inlines = inline.c;
                return _Utils_ap(text, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
            case 2:
                var inlines = inline.c;
                return _Utils_ap(text, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
            case 0:
                var html = inline.a;
                if (!html.$) {
                    var blocks = html.c;
                    return $dillonkearns$elm_markdown$Markdown$Block$foldl_fn_unwrapped(function (block, soFar) {
                        return _Utils_ap(soFar, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(block));
                    }, text, blocks);
                }
                else {
                    return text;
                }
            case 4:
                var inlines = inline.a;
                return _Utils_ap(text, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
            case 3:
                var inlines = inline.a;
                return _Utils_ap(text, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
            default:
                var inlines = inline.a;
                return _Utils_ap(text, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
        }
    }, $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp = F2($dillonkearns$elm_markdown$Markdown$Block$extractTextHelp_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine = { $: 10 };
    var $dillonkearns$elm_markdown$Markdown$Block$BlockQuote = function (a) {
        return { $: 3, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote = function (a) {
        return { $: 11, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Cdata = function (a) {
        return { $: 4, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$CodeBlock = function (a) {
        return { $: 7, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$CodeSpan = function (a) {
        return { $: 6, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$CompletedTask = 2;
    var $dillonkearns$elm_markdown$Markdown$Block$Emphasis = function (a) {
        return { $: 3, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Inline$Emphasis_fn = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Inline$Emphasis = F2($dillonkearns$elm_markdown$Markdown$Inline$Emphasis_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock = { $: 0 };
    var $elm$parser$Parser$Expecting = function (a) {
        return { $: 0, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak = { $: 8 };
    var $dillonkearns$elm_markdown$Markdown$Block$Heading_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Block$Heading = F2($dillonkearns$elm_markdown$Markdown$Block$Heading_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$Heading_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$RawBlock$Heading = F2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$Html = function (a) {
        return { $: 2, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock = function (a) {
        return { $: 0, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$HtmlComment = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration = F2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$HtmlElement_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Block$HtmlElement = F3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$HtmlInline = function (a) {
        return { $: 0, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Image_fn = function (a, b, c) {
        return { $: 2, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Block$Image = F3($dillonkearns$elm_markdown$Markdown$Block$Image_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask = 1;
    var $dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock = function (a) {
        return { $: 6, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem = function (a) {
        return { $: 2, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Link_fn = function (a, b, c) {
        return { $: 1, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Block$Link = F3($dillonkearns$elm_markdown$Markdown$Block$Link_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$ListItem_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Block$ListItem = F2($dillonkearns$elm_markdown$Markdown$Block$ListItem_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$NoTask = 0;
    var $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$OrderedList_fn = function (a, b, c) {
        return { $: 2, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Block$OrderedList = F3($dillonkearns$elm_markdown$Markdown$Block$OrderedList_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn = function (a, b, c, d, e, f) {
        return { $: 4, a: a, b: b, c: c, d: d, e: e, f: f };
    }, $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock = F6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$Paragraph = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote = function (a) {
        return { $: 12, a: a };
    };
    var $elm$parser$Parser$Problem = function (a) {
        return { $: 12, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction = function (a) {
        return { $: 2, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Strikethrough = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Strong = function (a) {
        return { $: 4, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Table_fn = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Block$Table = F2($dillonkearns$elm_markdown$Markdown$Block$Table_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$Table = function (a) {
        return { $: 8, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Table$Table_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Table$Table = F2($dillonkearns$elm_markdown$Markdown$Table$Table_fn);
    var $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow = F2($dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow_fn);
    var $dillonkearns$elm_markdown$Markdown$Block$Text = function (a) {
        return { $: 7, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Block$ThematicBreak = { $: 8 };
    var $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak = { $: 7 };
    var $dillonkearns$elm_markdown$Markdown$Block$UnorderedList_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$Block$UnorderedList = F2($dillonkearns$elm_markdown$Markdown$Block$UnorderedList_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn = function (a, b, c, d) {
        return { $: 3, a: a, b: b, c: c, d: d };
    }, $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock = F4($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn);
    var $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines = $elm$core$Basics$identity;
    var $dillonkearns$elm_markdown$Markdown$Parser$addReference_fn = function (state, linkRef) {
        return {
            a: _List_Cons(linkRef, state.a),
            b: state.b
        };
    }, $dillonkearns$elm_markdown$Markdown$Parser$addReference = F2($dillonkearns$elm_markdown$Markdown$Parser$addReference_fn);
    var $elm$parser$Parser$Advanced$andThen_fn = function (callback, _v0) {
        var parseA = _v0;
        return function (s0) {
            var _v1 = parseA(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                var _v2 = callback(a);
                var parseB = _v2;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, b, s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$andThen = F2($elm$parser$Parser$Advanced$andThen_fn);
    var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(false, x);
            }
            else {
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(false, a, s1);
            }
        };
    };
    var $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab = function (_char) {
        switch (_char) {
            case " ":
                return true;
            case "\t":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Parser$Token$carriageReturn = $elm$parser$Parser$Advanced$Token_fn("\r", $elm$parser$Parser$Expecting("a carriage return"));
    var $dillonkearns$elm_markdown$Parser$Token$newline = $elm$parser$Parser$Advanced$Token_fn("\n", $elm$parser$Parser$Expecting("a newline"));
    var $dillonkearns$elm_markdown$Whitespace$lineEnd = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$carriageReturn), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
            $elm$parser$Parser$Advanced$succeed(0)
        ])))
    ]));
    var $dillonkearns$elm_markdown$Markdown$Parser$blankLine = $elm$parser$Parser$Advanced$map_fn(function (_v0) {
        return $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine;
    }, $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)), $dillonkearns$elm_markdown$Whitespace$lineEnd));
    var $dillonkearns$elm_markdown$Parser$Token$space = $elm$parser$Parser$Advanced$Token_fn(" ", $elm$parser$Parser$Expecting("a space"));
    var $dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts = _List_fromArray([
        $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(">", $elm$parser$Parser$Expecting(">"))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(">", $elm$parser$Parser$Expecting(" >"))),
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(" >", $elm$parser$Parser$Expecting("  >"))),
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("  >", $elm$parser$Parser$Expecting("   >")))
        ])))
    ]);
    var $dillonkearns$elm_markdown$Whitespace$isLineEnd = function (_char) {
        switch (_char) {
            case "\n":
                return true;
            case "\r":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd = $elm$parser$Parser$Advanced$chompWhile(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd));
    var $dillonkearns$elm_markdown$Helpers$endOfFile = $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("the end of the input"));
    var $dillonkearns$elm_markdown$Helpers$lineEndOrEnd = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$dillonkearns$elm_markdown$Whitespace$lineEnd, $dillonkearns$elm_markdown$Helpers$endOfFile]));
    var $dillonkearns$elm_markdown$Markdown$Parser$blockQuote = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote), $elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
        $elm$parser$Parser$Advanced$succeed(0)
    ]))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Markdown$Parser$problemToString = function (problem) {
        switch (problem.$) {
            case 0:
                var string = problem.a;
                return "Expecting " + string;
            case 1:
                return "Expecting int";
            case 2:
                return "Expecting hex";
            case 3:
                return "Expecting octal";
            case 4:
                return "Expecting binary";
            case 5:
                return "Expecting float";
            case 6:
                return "Expecting number";
            case 7:
                return "Expecting variable";
            case 8:
                var string = problem.a;
                return "Expecting symbol " + string;
            case 9:
                var string = problem.a;
                return "Expecting keyword " + string;
            case 10:
                return "Expecting keyword end";
            case 11:
                return "Unexpected char";
            case 12:
                var problemDescription = problem.a;
                return problemDescription;
            default:
                return "Bad repeat";
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString = function (deadEnd) {
        return "Problem at row " + ($elm$core$String$fromInt(deadEnd.hI) + ("\n" + $dillonkearns$elm_markdown$Markdown$Parser$problemToString(deadEnd.hA)));
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString = function (deadEnds) {
        return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
    };
    var $elm$core$String$endsWith = _String_endsWith;
    var $dillonkearns$elm_markdown$Markdown$Parser$endWithOpenBlockOrParagraph = function (block) {
        endWithOpenBlockOrParagraph: while (true) {
            switch (block.$) {
                case 1:
                    var str = block.a;
                    return !_String_endsWith_fn(str, "\n");
                case 12:
                    var blocks = block.a;
                    if (blocks.b) {
                        var last = blocks.a;
                        var $temp$block = last;
                        block = $temp$block;
                        continue endWithOpenBlockOrParagraph;
                    }
                    else {
                        return false;
                    }
                case 4:
                    var blockslist = block.e;
                    if (blockslist.b) {
                        var blocks = blockslist.a;
                        if (blocks.b) {
                            var last = blocks.a;
                            var $temp$block = last;
                            block = $temp$block;
                            continue endWithOpenBlockOrParagraph;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                case 0:
                    return true;
                default:
                    return false;
            }
        }
    };
    var $dillonkearns$elm_markdown$HtmlParser$Cdata = function (a) {
        return { $: 3, a: a };
    };
    var $dillonkearns$elm_markdown$HtmlParser$Element_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$HtmlParser$Element = F3($dillonkearns$elm_markdown$HtmlParser$Element_fn);
    var $dillonkearns$elm_markdown$HtmlParser$Text = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter = $elm$parser$Parser$Expecting("at least 1 tag name character");
    var $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter = function (c) {
        switch (c) {
            case " ":
                return false;
            case "\r":
                return false;
            case "\n":
                return false;
            case "\t":
                return false;
            case "/":
                return false;
            case "<":
                return false;
            case ">":
                return false;
            case "\"":
                return false;
            case "'":
                return false;
            case "=":
                return false;
            default:
                return true;
        }
    };
    var $dillonkearns$elm_markdown$HtmlParser$tagName = $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (name, _v0) {
        return $elm$core$String$toLower(name);
    }, $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($dillonkearns$elm_markdown$HtmlParser$tagNameCharacter, $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$tagNameCharacter)));
    var $dillonkearns$elm_markdown$HtmlParser$attributeName = $dillonkearns$elm_markdown$HtmlParser$tagName;
    var $dillonkearns$elm_markdown$HtmlParser$symbol = function (str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$ExpectingSymbol(str)));
    };
    var $dillonkearns$elm_markdown$HtmlParser$entities = $elm$core$Dict$fromList(_List_fromArray([
        _Utils_Tuple2("amp", "&"),
        _Utils_Tuple2("lt", "<"),
        _Utils_Tuple2("gt", ">"),
        _Utils_Tuple2("apos", "'"),
        _Utils_Tuple2("quot", "\"")
    ]));
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $elm$core$Result$fromMaybe_fn = function (err, maybe) {
        if (!maybe.$) {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            return $elm$core$Result$Err(err);
        }
    }, $elm$core$Result$fromMaybe = F2($elm$core$Result$fromMaybe_fn);
    var $elm$core$Basics$pow = _Basics_pow;
    var $rtfeldman$elm_hex$Hex$fromStringHelp_fn = function (position, chars, accumulated) {
        fromStringHelp: while (true) {
            if (!chars.b) {
                return $elm$core$Result$Ok(accumulated);
            }
            else {
                var _char = chars.a;
                var rest = chars.b;
                switch (_char) {
                    case "0":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated;
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "1":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + _Basics_pow_fn(16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "2":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (2 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "3":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (3 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "4":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (4 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "5":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (5 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "6":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (6 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "7":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (7 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "8":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (8 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "9":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (9 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "a":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (10 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "b":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (11 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "c":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (12 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "d":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (13 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "e":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (14 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "f":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + (15 * _Basics_pow_fn(16, position));
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    default:
                        var nonHex = _char;
                        return $elm$core$Result$Err($elm$core$String$fromChar(nonHex) + " is not a valid hexadecimal character.");
                }
            }
        }
    }, $rtfeldman$elm_hex$Hex$fromStringHelp = F3($rtfeldman$elm_hex$Hex$fromStringHelp_fn);
    var $elm$core$List$tail = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(xs);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function (string) {
        return _String_foldr_fn($elm$core$List$cons, _List_Nil, string);
    };
    var $rtfeldman$elm_hex$Hex$fromString = function (str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Result$Err("Empty strings are not valid hexadecimal strings.");
        }
        else {
            var result = function () {
                if (_String_startsWith_fn("-", str)) {
                    var list = $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$List$tail($elm$core$String$toList(str)));
                    return $elm$core$Result$map_fn($elm$core$Basics$negate, $rtfeldman$elm_hex$Hex$fromStringHelp_fn($elm$core$List$length(list) - 1, list, 0));
                }
                else {
                    return $rtfeldman$elm_hex$Hex$fromStringHelp_fn($elm$core$String$length(str) - 1, $elm$core$String$toList(str), 0);
                }
            }();
            var formatError = function (err) {
                return $elm$core$String$join_fn(" ", _List_fromArray(["\"" + (str + "\""), "is not a valid hexadecimal string because", err]));
            };
            return $elm$core$Result$mapError_fn(formatError, result);
        }
    };
    var $elm$core$String$toInt = _String_toInt;
    var $dillonkearns$elm_markdown$HtmlParser$decodeEscape = function (s) {
        return _String_startsWith_fn("#x", s) ? $elm$core$Result$mapError_fn($elm$parser$Parser$Problem, $elm$core$Result$map_fn($elm$core$Char$fromCode, $rtfeldman$elm_hex$Hex$fromString($elm$core$String$dropLeft_fn(2, s)))) : (_String_startsWith_fn("#", s) ? $elm$core$Result$fromMaybe_fn($elm$parser$Parser$Problem("Invalid escaped character: " + s), $elm$core$Maybe$map_fn($elm$core$Char$fromCode, $elm$core$String$toInt($elm$core$String$dropLeft_fn(1, s)))) : $elm$core$Result$fromMaybe_fn($elm$parser$Parser$Problem("No entity named \"&" + (s + ";\" found.")), $elm$core$Dict$get_fn(s, $dillonkearns$elm_markdown$HtmlParser$entities)));
    };
    var $elm$parser$Parser$Advanced$problem = function (x) {
        return function (s) {
            return $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, x));
        };
    };
    var $dillonkearns$elm_markdown$HtmlParser$escapedChar = function (end_) {
        var process = function (entityStr) {
            var _v0 = $dillonkearns$elm_markdown$HtmlParser$decodeEscape(entityStr);
            if (!_v0.$) {
                var c = _v0.a;
                return $elm$parser$Parser$Advanced$succeed(c);
            }
            else {
                var e = _v0.a;
                return $elm$parser$Parser$Advanced$problem(e);
            }
        };
        var isEntityChar = function (c) {
            return (!_Utils_eq(c, end_)) && (c !== ";");
        };
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol("&")), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$andThen_fn(process, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn(isEntityChar, $elm$parser$Parser$Expecting("an entity character")), $elm$parser$Parser$Advanced$chompWhile(isEntityChar)))), $dillonkearns$elm_markdown$HtmlParser$symbol(";")));
    };
    var $dillonkearns$elm_markdown$HtmlParser$textStringStep_fn = function (closingChar, predicate, accum) {
        return $elm$parser$Parser$Advanced$andThen_fn(function (soFar) {
            return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$map_fn(function (escaped) {
                    return $elm$parser$Parser$Advanced$Loop(_Utils_ap(accum, _Utils_ap(soFar, $elm$core$String$fromChar(escaped))));
                }, $dillonkearns$elm_markdown$HtmlParser$escapedChar(closingChar)),
                $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(_Utils_ap(accum, soFar)))
            ]));
        }, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompWhile(predicate)));
    }, $dillonkearns$elm_markdown$HtmlParser$textStringStep = F3($dillonkearns$elm_markdown$HtmlParser$textStringStep_fn);
    var $dillonkearns$elm_markdown$HtmlParser$textString = function (closingChar) {
        var predicate = function (c) {
            return (!_Utils_eq(c, closingChar)) && (c !== "&");
        };
        return $elm$parser$Parser$Advanced$loop_fn("", A2($dillonkearns$elm_markdown$HtmlParser$textStringStep, closingChar, predicate));
    };
    var $dillonkearns$elm_markdown$HtmlParser$attributeValue = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol("\"")), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$textString("\""), $dillonkearns$elm_markdown$HtmlParser$symbol("\""))),
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol("'")), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$textString("'"), $dillonkearns$elm_markdown$HtmlParser$symbol("'")))
    ]));
    var $dillonkearns$elm_markdown$HtmlParser$keepOldest_fn = function (_new, mValue) {
        if (!mValue.$) {
            var v = mValue.a;
            return $elm$core$Maybe$Just(v);
        }
        else {
            return $elm$core$Maybe$Just(_new);
        }
    }, $dillonkearns$elm_markdown$HtmlParser$keepOldest = F2($dillonkearns$elm_markdown$HtmlParser$keepOldest_fn);
    var $dillonkearns$elm_markdown$HtmlParser$isWhitespace = function (c) {
        switch (c) {
            case " ":
                return true;
            case "\r":
                return true;
            case "\n":
                return true;
            case "\t":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$HtmlParser$whiteSpace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace);
    var $dillonkearns$elm_markdown$HtmlParser$attributesStep = function (attrs) {
        var process = F2(function (name, value) {
            return $elm$parser$Parser$Advanced$Loop($elm$core$Dict$update_fn($elm$core$String$toLower(name), $dillonkearns$elm_markdown$HtmlParser$keepOldest(value), attrs));
        });
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(process), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$attributeName, $dillonkearns$elm_markdown$HtmlParser$whiteSpace), $dillonkearns$elm_markdown$HtmlParser$symbol("=")), $dillonkearns$elm_markdown$HtmlParser$whiteSpace)), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$attributeValue, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
            $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(attrs))
        ]));
    };
    var $dillonkearns$elm_markdown$HtmlParser$attributes = $elm$parser$Parser$Advanced$map_fn(A2($elm$core$Dict$foldl, F3(function (key, value, accum) {
        return _List_Cons({ r: key, h1: value }, accum);
    }), _List_Nil), $elm$parser$Parser$Advanced$loop_fn($elm$core$Dict$empty, $dillonkearns$elm_markdown$HtmlParser$attributesStep));
    var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
        return function (s) {
            var _v0 = _Parser_findSubString_fn(str, s.g, s.hI, s.b1, s.bh);
            var newOffset = _v0.a;
            var newRow = _v0.b;
            var newCol = _v0.c;
            var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.bh) : newOffset;
            return $elm$parser$Parser$Advanced$Good_fn(_Utils_cmp(s.g, adjustedOffset) < 0, 0, { b1: newCol, i: s.i, m: s.m, g: adjustedOffset, hI: newRow, bh: s.bh });
        };
    };
    var $dillonkearns$elm_markdown$HtmlParser$cdata = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol("<![CDATA[")), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("]]>")), $dillonkearns$elm_markdown$HtmlParser$symbol("]]>")));
    var $dillonkearns$elm_markdown$HtmlParser$childrenStep_fn = function (options, accum) {
        return $elm$parser$Parser$Advanced$map_fn(function (f) {
            return f(accum);
        }, $elm$parser$Parser$Advanced$oneOf(options));
    }, $dillonkearns$elm_markdown$HtmlParser$childrenStep = F2($dillonkearns$elm_markdown$HtmlParser$childrenStep_fn);
    var $dillonkearns$elm_markdown$HtmlParser$fail = function (str) {
        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(str));
    };
    var $dillonkearns$elm_markdown$HtmlParser$closingTag = function (startTagName) {
        var closingTagName = $elm$parser$Parser$Advanced$andThen_fn(function (endTagName) {
            return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(0) : $dillonkearns$elm_markdown$HtmlParser$fail("tag name mismatch: " + (startTagName + (" and " + endTagName)));
        }, $dillonkearns$elm_markdown$HtmlParser$tagName);
        return $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$symbol("</"), $dillonkearns$elm_markdown$HtmlParser$whiteSpace), closingTagName), $dillonkearns$elm_markdown$HtmlParser$whiteSpace), $dillonkearns$elm_markdown$HtmlParser$symbol(">"));
    };
    var $dillonkearns$elm_markdown$HtmlParser$Comment = function (a) {
        return { $: 2, a: a };
    };
    var $dillonkearns$elm_markdown$HtmlParser$toToken = function (str) {
        return $elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$Expecting(str));
    };
    var $dillonkearns$elm_markdown$HtmlParser$comment = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Comment), $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$HtmlParser$toToken("<!--"))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("-->")), $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$HtmlParser$toToken("-->"))));
    var $dillonkearns$elm_markdown$HtmlParser$Declaration_fn = function (a, b) {
        return { $: 5, a: a, b: b };
    }, $dillonkearns$elm_markdown$HtmlParser$Declaration = F2($dillonkearns$elm_markdown$HtmlParser$Declaration_fn);
    var $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter = $elm$parser$Parser$Expecting("at least 1 uppercase character");
    var $dillonkearns$elm_markdown$HtmlParser$allUppercase = $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($elm$core$Char$isUpper, $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter), $elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isUpper)));
    var $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace = $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($dillonkearns$elm_markdown$HtmlParser$isWhitespace, $elm$parser$Parser$Expecting("at least one whitespace")), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace));
    var $dillonkearns$elm_markdown$HtmlParser$docType = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Declaration), $dillonkearns$elm_markdown$HtmlParser$symbol("<!")), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$allUppercase, $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr(">")), $dillonkearns$elm_markdown$HtmlParser$symbol(">")));
    var $dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction = function (a) {
        return { $: 4, a: a };
    };
    var $dillonkearns$elm_markdown$HtmlParser$processingInstruction = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction), $dillonkearns$elm_markdown$HtmlParser$symbol("<?")), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntilEndOr("?>")), $dillonkearns$elm_markdown$HtmlParser$symbol("?>")));
    var $dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar = function (c) {
        switch (c) {
            case "<":
                return false;
            case "&":
                return false;
            default:
                return true;
        }
    };
    var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions = _List_fromArray([
        $elm$parser$Parser$Advanced$map_fn(function (_v0) {
            return $elm$parser$Parser$Advanced$Loop(0);
        }, $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar, $elm$parser$Parser$Expecting("is not & or <")), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar))),
        $elm$parser$Parser$Advanced$map_fn(function (_v1) {
            return $elm$parser$Parser$Advanced$Loop(0);
        }, $dillonkearns$elm_markdown$HtmlParser$escapedChar("<")),
        $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(0))
    ]);
    var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep = function (_v0) {
        return $elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions);
    };
    var $dillonkearns$elm_markdown$HtmlParser$textNodeString = $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$loop_fn(0, $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep));
    var $dillonkearns$elm_markdown$HtmlParser$children = function (startTagName) {
        return $elm$parser$Parser$Advanced$loop_fn(_List_Nil, $dillonkearns$elm_markdown$HtmlParser$childrenStep($dillonkearns$elm_markdown$HtmlParser$childrenStepOptions(startTagName)));
    };
    var $dillonkearns$elm_markdown$HtmlParser$childrenStepOptions = function (startTagName) {
        return _List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(F2(function (_v1, accum) {
                return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(accum));
            }), $dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)),
            $elm$parser$Parser$Advanced$andThen_fn(function (text) {
                return $elm$core$String$isEmpty(text) ? $elm$parser$Parser$Advanced$map_fn(F2(function (_v2, accum) {
                    return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(accum));
                }), $dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)) : $elm$parser$Parser$Advanced$succeed(function (accum) {
                    return $elm$parser$Parser$Advanced$Loop(_List_Cons($dillonkearns$elm_markdown$HtmlParser$Text(text), accum));
                });
            }, $dillonkearns$elm_markdown$HtmlParser$textNodeString),
            $elm$parser$Parser$Advanced$map_fn(F2(function (_new, accum) {
                return $elm$parser$Parser$Advanced$Loop(_List_Cons(_new, accum));
            }), $dillonkearns$elm_markdown$HtmlParser$cyclic$html())
        ]);
    };
    var $dillonkearns$elm_markdown$HtmlParser$elementContinuation = function (startTagName) {
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Element(startTagName)), $dillonkearns$elm_markdown$HtmlParser$whiteSpace), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$HtmlParser$attributes, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(function (_v0) {
                return _List_Nil;
            }, $dillonkearns$elm_markdown$HtmlParser$symbol("/>")),
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol(">")), $dillonkearns$elm_markdown$HtmlParser$children(startTagName))
        ])));
    };
    function $dillonkearns$elm_markdown$HtmlParser$cyclic$html() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn($dillonkearns$elm_markdown$HtmlParser$Cdata, $dillonkearns$elm_markdown$HtmlParser$cdata),
            $dillonkearns$elm_markdown$HtmlParser$processingInstruction,
            $dillonkearns$elm_markdown$HtmlParser$comment,
            $dillonkearns$elm_markdown$HtmlParser$docType,
            $dillonkearns$elm_markdown$HtmlParser$cyclic$element()
        ]));
    }
    function $dillonkearns$elm_markdown$HtmlParser$cyclic$element() {
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$HtmlParser$symbol("<")), $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$HtmlParser$elementContinuation, $dillonkearns$elm_markdown$HtmlParser$tagName));
    }
    var $dillonkearns$elm_markdown$HtmlParser$html = $dillonkearns$elm_markdown$HtmlParser$cyclic$html();
    $dillonkearns$elm_markdown$HtmlParser$cyclic$html = function () {
        return $dillonkearns$elm_markdown$HtmlParser$html;
    };
    var $dillonkearns$elm_markdown$HtmlParser$element = $dillonkearns$elm_markdown$HtmlParser$cyclic$element();
    $dillonkearns$elm_markdown$HtmlParser$cyclic$element = function () {
        return $dillonkearns$elm_markdown$HtmlParser$element;
    };
    var $dillonkearns$elm_markdown$Parser$Token$tab = $elm$parser$Parser$Advanced$Token_fn("\t", $elm$parser$Parser$Expecting("a tab"));
    var $dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("   ", $elm$parser$Parser$ExpectingSymbol("Indentation"))),
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(" \t", $elm$parser$Parser$ExpectingSymbol("Indentation"))),
            $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("  \t", $elm$parser$Parser$ExpectingSymbol("Indentation")))
        ])))
    ]));
    var $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock), $dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Markdown$Helpers$isEven = function (_int) {
        return !_Basics_modBy_fn(2, _int);
    };
    var $dillonkearns$elm_markdown$Markdown$Block$Loose = 0;
    var $dillonkearns$elm_markdown$Markdown$Block$Tight = 1;
    var $dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay = function (isTight) {
        return isTight ? 1 : 0;
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn = function (joinWith, string1, string2) {
        var _v0 = _Utils_Tuple2(string1, string2);
        if (_v0.a === "") {
            return string2;
        }
        else {
            if (_v0.b === "") {
                return string1;
            }
            else {
                return _Utils_ap(string1, _Utils_ap(joinWith, string2));
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith = F3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn = function (string1, string2) {
        return string1 + ("\n" + string2);
    }, $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll = F2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser = $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (rawLine, _v0) {
        return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
    }, $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd);
    var $dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser = $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
    var $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem_fn = function (order, intended, marker, body) {
        return { gA: body, g7: intended, hd: marker, hr: order };
    }, $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem = F4($dillonkearns$elm_markdown$Markdown$OrderedList$ListItem_fn);
    var $elm$parser$Parser$Advanced$getCol = function (s) {
        return $elm$parser$Parser$Advanced$Good_fn(false, s.b1, s);
    };
    var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(function (bodyStartPos) {
        return _Utils_Tuple2(bodyStartPos, "");
    }), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore = function (condition) {
        return $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn(condition, $elm$parser$Parser$Problem("Expected one or more character")), $elm$parser$Parser$Advanced$chompWhile(condition));
    };
    var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(F2(function (bodyStartPos, item) {
        return _Utils_Tuple2(bodyStartPos, item);
    })), $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)), $elm$parser$Parser$Advanced$getCol), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Markdown$OrderedList$Dot = 0;
    var $dillonkearns$elm_markdown$Markdown$OrderedList$Paren = 1;
    var $dillonkearns$elm_markdown$Parser$Token$closingParen = $elm$parser$Parser$Advanced$Token_fn(")", $elm$parser$Parser$Expecting("a `)`"));
    var $dillonkearns$elm_markdown$Parser$Token$dot = $elm$parser$Parser$Advanced$Token_fn(".", $elm$parser$Parser$Expecting("a `.`"));
    var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$dot)),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$closingParen))
    ]));
    var $dillonkearns$elm_markdown$Parser$Extra$positiveInteger = $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (str, _v0) {
        return $elm$core$Maybe$withDefault_fn(0, $elm$core$String$toInt(str));
    }, $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($elm$core$Char$isDigit));
    var $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits = $elm$parser$Parser$Advanced$andThen_fn(function (parsed) {
        return (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("Starting numbers must be nine digits or less."));
    }, $dillonkearns$elm_markdown$Parser$Extra$positiveInteger);
    var $dillonkearns$elm_markdown$Whitespace$space = $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$space);
    var $elm$core$List$repeatHelp_fn = function (result, n, value) {
        repeatHelp: while (true) {
            if (n <= 0) {
                return result;
            }
            else {
                var $temp$result = _List_Cons(value, result), $temp$n = n - 1, $temp$value = value;
                result = $temp$result;
                n = $temp$n;
                value = $temp$value;
                continue repeatHelp;
            }
        }
    }, $elm$core$List$repeatHelp = F3($elm$core$List$repeatHelp_fn);
    var $elm$core$List$repeat_fn = function (n, value) {
        return $elm$core$List$repeatHelp_fn(_List_Nil, n, value);
    }, $elm$core$List$repeat = F2($elm$core$List$repeat_fn);
    var $dillonkearns$elm_markdown$Parser$Extra$upTo_fn = function (n, parser) {
        var _v0 = $elm$core$List$repeat_fn(n, parser);
        if (!_v0.b) {
            return $elm$parser$Parser$Advanced$succeed(0);
        }
        else {
            var firstParser = _v0.a;
            var remainingParsers = _v0.b;
            return $elm$core$List$foldl_fn_unwrapped(function (p, parsers) {
                return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                    $elm$parser$Parser$Advanced$ignorer_fn(p, parsers),
                    $elm$parser$Parser$Advanced$succeed(0)
                ]));
            }, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                firstParser,
                $elm$parser$Parser$Advanced$succeed(0)
            ])), remainingParsers);
        }
    }, $dillonkearns$elm_markdown$Parser$Extra$upTo = F2($dillonkearns$elm_markdown$Parser$Extra$upTo_fn);
    var $dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1 = function (parsed) {
        if (parsed === 1) {
            return $elm$parser$Parser$Advanced$succeed(parsed);
        }
        else {
            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("Lists inside a paragraph or after a paragraph without a blank line must start with 1"));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser = function (previousWasBody) {
        return previousWasBody ? $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1, $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Parser$Extra$upTo_fn(3, $dillonkearns$elm_markdown$Whitespace$space)), $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits)) : $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Parser$Extra$upTo_fn(3, $dillonkearns$elm_markdown$Whitespace$space)), $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits);
    };
    var $dillonkearns$elm_markdown$Markdown$OrderedList$parser = function (previousWasBody) {
        var parseSubsequentItem = F5(function (start, order, marker, mid, _v0) {
            var end = _v0.a;
            var body = _v0.b;
            return ((end - mid) <= 4) ? $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem_fn(order, end - start, marker, body) : $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem_fn(order, (mid - start) + 1, marker, _Utils_ap($elm$core$String$repeat_fn((end - mid) - 1, " "), body));
        });
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(parseSubsequentItem), $elm$parser$Parser$Advanced$getCol), $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser(previousWasBody))), $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser)), $elm$parser$Parser$Advanced$getCol), previousWasBody ? $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser])));
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock = function (previousWasBody) {
        return $elm$parser$Parser$Advanced$map_fn(function (item) {
            return $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(true, item.g7, item.hd, item.hr, _List_Nil, item.gA);
        }, $dillonkearns$elm_markdown$Markdown$OrderedList$parser(previousWasBody));
    };
    var $dillonkearns$elm_markdown$Markdown$Inline$CodeInline = function (a) {
        return { $: 2, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak = { $: 1 };
    var $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Inline$Image_fn = function (a, b, c) {
        return { $: 4, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Inline$Image = F3($dillonkearns$elm_markdown$Markdown$Inline$Image_fn);
    var $dillonkearns$elm_markdown$Markdown$Inline$Link_fn = function (a, b, c) {
        return { $: 3, a: a, b: b, c: c };
    }, $dillonkearns$elm_markdown$Markdown$Inline$Link = F3($dillonkearns$elm_markdown$Markdown$Inline$Link_fn);
    var $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough = function (a) {
        return { $: 7, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$Inline$Text = function (a) {
        return { $: 0, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline = function (_v0) {
        var match = _v0;
        var _v1 = match.aq;
        switch (_v1.$) {
            case 0:
                return $dillonkearns$elm_markdown$Markdown$Inline$Text(match.fL);
            case 1:
                return $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak;
            case 2:
                return $dillonkearns$elm_markdown$Markdown$Inline$CodeInline(match.fL);
            case 3:
                var _v2 = _v1.a;
                var text = _v2.a;
                var url = _v2.b;
                return $dillonkearns$elm_markdown$Markdown$Inline$Link_fn(url, $elm$core$Maybe$Nothing, _List_fromArray([
                    $dillonkearns$elm_markdown$Markdown$Inline$Text(text)
                ]));
            case 4:
                var _v3 = _v1.a;
                var url = _v3.a;
                var maybeTitle = _v3.b;
                return $dillonkearns$elm_markdown$Markdown$Inline$Link_fn(url, maybeTitle, $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
            case 5:
                var _v4 = _v1.a;
                var url = _v4.a;
                var maybeTitle = _v4.b;
                return $dillonkearns$elm_markdown$Markdown$Inline$Image_fn(url, maybeTitle, $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
            case 6:
                var model = _v1.a;
                return $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline(model);
            case 7:
                var length = _v1.a;
                return $dillonkearns$elm_markdown$Markdown$Inline$Emphasis_fn(length, $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
            default:
                return $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough($dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.z));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines = function (matches) {
        return $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline, matches);
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$Match = $elm$core$Basics$identity;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch_fn = function (parentMatch, childMatch) {
        return { j: childMatch.j - parentMatch.B, z: childMatch.z, s: childMatch.s - parentMatch.B, fL: childMatch.fL, G: childMatch.G - parentMatch.B, B: childMatch.B - parentMatch.B, aq: childMatch.aq };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch = F2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$addChild_fn = function (parentMatch, childMatch) {
        return {
            j: parentMatch.j,
            z: _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch_fn(parentMatch, childMatch), parentMatch.z),
            s: parentMatch.s,
            fL: parentMatch.fL,
            G: parentMatch.G,
            B: parentMatch.B,
            aq: parentMatch.aq
        };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$addChild = F2($dillonkearns$elm_markdown$Markdown$InlineParser$addChild_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren = function (_v4) {
        var match = _v4;
        return {
            j: match.j,
            z: $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(match.z),
            s: match.s,
            fL: match.fL,
            G: match.G,
            B: match.B,
            aq: match.aq
        };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches = function (matches) {
        var _v2 = _List_sortBy_fn(function (_v3) {
            var match = _v3;
            return match.s;
        }, matches);
        if (!_v2.b) {
            return _List_Nil;
        }
        else {
            var first = _v2.a;
            var rest = _v2.b;
            return $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp_fn(rest, first, _List_Nil);
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp_fn = function (remaining, _v0, matchesTail) {
        organizeMatchesHelp: while (true) {
            var prevMatch = _v0;
            if (!remaining.b) {
                return _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch), matchesTail);
            }
            else {
                var match = remaining.a;
                var rest = remaining.b;
                if (_Utils_cmp(prevMatch.j, match.s) < 1) {
                    var $temp$remaining = rest, $temp$_v0 = match, $temp$matchesTail = _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch), matchesTail);
                    remaining = $temp$remaining;
                    _v0 = $temp$_v0;
                    matchesTail = $temp$matchesTail;
                    continue organizeMatchesHelp;
                }
                else {
                    if ((_Utils_cmp(prevMatch.s, match.s) < 0) && (_Utils_cmp(prevMatch.j, match.j) > 0)) {
                        var $temp$remaining = rest, $temp$_v0 = $dillonkearns$elm_markdown$Markdown$InlineParser$addChild_fn(prevMatch, match), $temp$matchesTail = matchesTail;
                        remaining = $temp$remaining;
                        _v0 = $temp$_v0;
                        matchesTail = $temp$matchesTail;
                        continue organizeMatchesHelp;
                    }
                    else {
                        var $temp$remaining = rest, $temp$_v0 = prevMatch, $temp$matchesTail = matchesTail;
                        remaining = $temp$remaining;
                        _v0 = $temp$_v0;
                        matchesTail = $temp$matchesTail;
                        continue organizeMatchesHelp;
                    }
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp = F3($dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType = { $: 0 };
    var $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand = function (string) {
        return _String_contains_fn("&", string);
    };
    var $elm$regex$Regex$Match_fn = function (match, index, number, submatches) {
        return { e: index, aA: match, hl: number, bj: submatches };
    }, $elm$regex$Regex$Match = F4($elm$regex$Regex$Match_fn);
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = function (string) {
        return _Regex_fromStringWith_fn({ gC: false, hh: false }, string);
    };
    var $elm$regex$Regex$never = _Regex_never;
    var $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("&#([0-9]{1,8});"));
    var $elm$regex$Regex$replace_a0 = _Regex_infinity, $elm$regex$Regex$replace = _Regex_replaceAtMost($elm$regex$Regex$replace_a0);
    var $elm$core$Basics$ge = _Utils_ge;
    var $dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode = function (_int) {
        var remain_ = _Basics_modBy_fn(16, _int);
        var remain = _Basics_modBy_fn(131070, _int);
        return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode = function (_int) {
        return (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$validUnicode = function (_int) {
        return ($dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode(_int) && (!$dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar($elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar($elm$core$Char$fromCode(65533));
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal = function (match) {
        var _v0 = match.bj;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            var _v1 = $elm$core$String$toInt(first);
            if (!_v1.$) {
                var v = _v1.a;
                return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(v);
            }
            else {
                return match.aA;
            }
        }
        else {
            return match.aA;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal);
    var $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("&([0-9a-zA-Z]+);"));
    var $dillonkearns$elm_markdown$Markdown$Entity$entities = $elm$core$Dict$fromList(_List_fromArray([
        _Utils_Tuple2("quot", 34),
        _Utils_Tuple2("amp", 38),
        _Utils_Tuple2("apos", 39),
        _Utils_Tuple2("lt", 60),
        _Utils_Tuple2("gt", 62),
        _Utils_Tuple2("nbsp", 160),
        _Utils_Tuple2("iexcl", 161),
        _Utils_Tuple2("cent", 162),
        _Utils_Tuple2("pound", 163),
        _Utils_Tuple2("curren", 164),
        _Utils_Tuple2("yen", 165),
        _Utils_Tuple2("brvbar", 166),
        _Utils_Tuple2("sect", 167),
        _Utils_Tuple2("uml", 168),
        _Utils_Tuple2("copy", 169),
        _Utils_Tuple2("ordf", 170),
        _Utils_Tuple2("laquo", 171),
        _Utils_Tuple2("not", 172),
        _Utils_Tuple2("shy", 173),
        _Utils_Tuple2("reg", 174),
        _Utils_Tuple2("macr", 175),
        _Utils_Tuple2("deg", 176),
        _Utils_Tuple2("plusmn", 177),
        _Utils_Tuple2("sup2", 178),
        _Utils_Tuple2("sup3", 179),
        _Utils_Tuple2("acute", 180),
        _Utils_Tuple2("micro", 181),
        _Utils_Tuple2("para", 182),
        _Utils_Tuple2("middot", 183),
        _Utils_Tuple2("cedil", 184),
        _Utils_Tuple2("sup1", 185),
        _Utils_Tuple2("ordm", 186),
        _Utils_Tuple2("raquo", 187),
        _Utils_Tuple2("frac14", 188),
        _Utils_Tuple2("frac12", 189),
        _Utils_Tuple2("frac34", 190),
        _Utils_Tuple2("iquest", 191),
        _Utils_Tuple2("Agrave", 192),
        _Utils_Tuple2("Aacute", 193),
        _Utils_Tuple2("Acirc", 194),
        _Utils_Tuple2("Atilde", 195),
        _Utils_Tuple2("Auml", 196),
        _Utils_Tuple2("Aring", 197),
        _Utils_Tuple2("AElig", 198),
        _Utils_Tuple2("Ccedil", 199),
        _Utils_Tuple2("Egrave", 200),
        _Utils_Tuple2("Eacute", 201),
        _Utils_Tuple2("Ecirc", 202),
        _Utils_Tuple2("Euml", 203),
        _Utils_Tuple2("Igrave", 204),
        _Utils_Tuple2("Iacute", 205),
        _Utils_Tuple2("Icirc", 206),
        _Utils_Tuple2("Iuml", 207),
        _Utils_Tuple2("ETH", 208),
        _Utils_Tuple2("Ntilde", 209),
        _Utils_Tuple2("Ograve", 210),
        _Utils_Tuple2("Oacute", 211),
        _Utils_Tuple2("Ocirc", 212),
        _Utils_Tuple2("Otilde", 213),
        _Utils_Tuple2("Ouml", 214),
        _Utils_Tuple2("times", 215),
        _Utils_Tuple2("Oslash", 216),
        _Utils_Tuple2("Ugrave", 217),
        _Utils_Tuple2("Uacute", 218),
        _Utils_Tuple2("Ucirc", 219),
        _Utils_Tuple2("Uuml", 220),
        _Utils_Tuple2("Yacute", 221),
        _Utils_Tuple2("THORN", 222),
        _Utils_Tuple2("szlig", 223),
        _Utils_Tuple2("agrave", 224),
        _Utils_Tuple2("aacute", 225),
        _Utils_Tuple2("acirc", 226),
        _Utils_Tuple2("atilde", 227),
        _Utils_Tuple2("auml", 228),
        _Utils_Tuple2("aring", 229),
        _Utils_Tuple2("aelig", 230),
        _Utils_Tuple2("ccedil", 231),
        _Utils_Tuple2("egrave", 232),
        _Utils_Tuple2("eacute", 233),
        _Utils_Tuple2("ecirc", 234),
        _Utils_Tuple2("euml", 235),
        _Utils_Tuple2("igrave", 236),
        _Utils_Tuple2("iacute", 237),
        _Utils_Tuple2("icirc", 238),
        _Utils_Tuple2("iuml", 239),
        _Utils_Tuple2("eth", 240),
        _Utils_Tuple2("ntilde", 241),
        _Utils_Tuple2("ograve", 242),
        _Utils_Tuple2("oacute", 243),
        _Utils_Tuple2("ocirc", 244),
        _Utils_Tuple2("otilde", 245),
        _Utils_Tuple2("ouml", 246),
        _Utils_Tuple2("divide", 247),
        _Utils_Tuple2("oslash", 248),
        _Utils_Tuple2("ugrave", 249),
        _Utils_Tuple2("uacute", 250),
        _Utils_Tuple2("ucirc", 251),
        _Utils_Tuple2("uuml", 252),
        _Utils_Tuple2("yacute", 253),
        _Utils_Tuple2("thorn", 254),
        _Utils_Tuple2("yuml", 255),
        _Utils_Tuple2("OElig", 338),
        _Utils_Tuple2("oelig", 339),
        _Utils_Tuple2("Scaron", 352),
        _Utils_Tuple2("scaron", 353),
        _Utils_Tuple2("Yuml", 376),
        _Utils_Tuple2("fnof", 402),
        _Utils_Tuple2("circ", 710),
        _Utils_Tuple2("tilde", 732),
        _Utils_Tuple2("Alpha", 913),
        _Utils_Tuple2("Beta", 914),
        _Utils_Tuple2("Gamma", 915),
        _Utils_Tuple2("Delta", 916),
        _Utils_Tuple2("Epsilon", 917),
        _Utils_Tuple2("Zeta", 918),
        _Utils_Tuple2("Eta", 919),
        _Utils_Tuple2("Theta", 920),
        _Utils_Tuple2("Iota", 921),
        _Utils_Tuple2("Kappa", 922),
        _Utils_Tuple2("Lambda", 923),
        _Utils_Tuple2("Mu", 924),
        _Utils_Tuple2("Nu", 925),
        _Utils_Tuple2("Xi", 926),
        _Utils_Tuple2("Omicron", 927),
        _Utils_Tuple2("Pi", 928),
        _Utils_Tuple2("Rho", 929),
        _Utils_Tuple2("Sigma", 931),
        _Utils_Tuple2("Tau", 932),
        _Utils_Tuple2("Upsilon", 933),
        _Utils_Tuple2("Phi", 934),
        _Utils_Tuple2("Chi", 935),
        _Utils_Tuple2("Psi", 936),
        _Utils_Tuple2("Omega", 937),
        _Utils_Tuple2("alpha", 945),
        _Utils_Tuple2("beta", 946),
        _Utils_Tuple2("gamma", 947),
        _Utils_Tuple2("delta", 948),
        _Utils_Tuple2("epsilon", 949),
        _Utils_Tuple2("zeta", 950),
        _Utils_Tuple2("eta", 951),
        _Utils_Tuple2("theta", 952),
        _Utils_Tuple2("iota", 953),
        _Utils_Tuple2("kappa", 954),
        _Utils_Tuple2("lambda", 955),
        _Utils_Tuple2("mu", 956),
        _Utils_Tuple2("nu", 957),
        _Utils_Tuple2("xi", 958),
        _Utils_Tuple2("omicron", 959),
        _Utils_Tuple2("pi", 960),
        _Utils_Tuple2("rho", 961),
        _Utils_Tuple2("sigmaf", 962),
        _Utils_Tuple2("sigma", 963),
        _Utils_Tuple2("tau", 964),
        _Utils_Tuple2("upsilon", 965),
        _Utils_Tuple2("phi", 966),
        _Utils_Tuple2("chi", 967),
        _Utils_Tuple2("psi", 968),
        _Utils_Tuple2("omega", 969),
        _Utils_Tuple2("thetasym", 977),
        _Utils_Tuple2("upsih", 978),
        _Utils_Tuple2("piv", 982),
        _Utils_Tuple2("ensp", 8194),
        _Utils_Tuple2("emsp", 8195),
        _Utils_Tuple2("thinsp", 8201),
        _Utils_Tuple2("zwnj", 8204),
        _Utils_Tuple2("zwj", 8205),
        _Utils_Tuple2("lrm", 8206),
        _Utils_Tuple2("rlm", 8207),
        _Utils_Tuple2("ndash", 8211),
        _Utils_Tuple2("mdash", 8212),
        _Utils_Tuple2("lsquo", 8216),
        _Utils_Tuple2("rsquo", 8217),
        _Utils_Tuple2("sbquo", 8218),
        _Utils_Tuple2("ldquo", 8220),
        _Utils_Tuple2("rdquo", 8221),
        _Utils_Tuple2("bdquo", 8222),
        _Utils_Tuple2("dagger", 8224),
        _Utils_Tuple2("Dagger", 8225),
        _Utils_Tuple2("bull", 8226),
        _Utils_Tuple2("hellip", 8230),
        _Utils_Tuple2("permil", 8240),
        _Utils_Tuple2("prime", 8242),
        _Utils_Tuple2("Prime", 8243),
        _Utils_Tuple2("lsaquo", 8249),
        _Utils_Tuple2("rsaquo", 8250),
        _Utils_Tuple2("oline", 8254),
        _Utils_Tuple2("frasl", 8260),
        _Utils_Tuple2("euro", 8364),
        _Utils_Tuple2("image", 8465),
        _Utils_Tuple2("weierp", 8472),
        _Utils_Tuple2("real", 8476),
        _Utils_Tuple2("trade", 8482),
        _Utils_Tuple2("alefsym", 8501),
        _Utils_Tuple2("larr", 8592),
        _Utils_Tuple2("uarr", 8593),
        _Utils_Tuple2("rarr", 8594),
        _Utils_Tuple2("darr", 8595),
        _Utils_Tuple2("harr", 8596),
        _Utils_Tuple2("crarr", 8629),
        _Utils_Tuple2("lArr", 8656),
        _Utils_Tuple2("uArr", 8657),
        _Utils_Tuple2("rArr", 8658),
        _Utils_Tuple2("dArr", 8659),
        _Utils_Tuple2("hArr", 8660),
        _Utils_Tuple2("forall", 8704),
        _Utils_Tuple2("part", 8706),
        _Utils_Tuple2("exist", 8707),
        _Utils_Tuple2("empty", 8709),
        _Utils_Tuple2("nabla", 8711),
        _Utils_Tuple2("isin", 8712),
        _Utils_Tuple2("notin", 8713),
        _Utils_Tuple2("ni", 8715),
        _Utils_Tuple2("prod", 8719),
        _Utils_Tuple2("sum", 8721),
        _Utils_Tuple2("minus", 8722),
        _Utils_Tuple2("lowast", 8727),
        _Utils_Tuple2("radic", 8730),
        _Utils_Tuple2("prop", 8733),
        _Utils_Tuple2("infin", 8734),
        _Utils_Tuple2("ang", 8736),
        _Utils_Tuple2("and", 8743),
        _Utils_Tuple2("or", 8744),
        _Utils_Tuple2("cap", 8745),
        _Utils_Tuple2("cup", 8746),
        _Utils_Tuple2("int", 8747),
        _Utils_Tuple2("there4", 8756),
        _Utils_Tuple2("sim", 8764),
        _Utils_Tuple2("cong", 8773),
        _Utils_Tuple2("asymp", 8776),
        _Utils_Tuple2("ne", 8800),
        _Utils_Tuple2("equiv", 8801),
        _Utils_Tuple2("le", 8804),
        _Utils_Tuple2("ge", 8805),
        _Utils_Tuple2("sub", 8834),
        _Utils_Tuple2("sup", 8835),
        _Utils_Tuple2("nsub", 8836),
        _Utils_Tuple2("sube", 8838),
        _Utils_Tuple2("supe", 8839),
        _Utils_Tuple2("oplus", 8853),
        _Utils_Tuple2("otimes", 8855),
        _Utils_Tuple2("perp", 8869),
        _Utils_Tuple2("sdot", 8901),
        _Utils_Tuple2("lceil", 8968),
        _Utils_Tuple2("rceil", 8969),
        _Utils_Tuple2("lfloor", 8970),
        _Utils_Tuple2("rfloor", 8971),
        _Utils_Tuple2("lang", 9001),
        _Utils_Tuple2("rang", 9002),
        _Utils_Tuple2("loz", 9674),
        _Utils_Tuple2("spades", 9824),
        _Utils_Tuple2("clubs", 9827),
        _Utils_Tuple2("hearts", 9829),
        _Utils_Tuple2("diams", 9830)
    ]));
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity = function (match) {
        var _v0 = match.bj;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            var _v1 = $elm$core$Dict$get_fn(first, $dillonkearns$elm_markdown$Markdown$Entity$entities);
            if (!_v1.$) {
                var code = _v1.a;
                return $elm$core$String$fromChar($elm$core$Char$fromCode(code));
            }
            else {
                return match.aA;
            }
        }
        else {
            return match.aA;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity);
    var $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\+)([!\"#$%&\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])"));
    var $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex, function (regexMatch) {
        var _v0 = regexMatch.bj;
        if (((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) {
            var backslashes = _v0.a.a;
            var _v1 = _v0.b;
            var escapedStr = _v1.a.a;
            return _Utils_ap($elm$core$String$repeat_fn(($elm$core$String$length(backslashes) / 2) | 0, "\\"), escapedStr);
        }
        else {
            return regexMatch.aA;
        }
    });
    var $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("&#[Xx]([0-9a-fA-F]{1,8});"));
    var $elm$core$String$foldl = _String_foldl;
    var $dillonkearns$elm_markdown$Markdown$Entity$hexToInt = function (string) {
        var folder = F2(function (hexDigit, _int) {
            return ((_int * 16) + _Basics_modBy_fn(39, $elm$core$Char$toCode(hexDigit))) - 9;
        });
        return _String_foldl_fn(folder, 0, $elm$core$String$toLower(string));
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal = function (match) {
        var _v0 = match.bj;
        if (_v0.b && (!_v0.a.$)) {
            var first = _v0.a.a;
            return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode($dillonkearns$elm_markdown$Markdown$Entity$hexToInt(first));
        }
        else {
            return match.aA;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal);
    var $dillonkearns$elm_markdown$Markdown$Helpers$formatStr = function (str) {
        var withEscapes = $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable(str);
        return $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand(withEscapes) ? $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals($dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals($dillonkearns$elm_markdown$Markdown$Entity$replaceEntities(withEscapes))) : withEscapes;
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch = function (text) {
        return {
            j: 0,
            z: _List_Nil,
            s: 0,
            fL: $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(text),
            G: 0,
            B: 0,
            aq: $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType
        };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch_fn = function (rawText, _v2, parsedMatches) {
        var matchModel = _v2;
        var updtMatch = {
            j: matchModel.j,
            z: $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches_fn(matchModel.fL, _List_Nil, matchModel.z),
            s: matchModel.s,
            fL: matchModel.fL,
            G: matchModel.G,
            B: matchModel.B,
            aq: matchModel.aq
        };
        if (!parsedMatches.b) {
            var finalStr = $elm$core$String$dropLeft_fn(matchModel.j, rawText);
            return $elm$core$String$isEmpty(finalStr) ? _List_fromArray([updtMatch]) : _List_fromArray([
                updtMatch,
                $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(finalStr)
            ]);
        }
        else {
            var matchHead = parsedMatches.a;
            var _v4 = matchHead.aq;
            if (!_v4.$) {
                return _List_Cons(updtMatch, parsedMatches);
            }
            else {
                return _Utils_eq(matchModel.j, matchHead.s) ? _List_Cons(updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.j, matchHead.s) < 0) ? _List_Cons(updtMatch, _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(_String_slice_fn(matchModel.j, matchHead.s, rawText)), parsedMatches)) : parsedMatches);
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch = F3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches_fn = function (rawText, parsedMatches, matches) {
        parseTextMatches: while (true) {
            if (!matches.b) {
                if (!parsedMatches.b) {
                    return $elm$core$String$isEmpty(rawText) ? _List_Nil : _List_fromArray([
                        $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(rawText)
                    ]);
                }
                else {
                    var matchModel = parsedMatches.a;
                    return (matchModel.s > 0) ? _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch($elm$core$String$left_fn(matchModel.s, rawText)), parsedMatches) : parsedMatches;
                }
            }
            else {
                var match = matches.a;
                var matchesTail = matches.b;
                var $temp$rawText = rawText, $temp$parsedMatches = $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch_fn(rawText, match, parsedMatches), $temp$matches = matchesTail;
                rawText = $temp$rawText;
                parsedMatches = $temp$parsedMatches;
                matches = $temp$matches;
                continue parseTextMatches;
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches = F3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn = function (tokensL, tokensR, countL) {
        cleanAngleBracketTokens: while (true) {
            if (!tokensR.b) {
                return _List_Nil;
            }
            else {
                var hd1 = tokensR.a;
                var rest1 = tokensR.b;
                if (!tokensL.b) {
                    if (countL > 1) {
                        var $temp$tokensL = tokensL, $temp$tokensR = rest1, $temp$countL = countL - 1;
                        tokensL = $temp$tokensL;
                        tokensR = $temp$tokensR;
                        countL = $temp$countL;
                        continue cleanAngleBracketTokens;
                    }
                    else {
                        if (countL === 1) {
                            return _List_Cons(hd1, $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn(tokensL, rest1, countL - 1));
                        }
                        else {
                            var $temp$tokensL = tokensL, $temp$tokensR = rest1, $temp$countL = 0;
                            tokensL = $temp$tokensL;
                            tokensR = $temp$tokensR;
                            countL = $temp$countL;
                            continue cleanAngleBracketTokens;
                        }
                    }
                }
                else {
                    var hd = tokensL.a;
                    var rest = tokensL.b;
                    if (_Utils_cmp(hd.e, hd1.e) < 0) {
                        if (!countL) {
                            return _List_Cons(hd, $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn(rest, tokensR, countL + 1));
                        }
                        else {
                            var $temp$tokensL = rest, $temp$tokensR = tokensR, $temp$countL = countL + 1;
                            tokensL = $temp$tokensL;
                            tokensR = $temp$tokensR;
                            countL = $temp$countL;
                            continue cleanAngleBracketTokens;
                        }
                    }
                    else {
                        if (countL > 1) {
                            var $temp$tokensL = tokensL, $temp$tokensR = rest1, $temp$countL = countL - 1;
                            tokensL = $temp$tokensL;
                            tokensR = $temp$tokensR;
                            countL = $temp$countL;
                            continue cleanAngleBracketTokens;
                        }
                        else {
                            if (countL === 1) {
                                return _List_Cons(hd1, $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn(tokensL, rest1, countL - 1));
                            }
                            else {
                                var $temp$tokensL = tokensL, $temp$tokensR = rest1, $temp$countL = 0;
                                tokensL = $temp$tokensL;
                                tokensR = $temp$tokensR;
                                countL = $temp$countL;
                                continue cleanAngleBracketTokens;
                            }
                        }
                    }
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens = F3($dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\<)"));
    var $elm$regex$Regex$find_a0 = _Regex_infinity, $elm$regex$Regex$find = _Regex_findAtMost($elm$regex$Regex$find_a0);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen = { $: 4 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ e: regMatch.e + backslashesLength, dH: 1, h: $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen }) : $elm$core$Maybe$Nothing;
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\>)"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$Escaped = 0;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped = 1;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            return $elm$core$Maybe$Just({
                e: regMatch.e + backslashesLength,
                dH: 1,
                h: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(0)
            });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)([^*])?(\\*+)([^*])?"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken_fn = function (a, b) {
        return { $: 7, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken = F2($dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation = function (c) {
        switch (c) {
            case "!":
                return true;
            case "\"":
                return true;
            case "#":
                return true;
            case "%":
                return true;
            case "&":
                return true;
            case "'":
                return true;
            case "(":
                return true;
            case ")":
                return true;
            case "*":
                return true;
            case ",":
                return true;
            case "-":
                return true;
            case ".":
                return true;
            case "/":
                return true;
            case ":":
                return true;
            case ";":
                return true;
            case "?":
                return true;
            case "@":
                return true;
            case "[":
                return true;
            case "]":
                return true;
            case "_":
                return true;
            case "{":
                return true;
            case "}":
                return true;
            case "~":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a0 = F2(function (c, accum) {
        return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation(c);
    }), $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a1 = false, $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation = A2($elm$core$String$foldl, $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a1);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace = function (c) {
        switch (c) {
            case " ":
                return true;
            case "\f":
                return true;
            case "\n":
                return true;
            case "\r":
                return true;
            case "\t":
                return true;
            case "\v":
                return true;
            case "\u00A0":
                return true;
            case "\u2028":
                return true;
            case "\u2029":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a0 = F2(function (c, accum) {
        return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace(c);
    }), $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a1 = false, $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace = A2($elm$core$String$foldl, $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a1);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank = function (mstring) {
        if (!mstring.$) {
            var string = mstring.a;
            return ($elm$core$String$isEmpty(string) || _String_foldl_fn($dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace_a1, string)) ? 0 : (_String_foldl_fn($dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation_a1, string) ? 1 : 2);
        }
        else {
            return 0;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken_fn = function (_char, rawText, regMatch) {
        var _v0 = regMatch.bj;
        if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) && _v0.b.b.b.b) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var maybeLeftFringe = _v1.a;
            var _v2 = _v1.b;
            var delimiter = _v2.a.a;
            var _v3 = _v2.b;
            var maybeRightFringe = _v3.a;
            var rFringeRank = $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(maybeRightFringe);
            var leftFringeLength = function () {
                if (!maybeLeftFringe.$) {
                    var left = maybeLeftFringe.a;
                    return $elm$core$String$length(left);
                }
                else {
                    return 0;
                }
            }();
            var mLeftFringe = ((!(!regMatch.e)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(_String_slice_fn(regMatch.e - 1, regMatch.e, rawText)) : maybeLeftFringe;
            var backslashesLength = function () {
                if (!maybeBackslashes.$) {
                    var backslashes = maybeBackslashes.a;
                    return $elm$core$String$length(backslashes);
                }
                else {
                    return 0;
                }
            }();
            var isEscaped = ((!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || function () {
                if ((!mLeftFringe.$) && (mLeftFringe.a === "\\")) {
                    return true;
                }
                else {
                    return false;
                }
            }();
            var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
            var lFringeRank = isEscaped ? 1 : $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(mLeftFringe);
            if ((delimiterLength <= 0) || ((_char === "_") && ((lFringeRank === 2) && (rFringeRank === 2)))) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var index = ((regMatch.e + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
                return $elm$core$Maybe$Just({
                    e: index,
                    dH: delimiterLength,
                    h: $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken_fn(_char, { aR: lFringeRank, aY: rFringeRank })
                });
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken = F3($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens = function (str) {
        return $elm$core$List$filterMap_fn(A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, "*", str), _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\`+)"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken = function (a) {
        return { $: 0, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backtick = _v1.a.a;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            return $elm$core$Maybe$Just({
                e: regMatch.e + backslashesLength,
                dH: $elm$core$String$length(backtick),
                h: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(0)
            });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(?:(\\\\+)|( {2,}))\\n"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken = { $: 8 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
        var _v0 = regMatch.bj;
        _v0$2: while (true) {
            if (_v0.b) {
                if (!_v0.a.$) {
                    var backslashes = _v0.a.a;
                    var backslashesLength = $elm$core$String$length(backslashes);
                    return (!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just({ e: (regMatch.e + backslashesLength) - 1, dH: 2, h: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken }) : $elm$core$Maybe$Nothing;
                }
                else {
                    if (_v0.b.b && (!_v0.b.a.$)) {
                        var _v1 = _v0.b;
                        return $elm$core$Maybe$Just({
                            e: regMatch.e,
                            dH: $elm$core$String$length(regMatch.aA),
                            h: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
                        });
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return $elm$core$Maybe$Nothing;
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
        var _v0 = regMatch.bj;
        _v0$2: while (true) {
            if (_v0.b) {
                if (!_v0.a.$) {
                    var backslashes = _v0.a.a;
                    var backslashesLength = $elm$core$String$length(backslashes);
                    return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ e: regMatch.e + backslashesLength, dH: 1, h: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken }) : $elm$core$Maybe$Just({ e: (regMatch.e + backslashesLength) - 1, dH: 2, h: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken });
                }
                else {
                    if (_v0.b.b) {
                        var _v1 = _v0.b;
                        return $elm$core$Maybe$Just({
                            e: regMatch.e,
                            dH: $elm$core$String$length(regMatch.aA),
                            h: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
                        });
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return $elm$core$Maybe$Nothing;
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak = false;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(?:(\\\\+)|( *))\\n"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens = function (str) {
        return $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak ? $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\])"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose = { $: 3 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just({ e: regMatch.e + backslashesLength, dH: 1, h: $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose }) : $elm$core$Maybe$Nothing;
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(\\!)?(\\[)"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$Active = 0;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken = { $: 2 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var maybeImageOpen = _v1.a;
            var _v2 = _v1.b;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            var isEscaped = !$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength);
            var index = isEscaped ? ((regMatch.e + backslashesLength) + 1) : (regMatch.e + backslashesLength);
            if (isEscaped) {
                if (!maybeImageOpen.$) {
                    return $elm$core$Maybe$Just({
                        e: index,
                        dH: 1,
                        h: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
                    });
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
            else {
                if (!maybeImageOpen.$) {
                    return $elm$core$Maybe$Just({ e: index, dH: 2, h: $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken });
                }
                else {
                    return $elm$core$Maybe$Just({
                        e: index,
                        dH: 1,
                        h: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
                    });
                }
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken = function (a) {
        return { $: 9, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken = function (regMatch) {
        var _v0 = regMatch.bj;
        if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
            var maybeBackslashes = _v0.a;
            var _v1 = _v0.b;
            var tilde = _v1.a.a;
            var backslashesLength = $elm$core$Maybe$withDefault_fn(0, $elm$core$Maybe$map_fn($elm$core$String$length, maybeBackslashes));
            var _v2 = $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? _Utils_Tuple2($elm$core$String$length(tilde), $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(1)) : _Utils_Tuple2($elm$core$String$length(tilde), $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(0));
            var length = _v2.a;
            var meaning = _v2.b;
            return $elm$core$Maybe$Just({ e: regMatch.e + backslashesLength, dH: length, h: meaning });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)(~{2,})([^~])?"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens = function (str) {
        return $elm$core$List$filterMap_fn($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("(\\\\*)([^_])?(\\_+)([^_])?"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens = function (str) {
        return $elm$core$List$filterMap_fn(A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, "_", str), _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn = function (left, right) {
        if (left.b) {
            var lfirst = left.a;
            var lrest = left.b;
            if (right.b) {
                var rfirst = right.a;
                var rrest = right.b;
                return (_Utils_cmp(lfirst.e, rfirst.e) < 0) ? _List_Cons(lfirst, $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn(lrest, right)) : _List_Cons(rfirst, $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn(left, rrest));
            }
            else {
                return left;
            }
        }
        else {
            return right;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex = F2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize = function (rawText) {
        return $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$cleanAngleBracketTokens_fn(_List_sortBy_fn(function ($) {
            return $.e;
        }, $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens(rawText)), _List_sortBy_fn(function ($) {
            return $.e;
        }, $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens(rawText)), 0), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex_fn($dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens(rawText), $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens(rawText))))))));
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType = { $: 2 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType = function (a) {
        return { $: 7, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType = function (a) {
        return { $: 6, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType = function (a) {
        return { $: 5, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$Inactive = 1;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType = function (a) {
        return { $: 4, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType = { $: 8 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType = function (a) {
        return { $: 3, a: a };
    };
    var $elm$regex$Regex$contains = _Regex_contains;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)"));
    var $elm$url$Url$percentDecode = _Url_percentDecode;
    var $elm$url$Url$percentEncode = _Url_percentEncode;
    var $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a0 = $elm$url$Url$percentEncode, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a1 = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex, function (match) {
        return $elm$core$Maybe$withDefault_fn(match.aA, $elm$url$Url$percentDecode(match.aA));
    }), $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a1);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch = function (_v0) {
        var match = _v0;
        return _Regex_contains_fn($dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex, match.fL) ? $elm$core$Result$Ok(_Utils_update(match, {
            aq: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(_Utils_Tuple2(match.fL, $elm$core$Basics$composeR_fn($dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a1, match.fL)))
        })) : $elm$core$Result$Err(match);
    };
    var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
    var $elm$core$List$head = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex = "[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*";
    var $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^\\[\\s*(" + ($dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex + ")\\s*\\]")));
    var $elm$core$Maybe$andThen_fn = function (callback, maybeValue) {
        if (!maybeValue.$) {
            var value = maybeValue.a;
            return callback(value);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$andThen = F2($elm$core$Maybe$andThen_fn);
    var $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces = function (original) {
        return original;
    };
    var $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a0 = $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a1 = $elm$core$String$toLower, $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a0, $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a1);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle_fn = function (rawUrl, maybeTitle) {
        return _Utils_Tuple2($elm$core$Basics$composeR_fn($dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a1, $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(rawUrl)), $elm$core$Maybe$map_fn($dillonkearns$elm_markdown$Markdown$Helpers$formatStr, maybeTitle));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle = F2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch_fn = function (matchModel, references, maybeRegexMatch) {
        var refLabel = function (str) {
            return $elm$core$String$isEmpty(str) ? matchModel.fL : str;
        }($elm$core$Maybe$withDefault_fn(matchModel.fL, $elm$core$Maybe$withDefault_fn($elm$core$Maybe$Nothing, $elm$core$Maybe$andThen_fn(A2($elm$core$Basics$composeR, function ($) {
            return $.bj;
        }, $elm$core$List$head), maybeRegexMatch))));
        var _v0 = $elm$core$Dict$get_fn($elm$core$Basics$composeR_fn($dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a0, $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel_a1, refLabel), references);
        if (_v0.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v1 = _v0.a;
            var rawUrl = _v1.a;
            var maybeTitle = _v1.b;
            var type_ = function () {
                var _v3 = matchModel.aq;
                if (_v3.$ === 5) {
                    return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle_fn(rawUrl, maybeTitle));
                }
                else {
                    return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle_fn(rawUrl, maybeTitle));
                }
            }();
            var regexMatchLength = function () {
                if (!maybeRegexMatch.$) {
                    var match = maybeRegexMatch.a.aA;
                    return $elm$core$String$length(match);
                }
                else {
                    return 0;
                }
            }();
            return $elm$core$Maybe$Just(_Utils_update(matchModel, { j: matchModel.j + regexMatchLength, aq: type_ }));
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch = F3($dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences_fn = function (remainText, _v0, references) {
        var tempMatch = _v0;
        var matches = _Regex_findAtMost_fn(1, $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex, remainText);
        return $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch_fn(tempMatch, references, $elm$core$List$head(matches));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences = F3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences_fn);
    var $dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars = "\\f\\v\\r\\n";
    var $dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars = " \\t\\f\\v\\r\\n";
    var $dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex = "(?:<([^<>" + ($dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars + ("]*)>|([^" + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ("\\(\\)\\\\]*(?:\\\\.[^" + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + "\\(\\)\\\\]*)*))")))));
    var $dillonkearns$elm_markdown$Markdown$Helpers$titleRegex = "(?:[" + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ("]+" + ("(?:'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)'|" + ("\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|" + "\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?"))));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^\\(\\s*" + ($dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex + ($dillonkearns$elm_markdown$Markdown$Helpers$titleRegex + "\\s*\\)"))));
    var $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust = function (maybes) {
        var process = F2(function (a, maybeFound) {
            if (!maybeFound.$) {
                var found = maybeFound.a;
                return $elm$core$Maybe$Just(found);
            }
            else {
                return a;
            }
        });
        return $elm$core$List$foldl_fn(process, $elm$core$Maybe$Nothing, maybes);
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_fn = function (matchModel, regexMatch) {
        var _v0 = regexMatch.bj;
        if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
            var maybeRawUrlAngleBrackets = _v0.a;
            var _v1 = _v0.b;
            var maybeRawUrlWithoutBrackets = _v1.a;
            var _v2 = _v1.b;
            var maybeTitleSingleQuotes = _v2.a;
            var _v3 = _v2.b;
            var maybeTitleDoubleQuotes = _v3.a;
            var _v4 = _v3.b;
            var maybeTitleParenthesis = _v4.a;
            var maybeTitle = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(_List_fromArray([maybeTitleSingleQuotes, maybeTitleDoubleQuotes, maybeTitleParenthesis]));
            var toMatch = function (rawUrl) {
                return _Utils_update(matchModel, {
                    j: matchModel.j + $elm$core$String$length(regexMatch.aA),
                    aq: function () {
                        var _v5 = matchModel.aq;
                        if (_v5.$ === 5) {
                            return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
                        }
                        else {
                            return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
                        }
                    }()($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle_fn(rawUrl, maybeTitle))
                });
            };
            var maybeRawUrl = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(_List_fromArray([maybeRawUrlAngleBrackets, maybeRawUrlWithoutBrackets]));
            return $elm$core$Maybe$Just(toMatch($elm$core$Maybe$withDefault_fn("", maybeRawUrl)));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F2($dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_fn = function (remainText, _v0, refs) {
        var tempMatch = _v0;
        var _v1 = _Regex_findAtMost_fn(1, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText);
        if (_v1.b) {
            var first = _v1.a;
            var _v2 = $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch_fn(tempMatch, first);
            if (!_v2.$) {
                var match = _v2.a;
                return $elm$core$Maybe$Just(match);
            }
            else {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences_fn(remainText, tempMatch, refs);
            }
        }
        else {
            return $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences_fn(remainText, tempMatch, refs);
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = F3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping_fn = function (_v0, remainMatches) {
        var match = _v0;
        var overlappingMatches = $elm$core$List$filter(function (_v1) {
            var testMatch = _v1;
            return (_Utils_cmp(match.j, testMatch.s) > 0) && (_Utils_cmp(match.j, testMatch.j) < 0);
        });
        return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(overlappingMatches(remainMatches))) ? $elm$core$Maybe$Just(_List_Cons(match, remainMatches)) : $elm$core$Maybe$Nothing;
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping = F2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex = $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^([a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$"));
    var $dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
        var match = _v0;
        return _Regex_contains_fn($dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex, match.fL) ? $elm$core$Result$Ok(_Utils_update(match, {
            aq: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(_Utils_Tuple2(match.fL, "mailto:" + $elm$core$Basics$composeR_fn($dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a0, $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl_a1, match.fL)))
        })) : $elm$core$Result$Err(match);
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp_fn = function (innerTokens, isToken, tokens) {
        findTokenHelp: while (true) {
            if (!tokens.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var nextToken = tokens.a;
                var remainingTokens = tokens.b;
                if (isToken(nextToken)) {
                    return $elm$core$Maybe$Just(_Utils_Tuple3(nextToken, $elm$core$List$reverse(innerTokens), remainingTokens));
                }
                else {
                    var $temp$innerTokens = _List_Cons(nextToken, innerTokens), $temp$isToken = isToken, $temp$tokens = remainingTokens;
                    innerTokens = $temp$innerTokens;
                    isToken = $temp$isToken;
                    tokens = $temp$tokens;
                    continue findTokenHelp;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp = F3($dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn = function (isToken, tokens) {
        return $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp_fn(_List_Nil, isToken, tokens);
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$findToken = F2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken_fn = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken = F2($dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$NotOpening = 0;
    var $elm$parser$Parser$Advanced$getOffset = function (s) {
        return $elm$parser$Parser$Advanced$Good_fn(false, s.g, s);
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken_fn = function (rawText, _v0) {
        var match = _v0;
        var consumedCharacters = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(F3(function (startOffset, htmlTag, endOffset) {
            return { dh: htmlTag, dH: endOffset - startOffset };
        })), $elm$parser$Parser$Advanced$getOffset), $dillonkearns$elm_markdown$HtmlParser$html), $elm$parser$Parser$Advanced$getOffset);
        var parsed = $elm$parser$Parser$Advanced$run_fn(consumedCharacters, $elm$core$String$dropLeft_fn(match.s, rawText));
        if (!parsed.$) {
            var htmlTag = parsed.a.dh;
            var length = parsed.a.dH;
            var htmlToken = $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken_fn(0, htmlTag);
            return $elm$core$Maybe$Just({ e: match.s, dH: length, h: htmlToken });
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken = F2($dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken_fn);
    var $dillonkearns$elm_markdown$Markdown$Helpers$ifError_fn = function (_function, result) {
        if (!result.$) {
            return result;
        }
        else {
            var err = result.a;
            return _function(err);
        }
    }, $dillonkearns$elm_markdown$Markdown$Helpers$ifError = F2($dillonkearns$elm_markdown$Markdown$Helpers$ifError_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair_fn = function (closeToken, openToken) {
        var _v0 = openToken.h;
        if (!_v0.$) {
            if (!_v0.a) {
                var _v1 = _v0.a;
                return openToken.dH - 1 === closeToken.dH;
            }
            else {
                var _v2 = _v0.a;
                return _Utils_eq(openToken.dH, closeToken.dH);
            }
        }
        else {
            return false;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair = F2($dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
        var _v0 = token.h;
        switch (_v0.$) {
            case 1:
                return true;
            case 2:
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken_fn = function (closeToken, openToken) {
        var _v0 = openToken.h;
        if (_v0.$ === 7) {
            var openChar = _v0.a;
            var open = _v0.b;
            var _v1 = closeToken.h;
            if (_v1.$ === 7) {
                var closeChar = _v1.a;
                var close = _v1.b;
                return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(open.aR, open.aY) || _Utils_eq(close.aR, close.aY)) ? ((!(!_Basics_modBy_fn(3, closeToken.dH + openToken.dH))) || ((!_Basics_modBy_fn(3, closeToken.dH)) && (!_Basics_modBy_fn(3, openToken.dH)))) : true) : false;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken = F2($dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair_fn = function (closeToken, openToken) {
        var _v0 = function () {
            var _v1 = openToken.h;
            if (_v1.$ === 9) {
                if (!_v1.a) {
                    var _v2 = _v1.a;
                    return _Utils_Tuple2(true, openToken.dH - 1);
                }
                else {
                    var _v3 = _v1.a;
                    return _Utils_Tuple2(true, openToken.dH);
                }
            }
            else {
                return _Utils_Tuple2(false, 0);
            }
        }();
        var openTokenIsStrikethrough = _v0.a;
        var openTokenLength = _v0.b;
        var _v4 = function () {
            var _v5 = closeToken.h;
            if (_v5.$ === 9) {
                if (!_v5.a) {
                    var _v6 = _v5.a;
                    return _Utils_Tuple2(true, closeToken.dH - 1);
                }
                else {
                    var _v7 = _v5.a;
                    return _Utils_Tuple2(true, closeToken.dH);
                }
            }
            else {
                return _Utils_Tuple2(false, 0);
            }
        }();
        var closeTokenIsStrikethrough = _v4.a;
        var closeTokenLength = _v4.b;
        return closeTokenIsStrikethrough && (openTokenIsStrikethrough && _Utils_eq(closeTokenLength, openTokenLength));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair = F2($dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType = { $: 1 };
    var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch_fn = function (token, type_) {
        return { j: token.e + token.dH, z: _List_Nil, s: token.e, fL: "", G: 0, B: 0, aq: type_ };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch = F2($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM_fn = function (remaining, matches) {
        lineBreakTTM: while (true) {
            if (!remaining.b) {
                return matches;
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v1 = token.h;
                if (_v1.$ === 8) {
                    var $temp$remaining = tokensTail, $temp$matches = _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch_fn(token, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType), matches);
                    remaining = $temp$remaining;
                    matches = $temp$matches;
                    continue lineBreakTTM;
                }
                else {
                    var $temp$remaining = tokensTail, $temp$matches = matches;
                    remaining = $temp$remaining;
                    matches = $temp$matches;
                    continue lineBreakTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM = F2($dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens_fn = function (_v0, tokensTail) {
        var match = _v0;
        return $elm$core$List$filter_fn(function (token) {
            return _Utils_cmp(token.e, match.j) > -1;
        }, tokensTail);
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens = F2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch_fn = function (closeToken, escaped, matches, references, rawText, _v44) {
        var openToken = _v44.a;
        var remainTokens = _v44.c;
        var result = $dillonkearns$elm_markdown$Markdown$Helpers$ifError_fn($dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch, $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn(references, rawText, function (s) {
            return s;
        }, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, openToken, closeToken, _List_Nil)));
        if (result.$ === 1) {
            var tempMatch = result.a;
            if (escaped === 1) {
                var _v47 = $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken_fn(rawText, tempMatch);
                if (!_v47.$) {
                    var newToken = _v47.a;
                    return $elm$core$Maybe$Just(_Utils_Tuple2(_List_Cons(newToken, remainTokens), matches));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        }
        else {
            var newMatch = result.a;
            return $elm$core$Maybe$Just(_Utils_Tuple2(remainTokens, _List_Cons(newMatch, matches)));
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch = F6($dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_fn = function (remaining, tokens, matches, references, rawText) {
        codeAutolinkTypeHtmlTagTTM: while (true) {
            if (!remaining.b) {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM_fn($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v36 = token.h;
                switch (_v36.$) {
                    case 0:
                        var _v37 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn($dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair(token), tokens);
                        if (!_v37.$) {
                            var code = _v37.a;
                            var _v38 = $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch_fn(token, matches, references, rawText, code);
                            var newTokens = _v38.a;
                            var newMatches = _v38.b;
                            var $temp$remaining = tokensTail, $temp$tokens = newTokens, $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue codeAutolinkTypeHtmlTagTTM;
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue codeAutolinkTypeHtmlTagTTM;
                        }
                    case 5:
                        var isEscaped = _v36.a;
                        var isAngleBracketOpen = function (_v43) {
                            var meaning = _v43.h;
                            if (meaning.$ === 4) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        };
                        var _v39 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn(isAngleBracketOpen, tokens);
                        if (!_v39.$) {
                            var found = _v39.a;
                            var _v40 = $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch_fn(token, isEscaped, matches, references, rawText, found);
                            if (!_v40.$) {
                                var _v41 = _v40.a;
                                var newTokens = _v41.a;
                                var newMatches = _v41.b;
                                var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), newTokens), $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue codeAutolinkTypeHtmlTagTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue codeAutolinkTypeHtmlTagTTM;
                            }
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen), tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue codeAutolinkTypeHtmlTagTTM;
                        }
                    default:
                        var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue codeAutolinkTypeHtmlTagTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = F5($dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch_fn = function (closeToken, matches, references, rawText, _v32) {
        var openToken = _v32.a;
        var remainTokens = _v32.c;
        var updatedOpenToken = function () {
            var _v33 = openToken.h;
            if ((!_v33.$) && (!_v33.a)) {
                var _v34 = _v33.a;
                return _Utils_update(openToken, { e: openToken.e + 1, dH: openToken.dH - 1 });
            }
            else {
                return openToken;
            }
        }();
        var match = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn(references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, updatedOpenToken, closeToken, _List_Nil);
        return _Utils_Tuple2(remainTokens, _List_Cons(match, matches));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch = F5($dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM_fn = function (remaining, tokens, matches, references, rawText) {
        emphasisTTM: while (true) {
            if (!remaining.b) {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM_fn($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v27 = token.h;
                if (_v27.$ === 7) {
                    var _char = _v27.a;
                    var leftFringeRank = _v27.b.aR;
                    var rightFringeRank = _v27.b.aY;
                    if (_Utils_eq(leftFringeRank, rightFringeRank)) {
                        if ((!(!rightFringeRank)) && ((_char !== "_") || (rightFringeRank === 1))) {
                            var _v28 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn($dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token), tokens);
                            if (!_v28.$) {
                                var found = _v28.a;
                                var _v29 = $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch_fn(references, rawText, token, tokensTail, found);
                                var newRemaining = _v29.a;
                                var match = _v29.b;
                                var newTokens = _v29.c;
                                var $temp$remaining = newRemaining, $temp$tokens = newTokens, $temp$matches = _List_Cons(match, matches), $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue emphasisTTM;
                        }
                    }
                    else {
                        if (_Utils_cmp(leftFringeRank, rightFringeRank) < 0) {
                            var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue emphasisTTM;
                        }
                        else {
                            var _v30 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn($dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token), tokens);
                            if (!_v30.$) {
                                var found = _v30.a;
                                var _v31 = $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch_fn(references, rawText, token, tokensTail, found);
                                var newRemaining = _v31.a;
                                var match = _v31.b;
                                var newTokens = _v31.c;
                                var $temp$remaining = newRemaining, $temp$tokens = newTokens, $temp$matches = _List_Cons(match, matches), $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                            else {
                                var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                                remaining = $temp$remaining;
                                tokens = $temp$tokens;
                                matches = $temp$matches;
                                references = $temp$references;
                                rawText = $temp$rawText;
                                continue emphasisTTM;
                            }
                        }
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue emphasisTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM = F5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch_fn = function (references, rawText, closeToken, tokensTail, _v25) {
        var openToken = _v25.a;
        var innerTokens = _v25.b;
        var remainTokens = _v25.c;
        var remainLength = openToken.dH - closeToken.dH;
        var updt = (!remainLength) ? { aL: closeToken, aB: openToken, aX: remainTokens, a_: tokensTail } : ((remainLength > 0) ? {
            aL: closeToken,
            aB: _Utils_update(openToken, { e: openToken.e + remainLength, dH: closeToken.dH }),
            aX: _List_Cons(_Utils_update(openToken, { dH: remainLength }), remainTokens),
            a_: tokensTail
        } : {
            aL: _Utils_update(closeToken, { dH: openToken.dH }),
            aB: openToken,
            aX: remainTokens,
            a_: _List_Cons(_Utils_update(closeToken, { e: closeToken.e + openToken.dH, dH: -remainLength }), tokensTail)
        });
        var match = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn(references, rawText, function (s) {
            return s;
        }, $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType(updt.aB.dH), updt.aB, updt.aL, $elm$core$List$reverse(innerTokens));
        return _Utils_Tuple3(updt.a_, match, updt.aX);
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch = F5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM_fn = function (remaining, tokens, matches, references, rawText) {
        htmlElementTTM: while (true) {
            if (!remaining.b) {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM_fn($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v23 = token.h;
                if (_v23.$ === 6) {
                    var isOpen = _v23.a;
                    var htmlModel = _v23.b;
                    var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = _List_Cons($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch_fn(token, $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)), matches), $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue htmlElementTTM;
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue htmlElementTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM = F5($dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM_fn = function (remaining, tokens, matches, references, rawText) {
        linkImageTypeTTM: while (true) {
            if (!remaining.b) {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM_fn($elm$core$List$reverse(tokens), _List_Nil, matches, references, rawText);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v18 = token.h;
                if (_v18.$ === 3) {
                    var _v19 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn($dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken, tokens);
                    if (!_v19.$) {
                        var found = _v19.a;
                        var _v20 = $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch_fn(token, tokensTail, matches, references, rawText, found);
                        if (!_v20.$) {
                            var _v21 = _v20.a;
                            var x = _v21.a;
                            var newMatches = _v21.b;
                            var newTokens = _v21.c;
                            var $temp$remaining = x, $temp$tokens = newTokens, $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue linkImageTypeTTM;
                        }
                        else {
                            var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                            remaining = $temp$remaining;
                            tokens = $temp$tokens;
                            matches = $temp$matches;
                            references = $temp$references;
                            rawText = $temp$rawText;
                            continue linkImageTypeTTM;
                        }
                    }
                    else {
                        var $temp$remaining = tokensTail, $temp$tokens = tokens, $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue linkImageTypeTTM;
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue linkImageTypeTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM = F5($dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch_fn = function (closeToken, tokensTail, oldMatches, references, rawText, _v8) {
        var openToken = _v8.a;
        var innerTokens = _v8.b;
        var remainTokens = _v8.c;
        var removeOpenToken = _Utils_Tuple3(tokensTail, oldMatches, _Utils_ap(innerTokens, remainTokens));
        var remainText = $elm$core$String$dropLeft_fn(closeToken.e + 1, rawText);
        var inactivateLinkOpenToken = function (token) {
            var _v16 = token.h;
            if (_v16.$ === 1) {
                return _Utils_update(token, {
                    h: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(1)
                });
            }
            else {
                return token;
            }
        };
        var findTempMatch = function (isLinkType) {
            return $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn(references, rawText, function (s) {
                return s;
            }, isLinkType ? $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(_Utils_Tuple2("", $elm$core$Maybe$Nothing)) : $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(_Utils_Tuple2("", $elm$core$Maybe$Nothing)), openToken, closeToken, $elm$core$List$reverse(innerTokens));
        };
        var _v9 = openToken.h;
        switch (_v9.$) {
            case 2:
                var tempMatch = findTempMatch(false);
                var _v10 = $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_fn(remainText, tempMatch, references);
                if (_v10.$ === 1) {
                    return $elm$core$Maybe$Just(removeOpenToken);
                }
                else {
                    var match = _v10.a;
                    var _v11 = $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping_fn(match, oldMatches);
                    if (!_v11.$) {
                        var matches = _v11.a;
                        return $elm$core$Maybe$Just(_Utils_Tuple3($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens_fn(match, tokensTail), matches, remainTokens));
                    }
                    else {
                        return $elm$core$Maybe$Just(removeOpenToken);
                    }
                }
            case 1:
                if (!_v9.a) {
                    var _v12 = _v9.a;
                    var tempMatch = findTempMatch(true);
                    var _v13 = $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType_fn(remainText, tempMatch, references);
                    if (_v13.$ === 1) {
                        return $elm$core$Maybe$Just(removeOpenToken);
                    }
                    else {
                        var match = _v13.a;
                        var _v14 = $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping_fn(match, oldMatches);
                        if (!_v14.$) {
                            var matches = _v14.a;
                            return $elm$core$Maybe$Just(_Utils_Tuple3($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens_fn(match, tokensTail), matches, $elm$core$List$map_fn(inactivateLinkOpenToken, remainTokens)));
                        }
                        else {
                            return $elm$core$Maybe$Just(removeOpenToken);
                        }
                    }
                }
                else {
                    var _v15 = _v9.a;
                    return $elm$core$Maybe$Just(removeOpenToken);
                }
            default:
                return $elm$core$Maybe$Nothing;
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch = F6($dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM_fn = function (remaining, tokens, matches, references, rawText) {
        strikethroughTTM: while (true) {
            if (!remaining.b) {
                return $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM_fn($elm$core$List$reverse(tokens), matches);
            }
            else {
                var token = remaining.a;
                var tokensTail = remaining.b;
                var _v5 = token.h;
                if (_v5.$ === 9) {
                    var _v6 = $dillonkearns$elm_markdown$Markdown$InlineParser$findToken_fn($dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair(token), tokens);
                    if (!_v6.$) {
                        var content = _v6.a;
                        var _v7 = $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch_fn(token, matches, references, rawText, content);
                        var newTokens = _v7.a;
                        var newMatches = _v7.b;
                        var $temp$remaining = tokensTail, $temp$tokens = newTokens, $temp$matches = newMatches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue strikethroughTTM;
                    }
                    else {
                        var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                        remaining = $temp$remaining;
                        tokens = $temp$tokens;
                        matches = $temp$matches;
                        references = $temp$references;
                        rawText = $temp$rawText;
                        continue strikethroughTTM;
                    }
                }
                else {
                    var $temp$remaining = tokensTail, $temp$tokens = _List_Cons(token, tokens), $temp$matches = matches, $temp$references = references, $temp$rawText = rawText;
                    remaining = $temp$remaining;
                    tokens = $temp$tokens;
                    matches = $temp$matches;
                    references = $temp$references;
                    rawText = $temp$rawText;
                    continue strikethroughTTM;
                }
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM = F5($dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch_fn = function (closeToken, matches, references, rawText, _v1) {
        var openToken = _v1.a;
        var remainTokens = _v1.c;
        var updatedOpenToken = function () {
            var _v2 = openToken.h;
            if ((_v2.$ === 9) && (!_v2.a)) {
                var _v3 = _v2.a;
                return _Utils_update(openToken, { e: openToken.e + 1, dH: openToken.dH - 1 });
            }
            else {
                return openToken;
            }
        }();
        var match = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn(references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType, updatedOpenToken, closeToken, _List_Nil);
        return _Utils_Tuple2(remainTokens, _List_Cons(match, matches));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch = F5($dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn = function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
        var textStart = openToken.e + openToken.dH;
        var textEnd = closeToken.e;
        var text = processText(_String_slice_fn(textStart, textEnd, rawText));
        var start = openToken.e;
        var end = closeToken.e + closeToken.dH;
        var match = { j: end, z: _List_Nil, s: start, fL: text, G: textEnd, B: textStart, aq: type_ };
        var matches = $elm$core$List$map_fn(function (_v0) {
            var matchModel = _v0;
            return $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch_fn(match, matchModel);
        }, $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches_fn(innerTokens, _List_Nil, references, rawText));
        return { j: end, z: matches, s: start, fL: text, G: textEnd, B: textStart, aq: type_ };
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch = F7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches_fn = function (tokens, matches, references, rawText) {
        return $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM_fn(tokens, _List_Nil, matches, references, rawText);
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches = F4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches_fn);
    var $dillonkearns$elm_markdown$Markdown$InlineParser$parse_fn = function (refs, rawText_) {
        var rawText = $elm$core$String$trim(rawText_);
        var tokens = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize(rawText);
        return $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches_fn(rawText, _List_Nil, $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches_fn(tokens, _List_Nil, refs, rawText))));
    }, $dillonkearns$elm_markdown$Markdown$InlineParser$parse = F2($dillonkearns$elm_markdown$Markdown$InlineParser$parse_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(" ", $elm$parser$Parser$Expecting(" "))),
        $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(">", $elm$parser$Parser$Expecting(">"))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($elm$core$Char$isAlpha, $elm$parser$Parser$Expecting("Alpha")), $elm$parser$Parser$Advanced$chompWhile(function (c) {
            return $elm$core$Char$isAlphaNum(c) || (c === "-");
        })), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(":", $elm$parser$Parser$Expecting(":"))),
            $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn("@", $elm$parser$Parser$Expecting("@"))),
            $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn("\\", $elm$parser$Parser$Expecting("\\"))),
            $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn("+", $elm$parser$Parser$Expecting("+"))),
            $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(".", $elm$parser$Parser$Expecting(".")))
        ])))
    ]));
    var $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (rawLine, _v0) {
        return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
    }, $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn("<", $elm$parser$Parser$Expecting("<"))), $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag), $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
    var $dillonkearns$elm_markdown$Markdown$Table$TableHeader = $elm$core$Basics$identity;
    var $dillonkearns$elm_markdown$Parser$Token$parseString = function (str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$Expecting(str)));
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper = function (_v0) {
        var curr = _v0.a;
        var acc = _v0.b;
        var _return = $elm$core$Maybe$withDefault_fn($elm$parser$Parser$Advanced$Done(acc), $elm$core$Maybe$map_fn(function (cell) {
            return $elm$parser$Parser$Advanced$Done(_List_Cons(cell, acc));
        }, curr));
        var finishCell = $elm$core$Maybe$withDefault_fn($elm$parser$Parser$Advanced$Loop(_Utils_Tuple2($elm$core$Maybe$Nothing, acc)), $elm$core$Maybe$map_fn(function (cell) {
            return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Cons(cell, acc)));
        }, curr));
        var addToCurrent = function (c) {
            return _Utils_ap($elm$core$Maybe$withDefault_fn("", curr), c);
        };
        var continueCell = function (c) {
            return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple2($elm$core$Maybe$Just(addToCurrent(c)), acc));
        };
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(function (_v1) {
                return _return;
            }, $dillonkearns$elm_markdown$Parser$Token$parseString("|\n")),
            $elm$parser$Parser$Advanced$map_fn(function (_v2) {
                return _return;
            }, $dillonkearns$elm_markdown$Parser$Token$parseString("\n")),
            $elm$parser$Parser$Advanced$map_fn(function (_v3) {
                return _return;
            }, $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end"))),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$succeed(continueCell("|"))), $dillonkearns$elm_markdown$Parser$Token$parseString("\\\\|")),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$succeed(continueCell("\\"))), $dillonkearns$elm_markdown$Parser$Token$parseString("\\\\")),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$succeed(continueCell("|"))), $dillonkearns$elm_markdown$Parser$Token$parseString("\\|")),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$succeed(finishCell)), $dillonkearns$elm_markdown$Parser$Token$parseString("|")),
            $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (_char, _v4) {
                return continueCell(_char);
            }, $elm$parser$Parser$Advanced$chompIf_fn($elm$core$Basics$always(true), $elm$parser$Parser$Problem("No character found")))
        ]));
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$parseCells = $elm$parser$Parser$Advanced$map_fn(A2($elm$core$List$foldl, F2(function (cell, acc) {
        return _List_Cons($elm$core$String$trim(cell), acc);
    }), _List_Nil), $elm$parser$Parser$Advanced$loop_fn(_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil), $dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper));
    var $dillonkearns$elm_markdown$Markdown$TableParser$rowParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $dillonkearns$elm_markdown$Parser$Token$parseString("|"),
        $elm$parser$Parser$Advanced$succeed(0)
    ]))), $dillonkearns$elm_markdown$Markdown$TableParser$parseCells);
    var $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader_fn = function (_v0, headersRow) {
        var columnAlignments = _v0.b;
        var headersWithAlignment = function (headers) {
            return _List_map2_fn_unwrapped(function (headerCell, alignment) {
                return { aI: alignment, dE: headerCell };
            }, headers, columnAlignments);
        };
        var combineHeaderAndDelimiter = function (headers) {
            return _Utils_eq($elm$core$List$length(headers), $elm$core$List$length(columnAlignments)) ? $elm$core$Result$Ok(headersWithAlignment(headers)) : $elm$core$Result$Err("Tables must have the same number of header columns (" + ($elm$core$String$fromInt($elm$core$List$length(headers)) + (") as delimiter columns (" + ($elm$core$String$fromInt($elm$core$List$length(columnAlignments)) + ")"))));
        };
        var _v1 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$TableParser$rowParser, headersRow);
        if (!_v1.$) {
            var headers = _v1.a;
            return combineHeaderAndDelimiter(headers);
        }
        else {
            return $elm$core$Result$Err("Unable to parse previous line as a table header");
        }
    }, $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader = F2($dillonkearns$elm_markdown$Markdown$TableParser$parseHeader_fn);
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock_fn = function (language, body) {
        return { gA: body, ha: language };
    }, $dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock = F2($dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock_fn);
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$infoString = function (fenceCharacter) {
        var toInfoString = F2(function (str, _v2) {
            var _v1 = $elm$core$String$trim(str);
            if (_v1 === "") {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var trimmed = _v1;
                return $elm$core$Maybe$Just(trimmed);
            }
        });
        var _v0 = fenceCharacter.aQ;
        if (!_v0) {
            return $elm$parser$Parser$Advanced$mapChompedString_fn(toInfoString, $elm$parser$Parser$Advanced$chompWhile(function (c) {
                return (c !== "`") && (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c));
            }));
        }
        else {
            return $elm$parser$Parser$Advanced$mapChompedString_fn(toInfoString, $elm$parser$Parser$Advanced$chompWhile(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd)));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$Backtick = 0;
    var $dillonkearns$elm_markdown$Parser$Token$backtick = $elm$parser$Parser$Advanced$Token_fn("`", $elm$parser$Parser$Expecting("a '`'"));
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick = { aJ: "`", aQ: 0, aZ: $dillonkearns$elm_markdown$Parser$Token$backtick };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation = function (_int) {
        switch (_int) {
            case 1:
                return $elm$parser$Parser$Advanced$succeed(0);
            case 2:
                return $elm$parser$Parser$Advanced$succeed(1);
            case 3:
                return $elm$parser$Parser$Advanced$succeed(2);
            case 4:
                return $elm$parser$Parser$Advanced$succeed(3);
            default:
                return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("Fenced code blocks should be indented no more than 3 spaces"));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast_fn = function (minLength, fenceCharacter) {
        var builtTokens = $elm$core$List$foldl_fn_unwrapped(function (t, p) {
            return $elm$parser$Parser$Advanced$ignorer_fn(p, t);
        }, $elm$parser$Parser$Advanced$succeed(0), $elm$core$List$repeat_fn(minLength, $elm$parser$Parser$Advanced$token(fenceCharacter.aZ)));
        return $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (str, _v0) {
            return _Utils_Tuple2(fenceCharacter, $elm$core$String$length(str));
        }, $elm$parser$Parser$Advanced$ignorer_fn(builtTokens, $elm$parser$Parser$Advanced$chompWhile($elm$core$Basics$eq(fenceCharacter.aJ))));
    }, $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast = F2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast_fn);
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$Tilde = 1;
    var $dillonkearns$elm_markdown$Parser$Token$tilde = $elm$parser$Parser$Advanced$Token_fn("~", $elm$parser$Parser$Expecting("a `~`"));
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde = { aJ: "~", aQ: 1, aZ: $dillonkearns$elm_markdown$Parser$Token$tilde };
    var $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Whitespace$space, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Whitespace$space,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Whitespace$space,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))),
        $elm$parser$Parser$Advanced$succeed(0)
    ]));
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(F2(function (indent, _v0) {
        var character = _v0.a;
        var length = _v0.b;
        return { aK: character, a9: indent, dH: length };
    })), $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces), $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation, $elm$parser$Parser$Advanced$getCol)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast_fn(3, $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick),
        $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast_fn(3, $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde)
    ])));
    var $dillonkearns$elm_markdown$Whitespace$isSpace_a0 = " ", $dillonkearns$elm_markdown$Whitespace$isSpace = $elm$core$Basics$eq($dillonkearns$elm_markdown$Whitespace$isSpace_a0);
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence_fn = function (minLength, fenceCharacter) {
        return $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces), $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast_fn(minLength, fenceCharacter)), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpace)), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
    }, $dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence = F2($dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence_fn);
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine = function (indented) {
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Parser$Extra$upTo_fn(indented, $dillonkearns$elm_markdown$Whitespace$space)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getOffset, $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    };
    var $elm$parser$Parser$Advanced$getSource = function (s) {
        return $elm$parser$Parser$Advanced$Good_fn(false, s.bh, s);
    };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp = function (_v0) {
        var fence = _v0.a;
        var body = _v0.b;
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(body)), $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd)),
            $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (lineEnd, _v1) {
                return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple2(fence, _Utils_ap(body, lineEnd)));
            }, $dillonkearns$elm_markdown$Whitespace$lineEnd),
            $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(body)), $dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence_fn(fence.dH, fence.aK))),
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(F3(function (start, end, source) {
                return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple2(fence, _Utils_ap(body, _String_slice_fn(start, end, source))));
            })), $dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine(fence.a9)), $elm$parser$Parser$Advanced$getOffset), $elm$parser$Parser$Advanced$getSource)
        ]));
    };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock = function (fence) {
        return $elm$parser$Parser$Advanced$loop_fn(_Utils_Tuple2(fence, ""), $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp);
    };
    var $dillonkearns$elm_markdown$Markdown$CodeBlock$parser = $elm$parser$Parser$Advanced$andThen_fn(function (fence) {
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Markdown$CodeBlock$infoString(fence.aK), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)), $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock(fence));
    }, $dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence);
    var $elm$core$String$dropRight_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(0, -n, string);
    }, $elm$core$String$dropRight = F2($elm$core$String$dropRight_fn);
    var $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes = function (headingString) {
        dropTrailingHashes: while (true) {
            if (_String_endsWith_fn("#", headingString)) {
                var $temp$headingString = $elm$core$String$dropRight_fn(1, headingString);
                headingString = $temp$headingString;
                continue dropTrailingHashes;
            }
            else {
                return headingString;
            }
        }
    };
    var $elm$core$String$trimRight = _String_trimRight;
    var $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence = function (headingString) {
        var droppedTrailingHashesString = $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(headingString);
        return (_String_endsWith_fn(" ", droppedTrailingHashesString) || $elm$core$String$isEmpty(droppedTrailingHashesString)) ? $elm$core$String$trimRight(droppedTrailingHashesString) : headingString;
    };
    var $dillonkearns$elm_markdown$Parser$Token$hash = $elm$parser$Parser$Advanced$Token_fn("#", $elm$parser$Parser$Expecting("a `#`"));
    var $dillonkearns$elm_markdown$Markdown$Heading$isHash = function (c) {
        if ("#" === c) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(function (c) {
        return (c === " ") || ((c === "\n") || (c === "\r"));
    });
    var $dillonkearns$elm_markdown$Markdown$Heading$parser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Heading), $elm$parser$Parser$Advanced$andThen_fn(function (startingSpaces) {
        var startSpace = $elm$core$String$length(startingSpaces);
        return (startSpace >= 4) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("heading with < 4 spaces in front")) : $elm$parser$Parser$Advanced$succeed(startSpace);
    }, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$spaces))), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$hash)), $elm$parser$Parser$Advanced$andThen_fn(function (additionalHashes) {
        var level = $elm$core$String$length(additionalHashes) + 1;
        return (level >= 7) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("heading with < 7 #'s")) : $elm$parser$Parser$Advanced$succeed(level);
    }, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Markdown$Heading$isHash)))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(""), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline)),
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
            $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab)
        ]))), $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (headingText, _v0) {
            return $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence($elm$core$String$trim(headingText));
        }, $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd))
    ])));
    var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
    var $elm$parser$Parser$Advanced$fromInfo_fn = function (row, col, x, context) {
        return $elm$parser$Parser$Advanced$AddRight_fn($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_fn(row, col, x, context));
    }, $elm$parser$Parser$Advanced$fromInfo = F4($elm$parser$Parser$Advanced$fromInfo_fn);
    var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        return function (s) {
            var _v1 = _Parser_findSubString_fn(str, s.g, s.hI, s.b1, s.bh);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromInfo_fn(newRow, newCol, expecting, s.i)) : $elm$parser$Parser$Advanced$Good_fn(_Utils_cmp(s.g, newOffset) < 0, 0, { b1: newCol, i: s.i, m: s.m, g: newOffset, hI: newRow, bh: s.bh });
        };
    };
    var $dillonkearns$elm_markdown$Parser$Token$greaterThan = $elm$parser$Parser$Advanced$Token_fn(">", $elm$parser$Parser$Expecting("a `>`"));
    var $elm$parser$Parser$Advanced$Located_fn = function (row, col, context) {
        return { b1: col, i: context, hI: row };
    }, $elm$parser$Parser$Advanced$Located = F3($elm$parser$Parser$Advanced$Located_fn);
    var $elm$parser$Parser$Advanced$changeContext_fn = function (newContext, s) {
        return { b1: s.b1, i: newContext, m: s.m, g: s.g, hI: s.hI, bh: s.bh };
    }, $elm$parser$Parser$Advanced$changeContext = F2($elm$parser$Parser$Advanced$changeContext_fn);
    var $elm$parser$Parser$Advanced$inContext_fn = function (context, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse($elm$parser$Parser$Advanced$changeContext_fn(_List_Cons($elm$parser$Parser$Advanced$Located_fn(s0.hI, s0.b1, context), s0.i), s0));
            if (!_v1.$) {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, a, $elm$parser$Parser$Advanced$changeContext_fn(s0.i, s1));
            }
            else {
                var step = _v1;
                return step;
            }
        };
    }, $elm$parser$Parser$Advanced$inContext = F2($elm$parser$Parser$Advanced$inContext_fn);
    var $dillonkearns$elm_markdown$Whitespace$isWhitespace = function (_char) {
        switch (_char) {
            case " ":
                return true;
            case "\n":
                return true;
            case "\t":
                return true;
            case "\v":
                return true;
            case "\f":
                return true;
            case "\r":
                return true;
            default:
                return false;
        }
    };
    var $dillonkearns$elm_markdown$Parser$Token$lessThan = $elm$parser$Parser$Advanced$Token_fn("<", $elm$parser$Parser$Expecting("a `<`"));
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser = $elm$parser$Parser$Advanced$inContext_fn("link destination", $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$lessThan)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$greaterThan)), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$greaterThan))),
        $elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isWhitespace)))
    ])));
    var $dillonkearns$elm_markdown$Parser$Token$closingSquareBracket = $elm$parser$Parser$Advanced$Token_fn("]", $elm$parser$Parser$Expecting("a `]`"));
    var $dillonkearns$elm_markdown$Parser$Token$openingSquareBracket = $elm$parser$Parser$Advanced$Token_fn("[", $elm$parser$Parser$Expecting("a `[`"));
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$openingSquareBracket)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$closingSquareBracket)), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("]:", $elm$parser$Parser$Expecting("]:")))));
    var $dillonkearns$elm_markdown$Parser$Token$doubleQuote = $elm$parser$Parser$Advanced$Token_fn("\"", $elm$parser$Parser$Expecting("a double quote"));
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine = function (str) {
        return _String_contains_fn("\n\n", str) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("no blank line")) : $elm$parser$Parser$Advanced$succeed(str);
    };
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline = $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompWhile(function (c) {
        return (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c)) && $dillonkearns$elm_markdown$Whitespace$isWhitespace(c);
    }), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
    var $dillonkearns$elm_markdown$Whitespace$requiredWhitespace = $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$chompIf_fn($dillonkearns$elm_markdown$Whitespace$isWhitespace, $elm$parser$Parser$Expecting("Required whitespace")), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isWhitespace));
    var $dillonkearns$elm_markdown$Parser$Token$singleQuote = $elm$parser$Parser$Advanced$Token_fn("'", $elm$parser$Parser$Expecting("a single quote"));
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser = function () {
        var inSingleQuotes = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$singleQuote))), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)), $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
        var inDoubleQuotes = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$doubleQuote))), $elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)), $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
        return $elm$parser$Parser$Advanced$inContext_fn("title", $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Whitespace$requiredWhitespace), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                inDoubleQuotes,
                inSingleQuotes,
                $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
            ])))),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing), $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline)
        ])));
    }();
    var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser = $elm$parser$Parser$Advanced$inContext_fn("link reference definition", $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(F3(function (label, destination, title) {
        return _Utils_Tuple2(label, { gO: destination, hY: title });
    })), $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser, $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $dillonkearns$elm_markdown$Whitespace$lineEnd,
        $elm$parser$Parser$Advanced$succeed(0)
    ]))), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))), $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser), $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser));
    var $dillonkearns$elm_markdown$ThematicBreak$ThematicBreak = 0;
    var $dillonkearns$elm_markdown$ThematicBreak$whitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
    var $dillonkearns$elm_markdown$ThematicBreak$withChar = function (tchar) {
        var token = $dillonkearns$elm_markdown$Parser$Token$parseString($elm$core$String$fromChar(tchar));
        return $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), token), $dillonkearns$elm_markdown$ThematicBreak$whitespace), token), $dillonkearns$elm_markdown$ThematicBreak$whitespace), token), $elm$parser$Parser$Advanced$chompWhile(function (c) {
            return _Utils_eq(c, tchar) || $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab(c);
        })), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
    };
    var $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $dillonkearns$elm_markdown$ThematicBreak$withChar("-"),
        $dillonkearns$elm_markdown$ThematicBreak$withChar("*"),
        $dillonkearns$elm_markdown$ThematicBreak$withChar("_")
    ]));
    var $dillonkearns$elm_markdown$ThematicBreak$parser = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Whitespace$space), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Whitespace$space,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Whitespace$space,
            $elm$parser$Parser$Advanced$succeed(0)
        ]))), $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak),
        $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak
    ]));
    var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelOne = 0;
    var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelTwo = 1;
    var $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine_fn = function (a, b) {
        return { $: 13, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine = F2($dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine_fn);
    var $dillonkearns$elm_markdown$Parser$Token$equals = $elm$parser$Parser$Advanced$Token_fn("=", $elm$parser$Parser$Expecting("a `=`"));
    var $dillonkearns$elm_markdown$Parser$Token$minus = $elm$parser$Parser$Advanced$Token_fn("-", $elm$parser$Parser$Expecting("a `-`"));
    var $dillonkearns$elm_markdown$Markdown$Parser$setextLineParser = function () {
        var setextLevel = F3(function (level, levelToken, levelChar) {
            return $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(level), $elm$parser$Parser$Advanced$token(levelToken)), $elm$parser$Parser$Advanced$chompWhile($elm$core$Basics$eq(levelChar)));
        });
        return $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (raw, level) {
            return $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine_fn(level, raw);
        }, $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A3(setextLevel, 0, $dillonkearns$elm_markdown$Parser$Token$equals, "="),
            A3(setextLevel, 1, $dillonkearns$elm_markdown$Parser$Token$minus, "-")
        ])), $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
    }();
    var $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter = function (a) {
        return { $: 9, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
    var $dillonkearns$elm_markdown$Parser$Extra$maybeChomp = function (condition) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$chompIf_fn(condition, $elm$parser$Parser$Problem("Character not found")),
            $elm$parser$Parser$Advanced$succeed(0)
        ]));
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst = function (columns) {
        return $elm$core$List$isEmpty(columns) ? $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Parser$Token$parseString("|"),
            $elm$parser$Parser$Advanced$succeed(0)
        ])) : $dillonkearns$elm_markdown$Parser$Token$parseString("|");
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp = function (revDelimiterColumns) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$map_fn(function (_v0) {
                return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
            }, $dillonkearns$elm_markdown$Parser$Token$parseString("|\n"))),
            $elm$parser$Parser$Advanced$map_fn(function (_v1) {
                return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
            }, $dillonkearns$elm_markdown$Parser$Token$parseString("\n")),
            $elm$parser$Parser$Advanced$map_fn(function (_v2) {
                return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
            }, $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end"))),
            $elm$parser$Parser$Advanced$backtrackable($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(revDelimiterColumns)), $dillonkearns$elm_markdown$Parser$Token$parseString("|")), $elm$parser$Parser$Advanced$end($elm$parser$Parser$Expecting("end")))),
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(function (column) {
                return $elm$parser$Parser$Advanced$Loop(_List_Cons(column, revDelimiterColumns));
            }), $dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst(revDelimiterColumns)), $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), $dillonkearns$elm_markdown$Parser$Extra$maybeChomp(function (c) {
                return c === ":";
            })), $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(function (c) {
                return c === "-";
            })), $dillonkearns$elm_markdown$Parser$Extra$maybeChomp(function (c) {
                return c === ":";
            }))), $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace))
        ]));
    };
    var $dillonkearns$elm_markdown$Markdown$Block$AlignCenter = 2;
    var $dillonkearns$elm_markdown$Markdown$Block$AlignLeft = 0;
    var $dillonkearns$elm_markdown$Markdown$Block$AlignRight = 1;
    var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment = function (cell) {
        var _v0 = _Utils_Tuple2(_String_startsWith_fn(":", cell), _String_endsWith_fn(":", cell));
        if (_v0.a) {
            if (_v0.b) {
                return $elm$core$Maybe$Just(2);
            }
            else {
                return $elm$core$Maybe$Just(0);
            }
        }
        else {
            if (_v0.b) {
                return $elm$core$Maybe$Just(1);
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        }
    };
    var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser = $elm$parser$Parser$Advanced$andThen_fn(function (delimiterRow) {
        var trimmed = delimiterRow.a.gb;
        var headers = delimiterRow.b;
        return $elm$core$List$isEmpty(headers) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Expecting("Must have at least one column in delimiter row.")) : ((($elm$core$List$length(headers) === 1) && (!(_String_startsWith_fn("|", trimmed) && _String_endsWith_fn("|", trimmed)))) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("Tables with a single column must have pipes at the start and end of the delimiter row to avoid ambiguity.")) : $elm$parser$Parser$Advanced$succeed(delimiterRow));
    }, $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped(function (delimiterText, revDelimiterColumns) {
        return $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow_fn({
            eP: delimiterText,
            gb: $elm$core$String$trim(delimiterText)
        }, $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment, $elm$core$List$reverse(revDelimiterColumns)));
    }, $elm$parser$Parser$Advanced$loop_fn(_List_Nil, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp)));
    var $dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph = $elm$parser$Parser$Advanced$map_fn($dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser);
    var $elm$core$List$takeReverse_fn = function (n, list, kept) {
        takeReverse: while (true) {
            if (n <= 0) {
                return kept;
            }
            else {
                if (!list.b) {
                    return kept;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = _List_Cons(x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    }, $elm$core$List$takeReverse = F3($elm$core$List$takeReverse_fn);
    var $elm$core$List$takeTailRec_fn = function (n, list) {
        return $elm$core$List$reverse($elm$core$List$takeReverse_fn(n, list, _List_Nil));
    }, $elm$core$List$takeTailRec = F2($elm$core$List$takeTailRec_fn);
    var $elm$core$List$takeFast_fn = function (ctr, n, list) {
        if (n <= 0) {
            return _List_Nil;
        }
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while (true) {
                _v0$5: while (true) {
                    if (!_v0.b.b) {
                        return list;
                    }
                    else {
                        if (_v0.b.b.b) {
                            switch (_v0.a) {
                                case 1:
                                    break _v0$1;
                                case 2:
                                    var _v2 = _v0.b;
                                    var x = _v2.a;
                                    var _v3 = _v2.b;
                                    var y = _v3.a;
                                    return _List_fromArray([x, y]);
                                case 3:
                                    if (_v0.b.b.b.b) {
                                        var _v4 = _v0.b;
                                        var x = _v4.a;
                                        var _v5 = _v4.b;
                                        var y = _v5.a;
                                        var _v6 = _v5.b;
                                        var z = _v6.a;
                                        return _List_fromArray([x, y, z]);
                                    }
                                    else {
                                        break _v0$5;
                                    }
                                default:
                                    if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                                        var _v7 = _v0.b;
                                        var x = _v7.a;
                                        var _v8 = _v7.b;
                                        var y = _v8.a;
                                        var _v9 = _v8.b;
                                        var z = _v9.a;
                                        var _v10 = _v9.b;
                                        var w = _v10.a;
                                        var tl = _v10.b;
                                        return (ctr > 1000) ? _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeTailRec_fn(n - 4, tl))))) : _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeFast_fn(ctr + 1, n - 4, tl)))));
                                    }
                                    else {
                                        break _v0$5;
                                    }
                            }
                        }
                        else {
                            if (_v0.a === 1) {
                                break _v0$1;
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray([x]);
        }
    }, $elm$core$List$takeFast = F3($elm$core$List$takeFast_fn);
    var $elm$core$List$take_fn = function (n, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; i < n && xs.b; xs = xs.
            b, i++) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$take = F2($elm$core$List$take_fn);
    var $dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength_fn = function (expectedLength, row) {
        var rowLength = $elm$core$List$length(row);
        var _v0 = _Utils_compare_fn(expectedLength, rowLength);
        switch (_v0) {
            case 0:
                return $elm$core$List$take_fn(expectedLength, row);
            case 1:
                return row;
            default:
                return _Utils_ap(row, $elm$core$List$repeat_fn(expectedLength - rowLength, ""));
        }
    }, $dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength = F2($dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength_fn);
    var $dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser = function (expectedRowLength) {
        return $elm$parser$Parser$Advanced$andThen_fn(function (row) {
            return ($elm$core$List$isEmpty(row) || $elm$core$List$all_fn($elm$core$String$isEmpty, row)) ? $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem("A line must have at least one column")) : $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength_fn(expectedRowLength, row));
        }, $dillonkearns$elm_markdown$Markdown$TableParser$rowParser);
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted = function (_v0) {
        var headers = _v0.a;
        var body = _v0.b;
        return $elm$parser$Parser$Advanced$map_fn(function (row) {
            return $dillonkearns$elm_markdown$Markdown$RawBlock$Table($dillonkearns$elm_markdown$Markdown$Table$Table_fn(headers, _Utils_ap(body, _List_fromArray([row]))));
        }, $dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser($elm$core$List$length(headers)));
    };
    var $dillonkearns$elm_markdown$Markdown$Block$H1 = 0;
    var $dillonkearns$elm_markdown$Markdown$Block$H2 = 1;
    var $dillonkearns$elm_markdown$Markdown$Block$H3 = 2;
    var $dillonkearns$elm_markdown$Markdown$Block$H4 = 3;
    var $dillonkearns$elm_markdown$Markdown$Block$H5 = 4;
    var $dillonkearns$elm_markdown$Markdown$Block$H6 = 5;
    var $dillonkearns$elm_markdown$Markdown$Parser$toHeading = function (level) {
        switch (level) {
            case 1:
                return $elm$core$Result$Ok(0);
            case 2:
                return $elm$core$Result$Ok(1);
            case 3:
                return $elm$core$Result$Ok(2);
            case 4:
                return $elm$core$Result$Ok(3);
            case 5:
                return $elm$core$Result$Ok(4);
            case 6:
                return $elm$core$Result$Ok(5);
            default:
                return $elm$core$Result$Err($elm$parser$Parser$Expecting("A heading with 1 to 6 #'s, but found " + $elm$core$String$fromInt(level)));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem = { $: 2 };
    var $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem = function (a) {
        return { $: 1, a: a };
    };
    var $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem = F2($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem_fn);
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem_fn = function (markerStartPos, listMarker, markerEndPos, _v0) {
        var bodyStartPos = _v0.a;
        var item = _v0.b;
        var spaceNum = bodyStartPos - markerEndPos;
        if (spaceNum <= 4) {
            return _Utils_Tuple3(listMarker, bodyStartPos - markerStartPos, item);
        }
        else {
            var intendedCodeItem = function () {
                switch (item.$) {
                    case 0:
                        var completion = item.a;
                        var string = item.b;
                        return $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem_fn(completion, _Utils_ap($elm$core$String$repeat_fn(spaceNum - 1, " "), string));
                    case 1:
                        var string = item.a;
                        return $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem(_Utils_ap($elm$core$String$repeat_fn(spaceNum - 1, " "), string));
                    default:
                        return $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem;
                }
            }();
            return _Utils_Tuple3(listMarker, (markerEndPos - markerStartPos) + 1, intendedCodeItem);
        }
    }, $dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem = F4($dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem_fn);
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed(function (bodyStartPos) {
        return _Utils_Tuple2(bodyStartPos, $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem);
    }), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Markdown$ListItem$Complete = 1;
    var $dillonkearns$elm_markdown$Markdown$ListItem$Incomplete = 0;
    var $dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("[x] ", $elm$parser$Parser$ExpectingSymbol("[x] ")))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("[X] ", $elm$parser$Parser$ExpectingSymbol("[X] ")))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("[ ] ", $elm$parser$Parser$ExpectingSymbol("[ ] "))))
    ]));
    var $dillonkearns$elm_markdown$Markdown$ListItem$parser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem), $elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser, $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))),
        $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$PlainItem)
    ])), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(F2(function (bodyStartPos, item) {
        return _Utils_Tuple2(bodyStartPos, item);
    })), $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)), $elm$parser$Parser$Advanced$getCol), $dillonkearns$elm_markdown$Markdown$ListItem$parser);
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$Asterisk = 2;
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$Minus = 0;
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$Plus = 1;
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(0), $dillonkearns$elm_markdown$Parser$Extra$upTo_fn(3, $dillonkearns$elm_markdown$Whitespace$space)), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("-", $elm$parser$Parser$ExpectingSymbol("-")))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(1), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("+", $elm$parser$Parser$ExpectingSymbol("+")))),
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed(2), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn("*", $elm$parser$Parser$ExpectingSymbol("*"))))
    ]));
    var $dillonkearns$elm_markdown$Markdown$UnorderedList$parser = function (previousWasBody) {
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem), $elm$parser$Parser$Advanced$getCol), $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser)), $elm$parser$Parser$Advanced$getCol), previousWasBody ? $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser])));
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock = function (previousWasBody) {
        var parseListItem = F2(function (listmarker, unparsedListItem) {
            switch (unparsedListItem.$) {
                case 0:
                    var completion = unparsedListItem.a;
                    var body = unparsedListItem.b;
                    return {
                        gA: body,
                        hd: listmarker,
                        fI: $elm$core$Maybe$Just(function () {
                            if (completion === 1) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }())
                    };
                case 1:
                    var body = unparsedListItem.a;
                    return { gA: body, hd: listmarker, fI: $elm$core$Maybe$Nothing };
                default:
                    return { gA: "", hd: listmarker, fI: $elm$core$Maybe$Nothing };
            }
        });
        return $elm$parser$Parser$Advanced$map_fn(function (_v0) {
            var listmarker = _v0.a;
            var intended = _v0.b;
            var unparsedListItem = _v0.c;
            return $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(true, intended, _List_Nil, A2(parseListItem, listmarker, unparsedListItem));
        }, $dillonkearns$elm_markdown$Markdown$UnorderedList$parser(previousWasBody));
    };
    var $elm$core$Result$withDefault_fn = function (def, result) {
        if (!result.$) {
            var a = result.a;
            return a;
        }
        else {
            return def;
        }
    }, $elm$core$Result$withDefault = F2($elm$core$Result$withDefault_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks_fn = function (node, blocks) {
        switch (node.$) {
            case 0:
                var tag = node.a;
                var attributes = node.b;
                var children = node.c;
                var _v106 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
                if (!_v106.$) {
                    var childrenAsBlocks = _v106.a;
                    var block = $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Block$HtmlElement_fn(tag, attributes, childrenAsBlocks));
                    return $elm$core$Result$Ok(_List_Cons(block, blocks));
                }
                else {
                    var err = _v106.a;
                    return $elm$core$Result$Err(err);
                }
            case 1:
                var innerText = node.a;
                var _v107 = $dillonkearns$elm_markdown$Markdown$Parser$parse(innerText);
                if (!_v107.$) {
                    var value = _v107.a;
                    return $elm$core$Result$Ok(_Utils_ap($elm$core$List$reverse(value), blocks));
                }
                else {
                    var error = _v107.a;
                    return $elm$core$Result$Err($elm$parser$Parser$Expecting($elm$core$String$join_fn("\n", $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, error))));
                }
            case 2:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)), blocks));
            case 3:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Block$Cdata(string)), blocks));
            case 4:
                var string = node.a;
                return $elm$core$Result$Ok(_List_Cons($dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)), blocks));
            default:
                var declarationType = node.a;
                var content = node.b;
                return $elm$core$Result$Ok(_List_Cons($dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration_fn(declarationType, content)), blocks));
        }
    }, $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks = F2($dillonkearns$elm_markdown$Markdown$Parser$childToBlocks_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$completeBlocks = function (state) {
        var _v91 = state.b;
        _v91$5: while (true) {
            if (_v91.b) {
                switch (_v91.a.$) {
                    case 11:
                        var body2 = _v91.a.a;
                        var rest = _v91.b;
                        var _v92 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                        if (!_v92.$) {
                            var value = _v92.a;
                            return $elm$parser$Parser$Advanced$succeed({
                                a: _Utils_ap(state.a, value.a),
                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.b), rest)
                            });
                        }
                        else {
                            var error = _v92.a;
                            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(error)));
                        }
                    case 3:
                        var _v93 = _v91.a;
                        var tight = _v93.a;
                        var intended = _v93.b;
                        var closeListItems = _v93.c;
                        var openListItem = _v93.d;
                        var rest = _v91.b;
                        var _v94 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem.gA);
                        if (!_v94.$) {
                            var value = _v94.a;
                            var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                            return $elm$parser$Parser$Advanced$succeed({
                                a: _Utils_ap(state.a, value.a),
                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight2, intended, _List_Cons({ gA: value.b, fI: openListItem.fI }, closeListItems), openListItem), rest)
                            });
                        }
                        else {
                            var e = _v94.a;
                            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                        }
                    case 4:
                        var _v99 = _v91.a;
                        var tight = _v99.a;
                        var intended = _v99.b;
                        var marker = _v99.c;
                        var order = _v99.d;
                        var closeListItems = _v99.e;
                        var openListItem = _v99.f;
                        var rest = _v91.b;
                        var _v100 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem);
                        if (!_v100.$) {
                            var value = _v100.a;
                            var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                            return $elm$parser$Parser$Advanced$succeed({
                                a: _Utils_ap(state.a, value.a),
                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight2, intended, marker, order, _List_Cons(value.b, closeListItems), openListItem), rest)
                            });
                        }
                        else {
                            var e = _v100.a;
                            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                        }
                    case 10:
                        if (_v91.b.b) {
                            switch (_v91.b.a.$) {
                                case 3:
                                    var _v95 = _v91.a;
                                    var _v96 = _v91.b;
                                    var _v97 = _v96.a;
                                    var tight = _v97.a;
                                    var intended = _v97.b;
                                    var closeListItems = _v97.c;
                                    var openListItem = _v97.d;
                                    var rest = _v96.b;
                                    var _v98 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem.gA);
                                    if (!_v98.$) {
                                        var value = _v98.a;
                                        var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight2, intended, _List_Cons({ gA: value.b, fI: openListItem.fI }, closeListItems), openListItem), rest)
                                        });
                                    }
                                    else {
                                        var e = _v98.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                case 4:
                                    var _v101 = _v91.a;
                                    var _v102 = _v91.b;
                                    var _v103 = _v102.a;
                                    var tight = _v103.a;
                                    var intended = _v103.b;
                                    var marker = _v103.c;
                                    var order = _v103.d;
                                    var closeListItems = _v103.e;
                                    var openListItem = _v103.f;
                                    var rest = _v102.b;
                                    var _v104 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem);
                                    if (!_v104.$) {
                                        var value = _v104.a;
                                        var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight2, intended, marker, order, _List_Cons(value.b, closeListItems), openListItem), rest)
                                        });
                                    }
                                    else {
                                        var e = _v104.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                default:
                                    break _v91$5;
                            }
                        }
                        else {
                            break _v91$5;
                        }
                    default:
                        break _v91$5;
                }
            }
            else {
                break _v91$5;
            }
        }
        return $elm$parser$Parser$Advanced$succeed(state);
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks_fn = function (state, newRawBlock) {
        var _v41 = _Utils_Tuple2(newRawBlock, state.b);
        _v41$13: while (true) {
            if (_v41.b.b) {
                switch (_v41.b.a.$) {
                    case 5:
                        if (_v41.a.$ === 5) {
                            var block1 = _v41.a.a;
                            var _v42 = _v41.b;
                            var block2 = _v42.a.a;
                            var rest = _v42.b;
                            return $elm$parser$Parser$Advanced$succeed({
                                a: state.a,
                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock({
                                    gA: $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn(block2.gA, block1.gA),
                                    ha: $elm$core$Maybe$Nothing
                                }), rest)
                            });
                        }
                        else {
                            break _v41$13;
                        }
                    case 6:
                        switch (_v41.a.$) {
                            case 6:
                                var block1 = _v41.a.a;
                                var _v43 = _v41.b;
                                var block2 = _v43.a.a;
                                var rest = _v43.b;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn(block2, block1)), rest)
                                });
                            case 10:
                                var _v44 = _v41.a;
                                var _v45 = _v41.b;
                                var block = _v45.a.a;
                                var rest = _v45.b;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn(block, "\n")), rest)
                                });
                            default:
                                break _v41$13;
                        }
                    case 11:
                        var _v46 = _v41.b;
                        var body2 = _v46.a.a;
                        var rest = _v46.b;
                        switch (newRawBlock.$) {
                            case 11:
                                var body1 = newRawBlock.a;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn(body2, body1)), rest)
                                });
                            case 1:
                                var body1 = newRawBlock.a;
                                var _v48 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                if (!_v48.$) {
                                    var value = _v48.a;
                                    var _v49 = value.b;
                                    if (_v49.b) {
                                        var last = _v49.a;
                                        if ($dillonkearns$elm_markdown$Markdown$Parser$endWithOpenBlockOrParagraph(last) && (!_String_endsWith_fn("\n", body2))) {
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: state.a,
                                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll_fn(body2, body1)), rest)
                                            });
                                        }
                                        else {
                                            var _v50 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                            if (!_v50.$) {
                                                var value1 = _v50.a;
                                                return $elm$parser$Parser$Advanced$succeed({
                                                    a: _Utils_ap(state.a, value.a),
                                                    b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.b), rest))
                                                });
                                            }
                                            else {
                                                var e1 = _v50.a;
                                                return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
                                            }
                                        }
                                    }
                                    else {
                                        var _v51 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                        if (!_v51.$) {
                                            var value1 = _v51.a;
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.b), rest))
                                            });
                                        }
                                        else {
                                            var e1 = _v51.a;
                                            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
                                        }
                                    }
                                }
                                else {
                                    var e = _v48.a;
                                    return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                }
                            case 6:
                                var body1 = newRawBlock.a;
                                var _v52 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                if (!_v52.$) {
                                    var value = _v52.a;
                                    var _v53 = value.b;
                                    if (_v53.b && (_v53.a.$ === 1)) {
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: state.a,
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn(" ", body2, body1)), rest)
                                        });
                                    }
                                    else {
                                        var _v54 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                        if (!_v54.$) {
                                            var value1 = _v54.a;
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value1.b), rest))
                                            });
                                        }
                                        else {
                                            var e1 = _v54.a;
                                            return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e1)));
                                        }
                                    }
                                }
                                else {
                                    var e = _v52.a;
                                    return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                }
                            default:
                                var _v55 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), body2);
                                if (!_v55.$) {
                                    var value = _v55.a;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: _Utils_ap(state.a, value.a),
                                        b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.b), rest))
                                    });
                                }
                                else {
                                    var e = _v55.a;
                                    return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                }
                        }
                    case 3:
                        var _v56 = _v41.b;
                        var _v57 = _v56.a;
                        var tight = _v57.a;
                        var intended1 = _v57.b;
                        var closeListItems2 = _v57.c;
                        var openListItem2 = _v57.d;
                        var rest = _v56.b;
                        switch (newRawBlock.$) {
                            case 3:
                                var intended2 = newRawBlock.b;
                                var openListItem1 = newRawBlock.d;
                                if (_Utils_eq(openListItem2.hd, openListItem1.hd)) {
                                    var _v59 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2.gA);
                                    if (!_v59.$) {
                                        var value = _v59.a;
                                        return $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(false, intended2, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem1), rest)
                                        }) : $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended2, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem1), rest)
                                        });
                                    }
                                    else {
                                        var e = _v59.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                }
                                else {
                                    var _v60 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2.gA);
                                    if (!_v60.$) {
                                        var value = _v60.a;
                                        var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight2, intended1, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem1), rest))
                                        });
                                    }
                                    else {
                                        var e = _v60.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                }
                            case 1:
                                var body1 = newRawBlock.a;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended1, closeListItems2, _Utils_update(openListItem2, {
                                        gA: $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("\n", openListItem2.gA, body1)
                                    })), rest)
                                });
                            default:
                                var _v61 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2.gA);
                                if (!_v61.$) {
                                    var value = _v61.a;
                                    var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: _Utils_ap(state.a, value.a),
                                        b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight2, intended1, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem2), rest))
                                    });
                                }
                                else {
                                    var e = _v61.a;
                                    return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                }
                        }
                    case 4:
                        var _v62 = _v41.b;
                        var _v63 = _v62.a;
                        var tight = _v63.a;
                        var intended1 = _v63.b;
                        var marker = _v63.c;
                        var order = _v63.d;
                        var closeListItems2 = _v63.e;
                        var openListItem2 = _v63.f;
                        var rest = _v62.b;
                        switch (newRawBlock.$) {
                            case 4:
                                var intended2 = newRawBlock.b;
                                var marker2 = newRawBlock.c;
                                var openListItem1 = newRawBlock.f;
                                if (_Utils_eq(marker, marker2)) {
                                    var _v65 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2);
                                    if (!_v65.$) {
                                        var value = _v65.a;
                                        var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight2, intended2, marker, order, _List_Cons(value.b, closeListItems2), openListItem1), rest)
                                        });
                                    }
                                    else {
                                        var e = _v65.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                }
                                else {
                                    var _v66 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2);
                                    if (!_v66.$) {
                                        var value = _v66.a;
                                        var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                        return $elm$parser$Parser$Advanced$succeed({
                                            a: _Utils_ap(state.a, value.a),
                                            b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight2, intended1, marker, order, _List_Cons(value.b, closeListItems2), openListItem2), rest))
                                        });
                                    }
                                    else {
                                        var e = _v66.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                }
                            case 1:
                                var body1 = newRawBlock.a;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended1, marker, order, closeListItems2, openListItem2 + ("\n" + body1)), rest)
                                });
                            default:
                                var _v67 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2);
                                if (!_v67.$) {
                                    var value = _v67.a;
                                    var tight2 = $elm$core$List$member_fn($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: _Utils_ap(state.a, value.a),
                                        b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight2, intended1, marker, order, _List_Cons(value.b, closeListItems2), openListItem2), rest))
                                    });
                                }
                                else {
                                    var e = _v67.a;
                                    return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                }
                        }
                    case 1:
                        switch (_v41.a.$) {
                            case 1:
                                var body1 = _v41.a.a;
                                var _v68 = _v41.b;
                                var body2 = _v68.a.a;
                                var rest = _v68.b;
                                return $elm$parser$Parser$Advanced$succeed({
                                    a: state.a,
                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("\n", body2, body1)), rest)
                                });
                            case 13:
                                if (!_v41.a.a) {
                                    var _v69 = _v41.a;
                                    var _v70 = _v69.a;
                                    var _v71 = _v41.b;
                                    var unparsedInlines = _v71.a.a;
                                    var rest = _v71.b;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: state.a,
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$Heading_fn(1, unparsedInlines), rest)
                                    });
                                }
                                else {
                                    var _v72 = _v41.a;
                                    var _v73 = _v72.a;
                                    var _v74 = _v41.b;
                                    var unparsedInlines = _v74.a.a;
                                    var rest = _v74.b;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: state.a,
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$Heading_fn(2, unparsedInlines), rest)
                                    });
                                }
                            case 9:
                                var _v75 = _v41.a.a;
                                var text = _v75.a;
                                var alignments = _v75.b;
                                var _v76 = _v41.b;
                                var rawHeaders = _v76.a.a;
                                var rest = _v76.b;
                                var _v77 = $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader_fn($dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow_fn(text, alignments), rawHeaders);
                                if (!_v77.$) {
                                    var headers = _v77.a;
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: state.a,
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$Table($dillonkearns$elm_markdown$Markdown$Table$Table_fn(headers, _List_Nil)), rest)
                                    });
                                }
                                else {
                                    return $elm$parser$Parser$Advanced$succeed({
                                        a: state.a,
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("\n", rawHeaders, text.eP)), rest)
                                    });
                                }
                            default:
                                break _v41$13;
                        }
                    case 8:
                        if (_v41.a.$ === 8) {
                            var updatedTable = _v41.a.a;
                            var _v78 = _v41.b;
                            var rest = _v78.b;
                            return $elm$parser$Parser$Advanced$succeed({
                                a: state.a,
                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$Table(updatedTable), rest)
                            });
                        }
                        else {
                            break _v41$13;
                        }
                    case 10:
                        if (_v41.b.b.b) {
                            switch (_v41.b.b.a.$) {
                                case 4:
                                    var _v79 = _v41.b;
                                    var _v80 = _v79.a;
                                    var _v81 = _v79.b;
                                    var _v82 = _v81.a;
                                    var tight = _v82.a;
                                    var intended1 = _v82.b;
                                    var marker = _v82.c;
                                    var order = _v82.d;
                                    var closeListItems2 = _v82.e;
                                    var openListItem2 = _v82.f;
                                    var rest = _v81.b;
                                    var _v83 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2);
                                    if (!_v83.$) {
                                        var value = _v83.a;
                                        if (newRawBlock.$ === 4) {
                                            var intended2 = newRawBlock.b;
                                            var openListItem = newRawBlock.f;
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(false, intended2, marker, order, _List_Cons(value.b, closeListItems2), openListItem), rest)
                                            });
                                        }
                                        else {
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended1, marker, order, _List_Cons(value.b, closeListItems2), openListItem2), rest)))
                                            });
                                        }
                                    }
                                    else {
                                        var e = _v83.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                case 3:
                                    var _v85 = _v41.b;
                                    var _v86 = _v85.a;
                                    var _v87 = _v85.b;
                                    var _v88 = _v87.a;
                                    var tight = _v88.a;
                                    var intended1 = _v88.b;
                                    var closeListItems2 = _v88.c;
                                    var openListItem2 = _v88.d;
                                    var rest = _v87.b;
                                    var _v89 = $elm$parser$Parser$Advanced$run_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), openListItem2.gA);
                                    if (!_v89.$) {
                                        var value = _v89.a;
                                        if (newRawBlock.$ === 3) {
                                            var openListItem = newRawBlock.d;
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(false, intended1, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem), rest)
                                            });
                                        }
                                        else {
                                            return $elm$parser$Parser$Advanced$succeed({
                                                a: _Utils_ap(state.a, value.a),
                                                b: _List_Cons(newRawBlock, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended1, _List_Cons({ gA: value.b, fI: openListItem2.fI }, closeListItems2), openListItem2), rest)))
                                            });
                                        }
                                    }
                                    else {
                                        var e = _v89.a;
                                        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem($dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
                                    }
                                default:
                                    break _v41$13;
                            }
                        }
                        else {
                            break _v41$13;
                        }
                    default:
                        break _v41$13;
                }
            }
            else {
                break _v41$13;
            }
        }
        return $elm$parser$Parser$Advanced$succeed({
            a: state.a,
            b: _List_Cons(newRawBlock, state.b)
        });
    }, $dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks = F2($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn = function (referencesDict, _v36) {
        var unparsedInlines = _v36;
        var mappedReferencesDict = $elm$core$Dict$fromList($elm$core$List$map_fn($elm$core$Tuple$mapSecond(function (_v37) {
            var destination = _v37.gO;
            var title = _v37.hY;
            return _Utils_Tuple2(destination, title);
        }), referencesDict));
        return $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, $dillonkearns$elm_markdown$Markdown$InlineParser$parse_fn(mappedReferencesDict, unparsedInlines));
    }, $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper = F2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$mapInline = function (inline) {
        switch (inline.$) {
            case 0:
                var string = inline.a;
                return $dillonkearns$elm_markdown$Markdown$Block$Text(string);
            case 1:
                return $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak;
            case 2:
                var string = inline.a;
                return $dillonkearns$elm_markdown$Markdown$Block$CodeSpan(string);
            case 3:
                var string = inline.a;
                var maybeString = inline.b;
                var inlines = inline.c;
                return $dillonkearns$elm_markdown$Markdown$Block$Link_fn(string, maybeString, $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
            case 4:
                var string = inline.a;
                var maybeString = inline.b;
                var inlines = inline.c;
                return $dillonkearns$elm_markdown$Markdown$Block$Image_fn(string, maybeString, $elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
            case 5:
                var node = inline.a;
                return $dillonkearns$elm_markdown$Markdown$Block$HtmlInline($dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(node));
            case 6:
                var level = inline.a;
                var inlines = inline.b;
                switch (level) {
                    case 1:
                        return $dillonkearns$elm_markdown$Markdown$Block$Emphasis($elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
                    case 2:
                        return $dillonkearns$elm_markdown$Markdown$Block$Strong($elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
                    default:
                        return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(level) ? $dillonkearns$elm_markdown$Markdown$Block$Strong(_List_fromArray([
                            $dillonkearns$elm_markdown$Markdown$Parser$mapInline($dillonkearns$elm_markdown$Markdown$Inline$Emphasis_fn(level - 2, inlines))
                        ])) : $dillonkearns$elm_markdown$Markdown$Block$Emphasis(_List_fromArray([
                            $dillonkearns$elm_markdown$Markdown$Parser$mapInline($dillonkearns$elm_markdown$Markdown$Inline$Emphasis_fn(level - 1, inlines))
                        ]));
                }
            default:
                var inlines = inline.a;
                return $dillonkearns$elm_markdown$Markdown$Block$Strikethrough($elm$core$List$map_fn($dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock = function (node) {
        switch (node.$) {
            case 1:
                return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment("TODO this never happens, but use types to drop this case.");
            case 0:
                var tag = node.a;
                var attributes = node.b;
                var children = node.c;
                var parseChild = function (child) {
                    if (child.$ === 1) {
                        var text = child.a;
                        return $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks(text);
                    }
                    else {
                        return _List_fromArray([
                            $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock($dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(child))
                        ]);
                    }
                };
                return $dillonkearns$elm_markdown$Markdown$Block$HtmlElement_fn(tag, attributes, $elm$core$List$concatMap_fn(parseChild, children));
            case 2:
                var string = node.a;
                return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string);
            case 3:
                var string = node.a;
                return $dillonkearns$elm_markdown$Markdown$Block$Cdata(string);
            case 4:
                var string = node.a;
                return $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string);
            default:
                var declarationType = node.a;
                var content = node.b;
                return $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration_fn(declarationType, content);
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks = function (children) {
        return $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp_fn(children, _List_Nil);
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp_fn = function (remaining, soFar) {
        nodesToBlocksHelp: while (true) {
            if (remaining.b) {
                var node = remaining.a;
                var rest = remaining.b;
                var _v31 = $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks_fn(node, soFar);
                if (!_v31.$) {
                    var newSoFar = _v31.a;
                    var $temp$remaining = rest, $temp$soFar = newSoFar;
                    remaining = $temp$remaining;
                    soFar = $temp$soFar;
                    continue nodesToBlocksHelp;
                }
                else {
                    var e = _v31.a;
                    return $elm$core$Result$Err(e);
                }
            }
            else {
                return $elm$core$Result$Ok($elm$core$List$reverse(soFar));
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp = F2($dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$parse = function (input) {
        var _v27 = $elm$parser$Parser$Advanced$run_fn($elm$parser$Parser$Advanced$ignorer_fn($dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(), $dillonkearns$elm_markdown$Helpers$endOfFile), input);
        if (_v27.$ === 1) {
            var e = _v27.a;
            return $elm$core$Result$Err(e);
        }
        else {
            var v = _v27.a;
            var _v28 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(v);
            if (_v28.$ === 1) {
                var e = _v28.a;
                return $elm$parser$Parser$Advanced$run_fn($elm$parser$Parser$Advanced$problem(e), "");
            }
            else {
                var blocks = _v28.a;
                var isNotEmptyParagraph = function (block) {
                    if ((block.$ === 5) && (!block.a.b)) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                return $elm$core$Result$Ok($elm$core$List$filter_fn(isNotEmptyParagraph, blocks));
            }
        }
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines = function (state) {
        return $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp_fn(state, state.b, _List_Nil);
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp_fn = function (state, rawBlocks, parsedBlocks) {
        parseAllInlinesHelp: while (true) {
            if (rawBlocks.b) {
                var rawBlock = rawBlocks.a;
                var rest = rawBlocks.b;
                var _v26 = $dillonkearns$elm_markdown$Markdown$Parser$parseInlines_fn(state.a, rawBlock);
                switch (_v26.$) {
                    case 1:
                        var newParsedBlock = _v26.a;
                        var $temp$state = state, $temp$rawBlocks = rest, $temp$parsedBlocks = _List_Cons(newParsedBlock, parsedBlocks);
                        state = $temp$state;
                        rawBlocks = $temp$rawBlocks;
                        parsedBlocks = $temp$parsedBlocks;
                        continue parseAllInlinesHelp;
                    case 0:
                        var $temp$state = state, $temp$rawBlocks = rest, $temp$parsedBlocks = parsedBlocks;
                        state = $temp$state;
                        rawBlocks = $temp$rawBlocks;
                        parsedBlocks = $temp$parsedBlocks;
                        continue parseAllInlinesHelp;
                    default:
                        var e = _v26.a;
                        return $elm$core$Result$Err(e);
                }
            }
            else {
                return $elm$core$Result$Ok(parsedBlocks);
            }
        }
    }, $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp = F3($dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines_fn = function (linkReferences, header) {
        return $elm$core$List$map_fn(function (_v24) {
            var label = _v24.dE;
            var alignment = _v24.aI;
            return $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline_fn(linkReferences, function (parsedHeaderLabel) {
                return { aI: alignment, dE: parsedHeaderLabel };
            }, label);
        }, header);
    }, $dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines = F2($dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$parseInlines_fn = function (linkReferences, rawBlock) {
        switch (rawBlock.$) {
            case 0:
                var level = rawBlock.a;
                var unparsedInlines = rawBlock.b;
                var _v17 = $dillonkearns$elm_markdown$Markdown$Parser$toHeading(level);
                if (!_v17.$) {
                    var parsedLevel = _v17.a;
                    return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$Heading_fn(parsedLevel, $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn(linkReferences, unparsedInlines)));
                }
                else {
                    var e = _v17.a;
                    return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
                }
            case 1:
                var unparsedInlines = rawBlock.a;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$Paragraph($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn(linkReferences, unparsedInlines)));
            case 2:
                var html = rawBlock.a;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(html));
            case 3:
                var tight = rawBlock.a;
                var unparsedItems = rawBlock.c;
                var parseItem = F2(function (rawBlockTask, rawBlocks) {
                    var blocksTask = function () {
                        if (!rawBlockTask.$) {
                            if (!rawBlockTask.a) {
                                return 1;
                            }
                            else {
                                return 2;
                            }
                        }
                        else {
                            return 0;
                        }
                    }();
                    var blocks = function () {
                        var _v18 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines({ a: linkReferences, b: rawBlocks });
                        if (!_v18.$) {
                            var parsedBlocks = _v18.a;
                            return parsedBlocks;
                        }
                        else {
                            return _List_Nil;
                        }
                    }();
                    return $dillonkearns$elm_markdown$Markdown$Block$ListItem_fn(blocksTask, blocks);
                });
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$UnorderedList_fn($dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight), $elm$core$List$reverse($elm$core$List$map_fn(function (item) {
                    return A2(parseItem, item.fI, item.gA);
                }, unparsedItems))));
            case 4:
                var tight = rawBlock.a;
                var startingIndex = rawBlock.d;
                var unparsedItems = rawBlock.e;
                var parseItem = function (rawBlocks) {
                    var _v20 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines({ a: linkReferences, b: rawBlocks });
                    if (!_v20.$) {
                        var parsedBlocks = _v20.a;
                        return parsedBlocks;
                    }
                    else {
                        return _List_Nil;
                    }
                };
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$OrderedList_fn($dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight), startingIndex, $elm$core$List$reverse($elm$core$List$map_fn(parseItem, unparsedItems))));
            case 5:
                var codeBlock = rawBlock.a;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$CodeBlock(codeBlock));
            case 7:
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$ThematicBreak);
            case 10:
                return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
            case 11:
                return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
            case 12:
                var rawBlocks = rawBlock.a;
                var _v21 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines({ a: linkReferences, b: rawBlocks });
                if (!_v21.$) {
                    var parsedBlocks = _v21.a;
                    return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$BlockQuote(parsedBlocks));
                }
                else {
                    var e = _v21.a;
                    return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
                }
            case 6:
                var codeBlockBody = rawBlock.a;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$CodeBlock({ gA: codeBlockBody, ha: $elm$core$Maybe$Nothing }));
            case 8:
                var _v22 = rawBlock.a;
                var header = _v22.a;
                var rows = _v22.b;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$Table_fn($dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines_fn(linkReferences, header), $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines_fn(linkReferences, rows)));
            case 9:
                var _v23 = rawBlock.a;
                var text = _v23.a;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$Paragraph($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn(linkReferences, text.eP)));
            default:
                var raw = rawBlock.b;
                return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$Paragraph($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn(linkReferences, raw)));
        }
    }, $dillonkearns$elm_markdown$Markdown$Parser$parseInlines = F2($dillonkearns$elm_markdown$Markdown$Parser$parseInlines_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline_fn = function (linkReferences, wrap, unparsedInlines) {
        return wrap($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper_fn(linkReferences, unparsedInlines));
    }, $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline = F3($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines_fn = function (linkReferences, rows) {
        return $elm$core$List$map_fn(function (row) {
            return $elm$core$List$map_fn(function (column) {
                return $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline_fn(linkReferences, $elm$core$Basics$identity, column);
            }, row);
        }, rows);
    }, $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines = F2($dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines_fn);
    var $dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock = function (revStmts) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(function (_v2) {
                return $elm$parser$Parser$Advanced$Done(revStmts);
            }, $dillonkearns$elm_markdown$Helpers$endOfFile),
            $elm$parser$Parser$Advanced$map_fn(function (reference) {
                return $elm$parser$Parser$Advanced$Loop($dillonkearns$elm_markdown$Markdown$Parser$addReference_fn(revStmts, reference));
            }, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser)),
            function () {
                var _v3 = revStmts.b;
                _v3$6: while (true) {
                    if (_v3.b) {
                        switch (_v3.a.$) {
                            case 1:
                                return $elm$parser$Parser$Advanced$map_fn(function (block) {
                                    return $elm$parser$Parser$Advanced$Loop(block);
                                }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser()));
                            case 8:
                                var table = _v3.a.a;
                                return $elm$parser$Parser$Advanced$map_fn(function (block) {
                                    return $elm$parser$Parser$Advanced$Loop(block);
                                }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                                    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser(),
                                    $dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted(table)
                                ]))));
                            case 3:
                                var _v4 = _v3.a;
                                var tight = _v4.a;
                                var intended = _v4.b;
                                var closeListItems = _v4.c;
                                var openListItem = _v4.d;
                                var rest = _v3.b;
                                var completeOrMergeUnorderedListBlockBlankLine = F2(function (state, newString) {
                                    return _Utils_update(state, {
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended, closeListItems, _Utils_update(openListItem, {
                                            gA: $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("", openListItem.gA, newString)
                                        })), rest))
                                    });
                                });
                                var completeOrMergeUnorderedListBlock = F2(function (state, newString) {
                                    return _Utils_update(state, {
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended, closeListItems, _Utils_update(openListItem, {
                                            gA: $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("\n", openListItem.gA, newString)
                                        })), rest)
                                    });
                                });
                                return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$map_fn(function (_v5) {
                                        return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, "\n");
                                    }, $dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$map_fn(completeOrMergeUnorderedListBlock(revStmts), $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn($elm$core$String$repeat_fn(intended, " "), $elm$parser$Parser$ExpectingSymbol("Indentation")))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
                                ]));
                            case 4:
                                var _v10 = _v3.a;
                                var tight = _v10.a;
                                var intended = _v10.b;
                                var marker = _v10.c;
                                var order = _v10.d;
                                var closeListItems = _v10.e;
                                var openListItem = _v10.f;
                                var rest = _v3.b;
                                var completeOrMergeUnorderedListBlockBlankLine = F2(function (state, newString) {
                                    return _Utils_update(state, {
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended, marker, order, closeListItems, openListItem + ("\n" + newString)), rest))
                                    });
                                });
                                var completeOrMergeUnorderedListBlock = F2(function (state, newString) {
                                    return _Utils_update(state, {
                                        b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended, marker, order, closeListItems, openListItem + ("\n" + newString)), rest)
                                    });
                                });
                                return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$map_fn(function (_v11) {
                                        return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, "\n");
                                    }, $dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$map_fn(completeOrMergeUnorderedListBlock(revStmts), $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn($elm$core$String$repeat_fn(intended, " "), $elm$parser$Parser$ExpectingSymbol("Indentation")))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
                                    $elm$parser$Parser$Advanced$map_fn(function (block) {
                                        return $elm$parser$Parser$Advanced$Loop(block);
                                    }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
                                ]));
                            case 10:
                                if (_v3.b.b) {
                                    switch (_v3.b.a.$) {
                                        case 3:
                                            var _v6 = _v3.a;
                                            var _v7 = _v3.b;
                                            var _v8 = _v7.a;
                                            var tight = _v8.a;
                                            var intended = _v8.b;
                                            var closeListItems = _v8.c;
                                            var openListItem = _v8.d;
                                            var rest = _v7.b;
                                            var completeOrMergeUnorderedListBlockBlankLine = F2(function (state, newString) {
                                                return _Utils_update(state, {
                                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended, closeListItems, _Utils_update(openListItem, {
                                                        gA: $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("", openListItem.gA, newString)
                                                    })), rest))
                                                });
                                            });
                                            var completeOrMergeUnorderedListBlock = F2(function (state, newString) {
                                                return _Utils_update(state, {
                                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock_fn(tight, intended, closeListItems, _Utils_update(openListItem, {
                                                        gA: $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith_fn("\n", openListItem.gA, newString)
                                                    })), rest)
                                                });
                                            });
                                            return ($elm$core$String$trim(openListItem.gA) === "") ? $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                return $elm$parser$Parser$Advanced$Loop(block);
                                            }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$map_fn(function (_v9) {
                                                    return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, "\n");
                                                }, $dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$map_fn(completeOrMergeUnorderedListBlock(revStmts), $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn($elm$core$String$repeat_fn(intended, " "), $elm$parser$Parser$ExpectingSymbol("Indentation")))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
                                            ]));
                                        case 4:
                                            var _v12 = _v3.a;
                                            var _v13 = _v3.b;
                                            var _v14 = _v13.a;
                                            var tight = _v14.a;
                                            var intended = _v14.b;
                                            var marker = _v14.c;
                                            var order = _v14.d;
                                            var closeListItems = _v14.e;
                                            var openListItem = _v14.f;
                                            var rest = _v13.b;
                                            var completeOrMergeUnorderedListBlockBlankLine = F2(function (state, newString) {
                                                return _Utils_update(state, {
                                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended, marker, order, closeListItems, openListItem + ("\n" + newString)), rest))
                                                });
                                            });
                                            var completeOrMergeUnorderedListBlock = F2(function (state, newString) {
                                                return _Utils_update(state, {
                                                    b: _List_Cons($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock_fn(tight, intended, marker, order, closeListItems, openListItem + ("\n" + newString)), rest)
                                                });
                                            });
                                            return ($elm$core$String$trim(openListItem) === "") ? $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                return $elm$parser$Parser$Advanced$Loop(block);
                                            }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$map_fn(function (_v15) {
                                                    return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, "\n");
                                                }, $dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$map_fn(completeOrMergeUnorderedListBlock(revStmts), $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn($elm$core$String$repeat_fn(intended, " "), $elm$parser$Parser$ExpectingSymbol("Indentation")))), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd), $dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
                                                $elm$parser$Parser$Advanced$map_fn(function (block) {
                                                    return $elm$parser$Parser$Advanced$Loop(block);
                                                }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
                                            ]));
                                        default:
                                            break _v3$6;
                                    }
                                }
                                else {
                                    break _v3$6;
                                }
                            default:
                                break _v3$6;
                        }
                    }
                    else {
                        break _v3$6;
                    }
                }
                return $elm$parser$Parser$Advanced$map_fn(function (block) {
                    return $elm$parser$Parser$Advanced$Loop(block);
                }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()));
            }(),
            $elm$parser$Parser$Advanced$map_fn(function (block) {
                return $elm$parser$Parser$Advanced$Loop(block);
            }, $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts), $dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser))
        ]));
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks = function (textNodeValue) {
        return $elm$core$Result$withDefault_fn(_List_Nil, $dillonkearns$elm_markdown$Markdown$Parser$parse(textNodeValue));
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode = function (xmlNode) {
        switch (xmlNode.$) {
            case 1:
                var innerText = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(innerText));
            case 0:
                var tag = xmlNode.a;
                var attributes = xmlNode.b;
                var children = xmlNode.c;
                var _v1 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
                if (!_v1.$) {
                    var parsedChildren = _v1.a;
                    return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Html($dillonkearns$elm_markdown$Markdown$Block$HtmlElement_fn(tag, attributes, parsedChildren)));
                }
                else {
                    var err = _v1.a;
                    return $elm$parser$Parser$Advanced$problem(err);
                }
            case 2:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Html($dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)));
            case 3:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Html($dillonkearns$elm_markdown$Markdown$Block$Cdata(string)));
            case 4:
                var string = xmlNode.a;
                return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Html($dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)));
            default:
                var declarationType = xmlNode.a;
                var content = xmlNode.b;
                return $elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Html($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration_fn(declarationType, content)));
        }
    };
    function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser() {
        return $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$completeBlocks, $elm$parser$Parser$Advanced$loop_fn({ a: _List_Nil, b: _List_Nil }, $dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock));
    }
    function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
            $dillonkearns$elm_markdown$Markdown$Parser$blankLine,
            $dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
            $elm$parser$Parser$Advanced$map_fn($dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
            $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock,
            $elm$parser$Parser$Advanced$map_fn(function (_v40) {
                return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
            }, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
            $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
            $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
            $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
            $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
        ]));
    }
    function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
            $dillonkearns$elm_markdown$Markdown$Parser$blankLine,
            $dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
            $elm$parser$Parser$Advanced$map_fn($dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
            $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$setextLineParser),
            $elm$parser$Parser$Advanced$map_fn(function (_v39) {
                return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
            }, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
            $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(true),
            $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(true),
            $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
            $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser(),
            $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph)
        ]));
    }
    function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
            $dillonkearns$elm_markdown$Markdown$Parser$blankLine,
            $dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
            $elm$parser$Parser$Advanced$map_fn($dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
            $elm$parser$Parser$Advanced$map_fn(function (_v38) {
                return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
            }, $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
            $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
            $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
            $elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
            $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
        ]));
    }
    function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser() {
        return $elm$parser$Parser$Advanced$andThen_fn($dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode, $dillonkearns$elm_markdown$HtmlParser$html);
    }
    var $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser();
    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser = function () {
        return $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser;
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser();
    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser = function () {
        return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser;
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser();
    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser = function () {
        return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser;
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList();
    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList = function () {
        return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList;
    };
    var $dillonkearns$elm_markdown$Markdown$Parser$htmlParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser();
    $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser = function () {
        return $dillonkearns$elm_markdown$Markdown$Parser$htmlParser;
    };
    var $author$project$Press$Generate$getHeaders = function (src) {
        var _v0 = $dillonkearns$elm_markdown$Markdown$Parser$parse(src);
        if (!_v0.$) {
            var blocks = _v0.a;
            return $elm$core$List$filterMap_fn(function (block) {
                if (block.$ === 4) {
                    var level = block.a;
                    var contents = block.b;
                    return $elm$core$Maybe$Just($dillonkearns$elm_markdown$Markdown$Block$extractInlineText(contents));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }, blocks);
        }
        else {
            return _List_Nil;
        }
    };
    var $author$project$Press$Generate$generateSourceReference = function (routes) {
        var sources = $elm$core$List$concatMap_fn(function (route) {
            var _v1 = route.aq;
            if (!_v1.$) {
                return _List_Nil;
            }
            else {
                var files = _v1.a.gY;
                return files;
            }
        }, routes);
        if (!sources.b) {
            return _List_Nil;
        }
        else {
            return _List_fromArray([
                $mdgriffith$elm_codegen$Elm$fileWith_fn(_List_fromArray(["Markdown", "Source"]), {
                    a1: _List_Nil,
                    a5: function (groups) {
                        return $elm$core$List$map_fn($mdgriffith$elm_codegen$Elm$docs, groups);
                    }
                }, $elm$core$List$map_fn(function (source) {
                    return $mdgriffith$elm_codegen$Elm$declaration_fn($elm$core$String$join_fn("_", $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$String$split_fn("/", source.hy))), $mdgriffith$elm_codegen$Elm$string(source.hL));
                }, sources)),
                $mdgriffith$elm_codegen$Elm$fileWith_fn(_List_fromArray(["Markdown", "Search"]), {
                    a1: _List_Nil,
                    a5: $elm$core$List$map($mdgriffith$elm_codegen$Elm$docs)
                }, _List_fromArray([
                    $mdgriffith$elm_codegen$Elm$declaration_fn("items", $mdgriffith$elm_codegen$Elm$list($elm$core$List$map_fn(function (src) {
                        var headers = $elm$core$List$map_fn($mdgriffith$elm_codegen$Elm$string, $author$project$Press$Generate$getHeaders(src.hL));
                        return $mdgriffith$elm_codegen$Elm$record(_List_fromArray([
                            _Utils_Tuple2("title", $elm$core$Maybe$withDefault_fn($mdgriffith$elm_codegen$Elm$string(src.hy), $elm$core$List$head(headers))),
                            _Utils_Tuple2("crumbs", $mdgriffith$elm_codegen$Elm$list($elm$core$List$reverse($elm$core$List$drop_fn(1, $elm$core$List$reverse($elm$core$List$filterMap_fn(function (str) {
                                return $elm$core$String$isEmpty(str) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$string(str));
                            }, $elm$core$String$split_fn("/", src.hy))))))),
                            _Utils_Tuple2("sourceUrl", $mdgriffith$elm_codegen$Elm$string(src.hy)),
                            _Utils_Tuple2("tags", $mdgriffith$elm_codegen$Elm$list(headers))
                        ]));
                    }, sources)))
                ]))
            ]);
        }
    };
    var $author$project$Press$Model$Elm = { $: 0 };
    var $author$project$Press$Model$Markdown = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Char$toLower = _Char_toLower;
    var $author$project$Press$Generate$camelToKebab = function (str) {
        return _String_foldl_fn_unwrapped(function (_char, _v0) {
            var isFirstChar = _v0.a;
            var string = _v0.b;
            return $elm$core$Tuple$pair_fn(false, function () {
                if (isFirstChar) {
                    return _Utils_ap(string, $elm$core$String$fromChar($elm$core$Char$toLower(_char)));
                }
                else {
                    var isUpperCase = $elm$core$Char$isUpper(_char);
                    return isUpperCase ? (string + ("-" + $elm$core$String$fromChar($elm$core$Char$toLower(_char)))) : _Utils_ap(string, $elm$core$String$fromChar(_char));
                }
            }());
        }, _Utils_Tuple2(true, ""), str).b;
    };
    var $author$project$Path$extension = function (str) {
        var ext = _String_startsWith_fn(".", str) ? "" : $elm$core$Maybe$withDefault_fn("", $elm$core$List$head($elm$core$List$reverse($elm$core$String$split_fn(".", str))));
        var base = $elm$core$String$dropRight_fn($elm$core$String$length(ext) + 1, str);
        return _Utils_Tuple2(base, ext);
    };
    var $author$project$Path$relative_fn = function (base, full) {
        return _String_startsWith_fn(base, full) ? $elm$core$String$dropLeft_fn($elm$core$String$length(base), full) : full;
    }, $author$project$Path$relative = F2($author$project$Path$relative_fn);
    var $elm$core$Char$toUpper = _Char_toUpper;
    var $author$project$Press$Generate$capitalize = function (str) {
        var _v0 = $elm$core$String$uncons(str);
        if (_v0.$ === 1) {
            return str;
        }
        else {
            var _v1 = _v0.a;
            var first = _v1.a;
            var tail = _v1.b;
            return _Utils_ap($elm$core$String$fromChar($elm$core$Char$toUpper(first)), tail);
        }
    };
    var $author$project$Press$Generate$toElmTypeName = function (source) {
        return $elm$core$String$join_fn("", $elm$core$List$map_fn($author$project$Press$Generate$capitalize, $elm$core$List$concatMap_fn($elm$core$String$split("_"), $elm$core$String$split_fn("-", source))));
    };
    var $author$project$Press$Generate$toRouteInfo = function (options) {
        var elmFileRouteInfo = $elm$core$List$filterMap_fn(function (elmPage) {
            return _Utils_eq(elmPage.ay, _List_fromArray(["Markdown"])) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just({
                ec: _List_Cons("Page", elmPage.ay),
                r: $elm$core$String$join_fn("", elmPage.ay),
                aC: $elm$core$Maybe$withDefault_fn({
                    hy: $elm$core$List$map_fn(A2($elm$core$Basics$composeL, $author$project$Press$Model$Token, $author$project$Press$Generate$camelToKebab), elmPage.ay),
                    am: { S: false, N: $elm$core$Set$empty }
                }, $elm$core$List$head(elmPage.gj)),
                aq: $author$project$Press$Model$Elm
            });
        }, options.cq);
        var assetFileRouteInfo = function () {
            var _v0 = options.bA;
            if (_v0.$ === 1) {
                return _List_Nil;
            }
            else {
                var assets = _v0.a;
                var sources = $elm$core$List$filterMap_fn(function (file) {
                    var _v1 = $author$project$Path$extension($author$project$Path$relative_fn(assets.bJ, file.hy));
                    var relativePath = _v1.a;
                    var ext = _v1.b;
                    if ((ext === "md") || (ext === "markdown")) {
                        var path = $elm$core$List$map_fn($author$project$Press$Model$Token, $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$List$map_fn($author$project$Press$Generate$camelToKebab, $elm$core$String$split_fn("/", relativePath))));
                        var modulePath = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$List$map_fn($author$project$Press$Generate$toElmTypeName, $elm$core$String$split_fn("/", relativePath)));
                        var name = $elm$core$String$join_fn("", modulePath);
                        return $elm$core$Maybe$Just({ hy: relativePath, hL: file.b8 });
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                }, assets.gY);
                return _List_fromArray([
                    {
                        ec: _List_fromArray(["Page", "Markdown"]),
                        r: "Markdown",
                        aC: {
                            hy: _List_fromArray([
                                $author$project$Press$Model$Token("assets")
                            ]),
                            am: { S: false, N: $elm$core$Set$empty }
                        },
                        aq: $author$project$Press$Model$Markdown({ gY: sources })
                    }
                ]);
            }
        }();
        return _Utils_ap(elmFileRouteInfo, assetFileRouteInfo);
    };
    var $author$project$Press$Generate$generate = function (options) {
        var routes = $author$project$Press$Generate$toRouteInfo(options);
        var pages = _Utils_ap($author$project$Press$Generate$generateSourceReference(routes), $author$project$Press$Generate$generatePages(routes));
        return _List_Cons($author$project$Press$Generate$Engine$generate(routes), _List_Cons($author$project$Press$Generate$generateRoutes(routes), pages));
    };
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $author$project$Generate$main = $author$project$Gen$CodeGen$Generate$fromJson_fn($author$project$Press$Generate$decode, $author$project$Press$Generate$generate);
    _Platform_export({ "Generate": { "init": $author$project$Generate$main($elm$json$Json$Decode$value)(0) } });
}(this));