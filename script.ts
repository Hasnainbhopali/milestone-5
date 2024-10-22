document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get references to form elements using their IDs
  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const educationElement = document.getElementById("Education") as HTMLInputElement;
  const experienceElement = document.getElementById("Experience") as HTMLInputElement;
  const skillsElement = document.getElementById("Skills") as HTMLInputElement;

  const usernameElement = document.getElementById("username") as HTMLInputElement;






  // Check if all the required elements exist
  if (
    profilePictureInput &&
    nameElement &&
    phoneElement &&
    emailElement &&
    educationElement &&
    experienceElement &&
    skillsElement &&
    usernameElement
  ) {







    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;


const username = usernameElement.value;
const uniquePath = `resume/${username.replace(/\s+/g, '_' )}_cv.html`


    // Picture elements
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Create resume output
    const resumeOutput = `
      <h2>Resume</h2>
      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      
      <h3>Education</h3>
      <p>${education}</p>
      
      <h3>Experience</h3>
      <p>${experience}</p>
      
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8, ' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your 2024 Resume';





    // Display the generated resume
    const resumeoutputElement = document.getElementById("resumeOutput");
    if (resumeoutputElement)  {
      resumeoutputElement.innerHTML = resumeOutput;
      resumeoutputElement.classList.remove("hidden");


const buttonsContainer = document.createElement('div');
buttonsContainer.id = "buttonsContainer";
resumeoutputElement.appendChild(buttonsContainer);


const downloadbutton = document.createElement("button");
downloadbutton.textContent = "Download as PDF";
downloadbutton.addEventListener("click", () => {
  window.print(); 
});
buttonsContainer.appendChild(downloadbutton);

const sharelinkbutton = document.createElement("button");
sharelinkbutton.textContent = "Copy Shareable link";
sharelinkbutton.addEventListener("click", async () => {
  try{
    const shareablelink = `https://yourdomain.com/resume/${name.replace(/\s+/g,
      "_"
    )}_cv.html`;


    await navigator.clipboard.writeText(shareablelink);
    alert("Shareable link copied to clipboard!");
  } catch (err) {
   console.error("Failed to copy link:", err);
   alert("Failed to copy link to clipboard. please try again.");
  }
});
buttonsContainer.appendChild(sharelinkbutton);
    } else {
      console.error("Resume output container not found");
    }
  } else {
    console.error("form elements are missing");
  }
});