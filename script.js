// ===============================
// OPPORTUNITY DATA
// ===============================

const opportunities = [

    {
        id: 1,
        title: "National Scholarship Program",
        organization: "Government of India",
        category: "Scholarship",
        location: "India",
        eligibility: "College Students",
        deadline: "30 September 2026",
        icon: "🎓",
        description:
            "Financial support opportunity for eligible students pursuing higher education.",
        applyUrl: "https://scholarships.gov.in/"
    },

    {
        id: 2,
        title: "Web Development Internship",
        organization: "Tech India",
        category: "Internship",
        location: "Remote",
        eligibility: "BCA / B.Tech Students",
        deadline: "15 September 2026",
        icon: "💼",
        description:
            "Practical web development internship focused on modern frontend technologies.",
        applyUrl: "https://example.com"
    },

    {
        id: 3,
        title: "Digital Skills Program",
        organization: "Skill India",
        category: "Skill Development",
        location: "Online",
        eligibility: "Students & Graduates",
        deadline: "Open",
        icon: "💻",
        description:
            "Learn industry-relevant digital skills through structured learning programs.",
        applyUrl: "https://www.skillindiadigital.gov.in/"
    },

    {
        id: 4,
        title: "Industrial Apprenticeship",
        organization: "National Apprenticeship Portal",
        category: "Apprenticeship",
        location: "India",
        eligibility: "Graduates / Diploma Students",
        deadline: "Open",
        icon: "👥",
        description:
            "Gain practical industry experience through apprenticeship opportunities.",
        applyUrl: "https://www.apprenticeshipindia.gov.in/"
    },

    {
        id: 5,
        title: "Startup Support Program",
        organization: "Startup India",
        category: "Entrepreneurship",
        location: "India",
        eligibility: "Entrepreneurs",
        deadline: "Open",
        icon: "🚀",
        description:
            "Resources and support for people building innovative startups in India.",
        applyUrl: "https://www.startupindia.gov.in/"
    },

    {
        id: 6,
        title: "Software Engineering Internship",
        organization: "Digital Innovation Lab",
        category: "Internship",
        location: "Bengaluru / Remote",
        eligibility: "Computer Science Students",
        deadline: "20 September 2026",
        icon: "💻",
        description:
            "Work on real-world software development projects and improve your technical skills.",
        applyUrl: "https://example.com"
    }

];


// ===============================
// DISPLAY OPPORTUNITIES
// ===============================

const container =
    document.getElementById("opportunityContainer");


function displayOpportunities(data) {

    container.innerHTML = "";

    if (data.length === 0) {

        container.innerHTML = `
            <p style="text-align:center; grid-column:1/-1;">
                No opportunities found.
            </p>
        `;

        return;
    }


    data.forEach(opportunity => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="card-icon">
                ${opportunity.icon}
            </div>

            <h3>${opportunity.title}</h3>

            <p class="organization">
                ${opportunity.organization}
            </p>

            <div class="card-info">

                📂 ${opportunity.category}<br>

                📍 ${opportunity.location}<br>

                🎯 ${opportunity.eligibility}<br>

                ⏰ Deadline: ${opportunity.deadline}

            </div>

            <div class="card-buttons">

                <button
                    class="view-btn"
                    onclick="viewDetails(${opportunity.id})">
                    View Details
                </button>

                <button
                    class="apply-btn"
                    onclick="applyNow('${opportunity.applyUrl}')">
                    Apply Now
                </button>

            </div>
        `;

        container.appendChild(card);

    });
}


// Initial display

displayOpportunities(opportunities);


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", filterOpportunities);


function filterOpportunities() {

    const search =
        searchInput.value.toLowerCase();


    const activeFilter =
        document.querySelector(".filter.active")
        .dataset.category;


    const filtered =
        opportunities.filter(opportunity => {

            const matchesSearch =
                opportunity.title.toLowerCase().includes(search) ||
                opportunity.organization.toLowerCase().includes(search) ||
                opportunity.category.toLowerCase().includes(search);


            const matchesCategory =
                activeFilter === "All" ||
                opportunity.category === activeFilter;


            return matchesSearch && matchesCategory;

        });


    displayOpportunities(filtered);
}


// ===============================
// CATEGORY FILTER
// ===============================

document.querySelectorAll(".filter")
.forEach(button => {

    button.addEventListener("click", function() {

        document
            .querySelectorAll(".filter")
            .forEach(btn => btn.classList.remove("active"));


        this.classList.add("active");


        filterOpportunities();

    });

});


// ===============================
// VIEW DETAILS
// ===============================

function viewDetails(id) {

    const opportunity =
        opportunities.find(item => item.id === id);


    document.getElementById("modalContent").innerHTML = `

        <div style="font-size:45px;">
            ${opportunity.icon}
        </div>

        <h2>${opportunity.title}</h2>

        <p style="margin:10px 0;color:#64748b;">
            ${opportunity.organization}
        </p>

        <hr style="margin:20px 0;">

        <p><strong>Category:</strong>
            ${opportunity.category}
        </p>

        <p><strong>Location:</strong>
            ${opportunity.location}
        </p>

        <p><strong>Eligibility:</strong>
            ${opportunity.eligibility}
        </p>

        <p><strong>Deadline:</strong>
            ${opportunity.deadline}
        </p>

        <p style="margin-top:20px;">
            ${opportunity.description}
        </p>

        <button
            class="primary-btn"
            style="margin-top:25px;"
            onclick="applyNow('${opportunity.applyUrl}')">
            Apply Now →
        </button>
    `;


    document.getElementById("detailsModal")
        .style.display = "flex";
}


// ===============================
// CLOSE MODAL
// ===============================

function closeModal() {

    document.getElementById("detailsModal")
        .style.display = "none";
}


// ===============================
// REAL APPLICATION REDIRECT
// ===============================

function applyNow(url) {

    window.open(url, "_blank");

}


// ===============================
// FIND YOUR PATH
// ===============================

function findPath() {

    const userType =
        document.getElementById("userType").value;

    const interest =
        document.getElementById("interest").value;

    const goal =
        document.getElementById("goal").value;


    const result =
        document.getElementById("pathResult");


    if (!userType || !interest || !goal) {

        result.innerHTML = `
            <p style="color:#dc2626;">
                Please select all options.
            </p>
        `;

        return;
    }


    let path = "";


    if (interest === "technology") {

        path =
        "Learn Programming → Build Projects → Internship → Job";

    }

    else if (interest === "business") {

        path =
        "Learn Business → Develop Idea → Build Startup → Grow";

    }

    else if (interest === "design") {

        path =
        "Learn Design → Build Portfolio → Internship → Career";

    }

    else {

        path =
        "Learn Skills → Prepare for Exams → Apply → Career";

    }


    result.innerHTML = `

        <div style="
            padding:20px;
            background:#fff7ed;
            border-radius:10px;
        ">

            <h3>Your Recommended Path 🚀</h3>

            <p style="
                margin-top:12px;
                line-height:1.7;
            ">
                ${path}
            </p>

        </div>
    `;
}