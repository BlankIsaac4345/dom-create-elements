console.log("Script started");

function start() {
    console.log("click");

    // Create Heading
    let heading = document.createElement("h1");

    // Set the text of the heading
    heading.innerText = "Attendance";

    // Set some styles
    heading.style.color = "blue";
    heading.style.textDecoration = "underline";

    // add heading to the page
    document.body.appendChild(heading);
}