const API_URL = "https://dekunyztx8.execute-api.us-east-1.amazonaws.com/prod/upload";

async function uploadImage() {

```
const file = document.getElementById("imageInput").files[0];
const filter = document.getElementById("filter").value;

const message = document.getElementById("message");
const jobIdDiv = document.getElementById("jobId");

if (!file) {
    alert("Please select an image");
    return;
}

try {

    message.innerHTML = "Submitting Job...";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imageName: file.name,
            filter: filter
        })
    });

    const data = await response.json();

    message.innerHTML = "Job Submitted Successfully";
    jobIdDiv.innerHTML = "Job ID: " + data.jobId;

} catch (error) {

    console.error(error);

    message.innerHTML = "Error submitting job";
}
```

}
