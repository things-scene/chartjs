import SceneChart from './chart-overload'

var { Component, Rect } = scene

export default class ChartJSWrapper extends Rect {

  _draw(context) {

    if(!this._chart) {
      var { chart } = this.model

      if(chart)
        this._chart = new SceneChart(context,
          JSON.parse(JSON.stringify(chart)),
          this
        )
      else
        return
    }

    var { width, height, left, top } = this.model;

    context.translate(left, top);

    if(!this._draw_once) {
      this._chart.reset(width, height, context);
      this._chart.update();
      this._draw_once = true;
    } else {
      this._chart.draw(this._chart.__ease__);
    }

    context.translate(-left, -top);

  }

  get controls() {}

  onchange(after) {
    if(after.width || after.height) {
      this._draw_once = false;
      this.invalidate();
    }
  }
}

Component.register('chartjs', ChartJSWrapper)
