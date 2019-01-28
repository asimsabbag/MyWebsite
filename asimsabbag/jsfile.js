console.log("JS file Loaded.");
$(document).ready(function(){
  console.log("In ready state");
  $("div.page_content_gallery_fullGalleryLink").find("a").click(function(){
    $.getJSON("https://api.myjson.com/bins/rtk24", function(result){
      console.log(result);
      loadImage(result);
    });
  });
});
function loadImage(result){
  
for(let image_iterator=0;image_iterator<3;image_iterator++)
  {
        let image_parent=document.getElementsByClassName("page_content_gallery_images");
        let newImageContainer=document.createElement("div");
        let newImageDescription=document.createElement("div");
        let newImageDescriptionHeading=document.createElement("h2");
        let newImageDescriptionPara=document.createElement("p");
        newImageDescriptionHeading.innerText=result.name[image_iterator];
        newImageDescriptionPara.innerText=result.about[image_iterator];
        newImageDescription.classList.add("imageDiscription");
        newImageDescription.appendChild(newImageDescriptionHeading);
        newImageDescription.appendChild(newImageDescriptionPara);
        let newImage=document.createElement("img");
        newImage.setAttribute("src",result.image_url[image_iterator]);
        newImage.setAttribute("alt",result.name[image_iterator]);
        newImageContainer.classList.add("page_content_gallery_images_image");
        newImageContainer.appendChild(newImage);
        newImageContainer.appendChild(newImageDescription);
        image_parent[0].appendChild(newImageContainer);
  }
}
