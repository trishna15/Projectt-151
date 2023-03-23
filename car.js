AFRAME.registerComponent("car", {
    schema:{
        model:{type:"string", default:"./scene.gltf"}
    },
    init:function(){
        this.el.setAttribute("gltf-model", this.data.model)
        this.el.setAttribute("position", this.data.position)
        this.el.setAttrbute("rotation", rotation)

    },
     
    update:function(){

        window.addEventListener("click", e => {
            
        })
    }
})