buildPage();
feelingClicked();
donePicking();

function buildPage() {
  const feels = [
    {
      name: "Happy",
      color: "#FFC700",
      feelings: [
        {
          name: "Playful",
          feelings: [
            { name: "Aroused" },
            { name: "Cheeky" }
          ]
        },
        {
          name: "Content",
          feelings: [
            { name: "Free" },
            { name: "Joyful" }
          ]
        },
        {
          name: "Interested",
          feelings: [
            { name: "Curious" },
            { name: "Inquisitive" }
          ]
        },
        {
          name: "Proud",
          feelings: [
            { name: "Successful" },
            { name: "Confident" }
          ]
        },
        {
          name: "Accepted",
          feelings: [
            { name: "Respected" },
            { name: "Valued" }
          ]
        },
        {
          name: "Powerful",
          feelings: [
            { name: "Courageous" },
            { name: "Creative" }
          ]
        },
        {
          name: "Peaceful",
          feelings: [
            { name: "Loving" },
            { name: "Thankful" }
          ]
        },
        {
          name: "Trusting",
          feelings: [
            { name: "Sensitive" },
            { name: "Intimate" }
          ]
        },
        {
          name: "Optimistic",
          feelings: [
            { name: "Hopeful" },
            { name: "Inspired" }
          ]},
      ]},
    {
      name: "Sad",
      color: "#4F94FF",
      feelings: [
        {
          name: "Lonely",
          feelings: [
            { name: "Isolated" },
            { name: "Abandonded" }
          ]
        },
        {
          name: "Vulnerable",
          feelings: [
            { name: "Victimized" },
            { name: "Fragile" }
          ]
        },
        {
          name: "Interested",
          feelings: [
            { name: "Grief" },
            { name: "Powerless" }
          ]
        },
        {
          name: "Guilty",
          feelings: [
            { name: "Ashamed" },
            { name: "Remorseful" }
          ]
        },
        {
          name: "Depressed",
          feelings: [
            { name: "Empty" },
            { name: "Inferior" }
          ]
        },
        {
          name: "Hurt",
          feelings: [
            { name: "Embarassed" },
            { name: "Dissappointed" }
          ]
        }
      ]
    },
    {
      name: "Disgusted",
      color: "#9AC839",
      feelings: [
        {
          name: "Repelled",
          feelings: [
            { name: "Hesitant" },
            { name: "Horrified" }
          ]
        },
        {
          name: "Awful",
          feelings: [
            { name: "Detestable" },
            { name: "Nauseated" }
          ]
        },
        {
          name: "Disappointed",
          feelings: [
            { name: "Revolted" },
            { name: "Appalled" }
          ]
        },
        {
          name: "Disapproving",
          feelings: [
            { name: "Embarrassed" },
            { name: "Judgmental" }
          ]
        }
      ]
    },
    {
      name: "Angry",
      color: "#FE6E6D",
      feelings: [
        {
          name: "Critical",
          feelings: [
            { name: "Dismissive" },
            { name: "Skeptical" }
          ]
        },
        {
          name: "Distant",
          feelings: [
            { name: "Numb" },
            { name: "Withdrawn" }
          ]
        },
        {
          name: "Frustrated",
          feelings: [
            { name: "Annoyed" },
            { name: "Infuriated" }
          ]
        },
        {
          name: "Aggressive",
          feelings: [
            { name: "Hostile" },
            { name: "Provoked" }
          ]
        },
        {
          name: "Mad",
          feelings: [
            { name: "Jealous" },
            { name: "Furious" }
          ]
        },
        {
          name: "Bitter",
          feelings: [
            { name: "Violated" },
            { name: "Indignant" }
          ]
        },
        {
          name: "Humiliated",
          feelings: [
            { name: "Ridiculed" },
            { name: "Disrespected" }
          ]
        },
        {
          name: "Let down",
          feelings: [
            { name: "Resentful" },
            { name: "Betrayed" }
          ]
        }
      ]
    },
    {
      name: "Fearful",
      color: "#B588FF",
      feelings: [
        {
          name: "Threatened",
          feelings: [
            { name: "Exposed" },
            { name: "Nervous" }
          ]
        },
        {
          name: "Rejected",
          feelings: [
            { name: "Persecuted" },
            { name: "Excluded" }
          ]
        },
        {
          name: "Weak",
          feelings: [
            { name: "Insignificant" },
            { name: "Worthless" }
          ]
        },
        {
          name: "Insecure",
          feelings: [
            { name: "Inferior" },
            { name: "Inadequate" }
          ]
        },
        {
          name: "Anxious",
          feelings: [
            { name: "Worried" },
            { name: "Overwhelmed" }
          ]
        },
        {
          name: "Scared",
          feelings: [
            { name: "Frightened" },
            { name: "Helpless" }
          ]
        }
      ]
    },
    {
      name: "Bad",
      color: "#C8C196",
      feelings: [
        {
          name: "Bored",
          feelings: [
            { name: "Indifferent" },
            { name: "Apathetic" }
          ]
        },
        {
          name: "Busy",
          feelings: [
            { name: "Pressured" },
            { name: "Rushed" }
          ]
        },
        {
          name: "Stressed",
          feelings: [
            { name: "Overwhelmed" },
            { name: "Out of control" }
          ]
        },
        {
          name: "Tired",
          feelings: [
            { name: "Sleepy" },
            { name: "Unfocused" }
          ]
        }
      ]
    },
    {
      name: "Surprised",
      color: "#FF4E8F",
      feelings: [
        {
          name: "Startled",
          feelings: [
            { name: "Shocked" },
            { name: "Dismayed" }
          ]
        },
        {
          name: "Confused",
          feelings: [
            { name: "Disillusioned" },
            { name: "Perplexed" }
          ]
        },
        {
          name: "Amazed",
          feelings: [
            { name: "Astonished" },
            { name: "Awe" }
          ]
        },
        {
          name: "Excited",
          feelings: [
            { name: "Eager" },
            { name: "Energetic" }
          ]
        }
      ]
    }
  ];
  let html = ``;

  // Primary Feeling
  for (let primary of feels) {
    html += `
    <div style="background-color: ${primary.color};" class="primary-wrap">
      <div class="primary"><span>${primary.name}</span></div>
      <div class="secondary-wrap">
  `;

    // Secondary Feeling
    for (let secondary of primary.feelings) {
      html += `
      <div class="secondary-row">
        <div class="secondary">${secondary.name}</div>
        <div class="tertiary-wrap">
    `;

      // Tertiary Feeling
      for (let tertiary of secondary.feelings) {
        html += `
          <label>${tertiary.name} <input type="checkbox" value="${tertiary.name.toLowerCase()}" name="${primary.name.toLowerCase()}"><span class="checkmark"></span></label>
      `;
      }

      html += `
          </div>
        </div>
    `;
    }

    html += `
      </div>
    </div>
  `
  }

  document.getElementById("feelings").innerHTML = html;
}

function feelingClicked() {

  document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (var checkbox of checkboxes)
    {
      checkbox.addEventListener('change', function(event) {

        if (event.target.checked) {
          // alert(`${event.target.value} is checked`);
          document.getElementById("done").classList.remove("disabled");
        }
        else {
          // alert(`${event.target.value} is unchecked`);

          if (document.querySelectorAll('input[type="checkbox"]:checked').length == 0) {
            document.getElementById("done").classList.add("disabled");
          }
        }
      });
    }
  }, false);
}

function donePicking() {
  let data = {
    primary : [],
    feelings: {}
  };

  let phrase = "";

  document.querySelector('#feelings').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const entires = formData.entries();
    const keys = formData.values();

    for (input of entires) {
      data.feelings[input[0]] = formData.getAll(input[0]);
    }

    let longest = 0;

    for (feeling in data.feelings) {
      let feelLength = data.feelings[feeling].length;

      if (feelLength > longest) {
        data.primary = [feeling];
        longest = feelLength;
      } else if (feelLength == longest) {
        data.primary.push(feeling);
      }
    }

    // First sentence
    let strPrimaries = data.primary.join(", ").replace(/,(?=[^,]*$)/, ' and');
    phrase += `Right now I'm feeling pretty ${strPrimaries} — `;

    // Second sentence
    let mainTertiaries = [];
    for (x of data.primary) { mainTertiaries = mainTertiaries.concat(data.feelings[x]); }
    let strMainTertiaries = mainTertiaries.join(", ").replace(/,(?=[^,]*$)/, ' and');
    phrase += `I'm feeling ${strMainTertiaries}. `;

    // Third sentence
    let allFeelings = [].concat.apply([], Object.values(data.feelings));
    const feelingsToRemove = new Set(mainTertiaries);
    const remainingTertiaries = allFeelings.filter((feeling) => { return !feelingsToRemove.has(feeling); });
    let strRemainingTertiaries = remainingTertiaries.join(", ").replace(/,(?=[^,]*$)/, ' and');

    if (remainingTertiaries.length != 0) {
      phrase += `I'm also feeling ${strRemainingTertiaries}.`;
    }

    document.getElementById("results").classList.add("visible");
    document.getElementById("phrase").innerHTML = phrase;
  });
}

function goBack() {
  document.getElementById("results").classList.remove("visible");
}
