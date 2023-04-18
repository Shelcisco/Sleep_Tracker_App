const newFormHandler = async (event) => {
  event.preventDefault();

  const date = document.querySelector("#date").value.trim();
  const hours = document.querySelector("#hours").value.trim();
  const mood = document.querySelector("#mood").value.trim();
  const rem_sleep = document.querySelector("#rem").value.trim();

  if (date && hours && mood && rem_sleep) {
    const response = await fetch("/sleep", {
      method: "POST",
      body: JSON.stringify({ date, hours, mood, rem_sleep }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
      alert("Failed to add sleep info");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/sleep/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/sleep");
    } else {
      alert(response.statusText);
      alert("Failed to delete sleep data");
    }
  }
};

document
  .querySelector(".new-sleep-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".sleep-list")
  .addEventListener("click", delButtonHandler);
