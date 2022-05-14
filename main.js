
var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var Score = 0;

function updateCanvas()
{
    quick_draw_data_set;
    random_no = Math;
    Element_of_array;
    Sketch_to_be_drawn;   
}

function preLoad()
{
    ml5.imageClassifier('doodlenet',doodlenet);
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    background('white');
    onmouseleave(classifyCanvas);
}

function draw()
{
    check_sketch();
    strokeWeight(4);
    stroke("#696969");
    if(onmousedown)
    {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

if(drawn_sketch == Sketch_to_be_drawn)
{
    answer_holder = "set";
    Score = Score + 1;
    score = "score" + " " + Score;        
}

function check_sketch()
{
    timer_counter_2 = timer_counter + 1;
    timer = timer + " " + timer_counter_2;
    console.log("timer_counter_2");
    if(timer_counter > 400)
    {
        timer_counter_2 = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed",answer_holder == "set")
    {
        timer_check = "";
        answer_holder = "";
        updateCanvas;
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }

    else{
        console.log(results);
        drawn_sketch = results;
        document.getElementById("painting").innerHTML = "Painting : "+drawn_sketch;
        document.getElementById("confidence").innerHTML = "confidence : "+Math.round(results[0].confidence * 100)+"%";
    }
}