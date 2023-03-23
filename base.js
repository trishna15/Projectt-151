AFRAME.registerComponent("base", {
   schema:{
    height: { type: "number",default: 5 } ,
    radius: { type: "number",default: 200 }
   },
   init:function(){
    this.el.setAttribute("geometry", {
       primitive: "cylinder",
       radius: this.data.radius,
       height: this.data.height
     });
    this.el.setAttribute("material", { color: "#626666" });
   }
  });
