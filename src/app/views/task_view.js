// task_view.js

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

var TaskView = Backbone.View.extend({
  initialize: function(options) {
    this.task = options.task;
    this.template = options.template;
  },

  render: function() {
    // var html = '<li class="task">';
    // html += '<h2>' + this.task.title + '</h2>';
    // html += '<p>' + this.task.description + '</p>';
    // html += '</li>';

    //to replace the code above using template
    var html = this.template({task: this.task});
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});




export default TaskView;
