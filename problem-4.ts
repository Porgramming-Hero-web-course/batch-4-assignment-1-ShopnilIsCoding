type Circle=
{
    shape: "circle",
    radius: number
}

type Rectangle=
{
    shape: "rectangle",
    width: number,
    height: number
}

type Union=Circle|Rectangle;

const calculateShapeArea=(obj:Union):number=>
{
    if(obj.shape === "circle")
    {
        return  Number((Math.PI * obj.radius * obj.radius).toFixed(2));
    }
    else if(obj.shape === "rectangle")
    {
        return obj.width * obj.height;
    }
    else
    {
        throw new Error("Invalid shape");
    }
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea,rectangleArea);