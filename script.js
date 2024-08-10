window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.querySelector("nav").style.backgroundColor = "#355592";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
}

// Değerlendirme Formu 11
const featuresButtonsDOM = document.querySelectorAll("#features button");
        const contentDOM = document.querySelector(".classes-content");

        // Content data
        const content = [
            {
                id: 1,
                img: '/img/yoga.jpg',
                category: "Yoga",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae veritatis, asperiores eveniet est nesciunt sequi ipsum dolorum?",
            },
            {
                id: 2,
                img: '/img/group.webp',
                category: "Group",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium perferendis voluptatum delectus culpa at reiciendis facere quidem.",
            },
            {
                id: 3,
                img: '/img/solo.jpg',
                category: "Solo",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus corporis sit deserunt est totam culpa repellat cumque expedita.",
            },
            {
                id: 4,
                img: '/img/stret.webp',
                category: "Stretching",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit temporibus soluta ratione sapiente sequi illo est doloribus molestiae?",
            },
        ];

        // Function to load default content on page load
        document.addEventListener("DOMContentLoaded", function () {
            const defaultButton = featuresButtonsDOM[0];
            defaultButton.click();
        });

        // Event listeners for feature buttons
        featuresButtonsDOM.forEach(function (item) {
            item.addEventListener("click", function () {
                item.classList.add("features-btn-active");
                featuresButtonsDOM.forEach(function (otherItem) {
                    if (item !== otherItem) {
                        otherItem.classList.remove("features-btn-active");
                    }
                });

                const selectedCategory = item.getAttribute("data-category");
                const selectedContent = content.find(
                    (item) => item.category === selectedCategory,
                    (item)=>item.content === selectedCategory
                );

                contentDOM.innerHTML = `
                    <div class="classes-content-article">
                        <div>
                            <h2>Why are your ${selectedContent.category}?</h2><br>
                            <p>
                                ${selectedContent.text}
                            </p><br>
                        </div>
                        <div>
                            <h2>It's Your ${selectedContent.category} Time.</h2><br>
                            <p>Saturday-Sunday: 8:00am - 10:00am</p>
                            <br/>
                            <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                            <br/>
                            <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
                        </div>
                    </div>
                    <div class="classes-content-figure">
                        <img src="${selectedContent.img}" alt="${selectedContent.category}" /> 
                    </div>
                `;
            });
        });


// Toggle navigation bar for mobile view
var navBtnDOM = document.querySelector(".checkbtn");
var navLinkDOM = document.querySelector("nav .link");
var allNavLinkDOM = document.querySelectorAll("nav .link li a");

navBtnDOM.addEventListener("click", function () {
  navLinkDOM.classList.toggle("show");
});

allNavLinkDOM.forEach((tag) => {
  tag.addEventListener("click", function () {
    setTimeout(function () {
      navLinkDOM.classList.toggle("show");
    }, 400);
  });
});


//BMİ Calculator -  Değerlendime Formu 8
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");
const indicator = document.querySelector("#indicator");

inputHeight.addEventListener("input", calculator);
inputWeight.addEventListener("input", calculator);

//Creating the calculator function
function calculator() {
  let weight = parseInt(inputWeight.value);
  let height = parseInt(inputHeight.value);

  let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

  if (bmi > 40) {
    bmi = 40;
  } else if (bmi < 0) {
    bmi = 0;
  }
  console.log(bmi);

  switch (true) {
    case bmi < 18.5:
      indicator.style.left = `${bmi * (15 / 18.5) + 7}%`;
      break;
    case bmi <= 24.9:
      indicator.style.left = `${(bmi - 18.5) * (15 / 6.4) + 23.5}%`;
      break;
    case bmi <= 29.9:
      indicator.style.left = `${(bmi - 25) * (15 / 4.9) + 40}%`;
      break;
    case bmi <= 34.9:
      indicator.style.left = `${(bmi - 30) * (15 / 4.9) + 56.5}%`;
      break;
    case bmi > 34.9:
      indicator.style.left = `${(bmi - 35) * (15 / 4.9) + 73}%`;
      break;
  }
}
