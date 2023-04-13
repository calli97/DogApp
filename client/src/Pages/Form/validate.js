export const validate={
    name:(input)=>{
        return !(/^[a-zA-Z]{3,}$/.test(input))
    },
    height_min:(input,max)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)<parseInt(max))
    },
    height_max:(input,min)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)>parseInt(min))
    },
    weight_max:(input,min)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)>parseInt(min))
    },
    weight_min:(input,max)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)<parseInt(max))
    },
    life_span_min:(input,max)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)<parseInt(max))
    },
    life_span_max:(input,min)=>{
        if(!(/^[0-9]+$/.test(input))){
            return true
        }
        return !(parseInt(input)>parseInt(min))
    },
    temperaments:(temps)=>{
        return !(temps.length>0)
    },
    image:(url)=>{
        return !(/^(http(s)?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(url))
    }
}

