import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import TaskListView from 'app/views/task_list_view';
import TaskView from 'app/views/task_view';


var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

// var TaskView = Backbone.View.extend({
//   initialize: function(options) {
//     this.task = options.task;
//     this.template = options.template;
//   },
//
//   render: function() {
//     // var html = '<li class="task">';
//     // html += '<h2>' + this.task.title + '</h2>';
//     // html += '<p>' + this.task.description + '</p>';
//     // html += '</li>';
//
//     //to replace the code above using template
//     var html = this.template({task: this.task});
//     this.$el.html(html);
//
//     // Enable chained calls
//     return this;
//   }
// });

// var TaskListView = Backbone.View.extend({
//   initialize: function(options) {
//
//   // Store a the full list of tasks
//   this.taskData = options.taskData;
//
//   // Compile a template to be shared between the individual tasks
//   this.taskTemplate = _.template($('#task-template').html());
//
//   // Keep track of the <ul> element
//   this.listElement = this.$('.task-list');
//
//   // Create a TaskView for each task
//   this.cardList = [];
//   this.taskData.forEach(function(task) {
//     var card = new TaskView({
//       task: task,
//       template: this.taskTemplate
//     });
//     this.cardList.push(card);
//   }, this); // bind `this` so it's available inside forEach
// },
//   },
//   render: function() {
//
//   // Make sure the list in the DOM is empty
//   // before we start appending items
//   this.listElement.empty();
//
//   // Loop through the data assigned to this view
//   this.cardList.forEach(function(card) {
//     // Cause the task to render
//     card.render();
//
//     // Add that HTML to our task list
//     this.listElement.append(card.$el);
//   }, this);
//
//   return this; // enable chained calls
// }
//
// });


$(document).ready(function() {
  var taskTemplate = _.template($('#task-template').html());
  var taskListElement = $('.task-list');
  var cardList = [];
  taskData.forEach(function(task) {
      var card = new TaskView({
        task: task,
        template: taskTemplate
      });
      cardList.push(card);
      taskListElement.append(card.render().$el);
  });

  var application = new TaskListView({
    el: $('#application'),
    taskData: taskData
  });
  application.render();
});
