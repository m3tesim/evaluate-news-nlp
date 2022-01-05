//mani function that will handle the Article URL and return the data to the viewer
import { validURL } from "./checkURL";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("url").value;
  if (validURL(formText) === false) {
    return (document.getElementById(
      "warning"
    ).textContent = ` warning : Please Enter a valid URL`);
  }

  console.log("::: Form Submitted :::");

  postData("http://localhost:8081/api", { url: formText }).then(
    async (data) => {
      try {
        const agreement = document
          .getElementById("agreement")
          .insertAdjacentHTML(
            "afterbegin",
            `<span class="result" >Agreement :</span> ${data.agreement}`
          );
        const subjectivity = document
          .getElementById("subjectivity")
          .insertAdjacentHTML(
            "afterbegin",
            `<span class="result" >Subjectivity :</span> ${data.subjectivity}`
          );

        const confidence = document
          .getElementById("confidence")
          .insertAdjacentHTML(
            "afterbegin",
            `<span class="result" >Confidence :</span> ${data.confidence}`
          );

        const irony = document
          .getElementById("irony")
          .insertAdjacentHTML(
            "afterbegin",
            `<span class="result" >Irony :</span> ${data.irony}`
          );

      } catch (error) {
        console.log("error", error);
      }
    }
  );
}

async function postData(url = "", data = {}) {
  console.log("Analyzing:", data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log("Data received:", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

export { handleSubmit, postData };
