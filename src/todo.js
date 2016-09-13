"use strict";
var Todo = (function () {
    function Todo(description) {
        this.description = description;
        this.done = false;
    }
    return Todo;
}());
exports.Todo = Todo;
