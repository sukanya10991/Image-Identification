 Webcam.set({
     width:350,
     height:350,
     image_format: 'png',
     png_quality:100
 });
 camera=document.getElementById("cam");
 Webcam.attach( camera );
 function takephoto(){
     Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
     });
 }
 console.log('ml5 version:', ml5.version);
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zNDsR0AkG/model.json',modelLoaded)
 function modelLoaded(){
     console.log('Model Loaded!');
 }
 function checkphoto(){
     img=document.getElementById('captured_image');
     classifier.classify(img, gotResult);
 }
 function gotResult(error, results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results);
         document.getElementById("result_object_name").innerHTML= results[0].label;
         result=results[0].confidence*100;
         document.getElementById("result_object_accuracy").innerHTML=result.toFixed(3)+"%";
     }
 }