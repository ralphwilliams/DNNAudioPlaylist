"use strict";
var todo_1 = require('./todo');
var App = (function () {
    function App() {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = '';
    }
    App.prototype.addTodo = function () {
        if (this.todoDescription) {
            this.todos.push(new todo_1.Todo(this.todoDescription));
            this.todoDescription = '';
        }
    };
    App.prototype.removeTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    };
    return App;
}());
exports.App = App;
