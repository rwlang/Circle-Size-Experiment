// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "ebbinghaus-online_lab.js",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Ebbinghaus Online_lab.js",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"UM_Logo.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Principal Investigators:",
          "content": "Ryan Langridge (PhD Candidate, Psychology, University of Manitoba, langrirw@myumanitoba.ca)"
        },
        {
          "required": true,
          "type": "text",
          "content": "Tiffany Carther-Krone (PhD Candidate, Psychology, University of Manitoba, lazart@myumanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, Jonathan.Marotta@umanitoba.ca)"
        },
        {
          "required": true,
          "type": "text",
          "content": "We are interested in how your perception of a circle affects your performance when clicking on it.",
          "title": "Purpose:"
        },
        {
          "required": true,
          "type": "text",
          "title": "Description:",
          "content": "This study will last approximately 30 minutes.  During the experiment you will be asked to click on circular targets as quickly and as accurately as possible.  Prior to this task, you will be asked to fill out a brief questionnaire involving questions about your age, sex, handedness, vision, and the device you are currently using to complete the experiment."
        },
        {
          "required": true,
          "type": "text",
          "title": "Risks and Benefits:",
          "content": "There are no risks (physical, psychological, and\u002For emotional) inherent in the tasks you will perform, but some of the tests may be repetitive.  By participating in this study you will be providing valuable data regarding how the way we perceive our visual environment affects the way we interact with it."
        },
        {
          "required": true,
          "type": "text",
          "title": "Costs and Payments:",
          "content": "There are no fees or charges to participate in this study.  You will receive 1 experimental credit for your participation in this study."
        },
        {
          "required": true,
          "type": "text",
          "title": "Confidentiality",
          "content": "Your information will be kept confidential.  You will be referred to by a code number.  After completing the experiment, all identifying information will be saved separately from your experimental data, and will only be used to assign you participation credit.  Your files will only be accessible by the investigators.  Results from this study will be disseminated through conference presentations and refereed publications.  Participant confidentiality will not be jeopardized."
        },
        {
          "required": true,
          "type": "text",
          "title": "Voluntary Consent",
          "content": "By selecting the 'I Consent' option below, you are indicating that you have understood to your satisfaction the information regarding participation in the research project and agree to participate as a subject.  In no way does this waive your legal rights nor release the researchers, sponsors, or involved institutions form their legal and professional responsibilities.  You are free to withdraw from the study at any time by exiting your browser (participation is completely voluntary), and\u002For refrain from answering any questions you prefer to omit, without prejudice or consequence.  You will also still receive your participation credit if you encounter any technical difficulties, and cannot continue.  This means that should you choose to withdraw at any point from the study, you will still receive 1 participation credit."
        },
        {
          "required": true,
          "type": "text",
          "content": "The University of Manitoba may look at your research records to see that the research is being done in a safe and proper way"
        },
        {
          "required": true,
          "type": "text",
          "content": "This research has been approved by the Psychology\u002FSociology Research Ethics Board of the University of Manitoba.  If you have any concerns or complaints about this project you may contact any of the above named persons or the Human Ethics Coordinator (HEC) at (204) 474-7122 (Email: humanethics@umanitoba.ca)."
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "I Consent",
              "coding": "1"
            },
            {
              "label": "I Do Not Consent",
              "coding": "2"
            }
          ],
          "name": "Participant_Consent",
          "label": "Do you understand and consent to these terms?"
        },
        {
          "required": false,
          "type": "input",
          "label": "If you would like to receive a general summary of the results from this study when it is completed, please provide your email address below:",
          "name": "if-you-would-like-to-receive-a-general-summary-of-the-results-from-this-study-when-it-is-completed-please-provide-your-email-address-below:"
        },
        {
          "required": true,
          "type": "text",
          "content": "Thank you for your participation!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "UM_Logo.png": "embedded\u002Fcdc265bb9ccc663e521b502e8ea913f0265f80613ded26a4eb962293639abb3a.png"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent Form",
      "width": "m"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Please provide your name (first and last) and student number and click the 'Continue' button.  This information will only be used by the experimenter to ensure you are NOT penalized for ending the experiment early."
        },
        {
          "required": false,
          "type": "input",
          "label": "First Name",
          "name": "first-name"
        },
        {
          "required": false,
          "type": "input",
          "label": "Last Name",
          "name": "last-name"
        },
        {
          "required": false,
          "type": "input",
          "label": "Student Number",
          "name": "student-number"
        },
        {
          "required": true,
          "type": "text",
          "title": "Please use the 'Quit' button on the following page to ensure this information is saved."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Page",
      "tardy": true,
      "skip": "${this.state['Participant_Consent'] == '1'}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "Debriefing:",
          "content": "The purpose of this study was to measure how the perception of a circle's size influences how accurately participants judge the location of that circle's center.  To bias size perception, we used a commonly known illusion often referred to as the 'Ebbinghaus Illusion'.  This illusion involves surrounding a middle circle with a ring of larger or smaller circles.\n\nIn this illusion, a circle is usually perceived as larger when surrounded by smaller circles, while an identical sized circle is typically perceived as smaller when surrounded by larger circles.  During the experiment, participants were required to choose the larger of two circles.  In some of those trials, the target circles were actually the same size, even though the illusion may have made them appear smaller or larger."
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "During the experimental trials, participants received feedback about their performance (e.g., you were moving too slowly, or not clicking the target circle accurately enough).  These messages were automated, and did not reflect participants' actual speed or accuracy in any way.  Our intention was to encourage participants to emphasize either speed or accuracy while completing the trials, to see how these added motivations would influence their accuracy when clicking the center of the circle."
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "If you have any questions about this study, please feel free to contact us:"
        },
        {
          "required": true,
          "type": "text",
          "content": "Ryan Langridge (PhD Candidate, Psychology, University of Manitoba, langrirw@myumanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Tiffany Carther-Krone (PhD Candidate, Psychology, University of Manitoba, lazart@myumanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, Jonathan.Marotta@umanitoba.ca)"
        },
        {
          "required": true,
          "type": "text",
          "content": "Or, you can contact the Human Ethics Coordinator at humanethics@umanitoba.ca."
        },
        {
          "required": true,
          "type": "text",
          "title": "Please Exit by clicking the 'Quit' button below."
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\r\n\r\n\u003Cbutton id=\"Submit\"\u003EQuit\u003C\u002Fbutton\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* Download data to firebase */
this.options.events['click button#Submit'] = function sendToFirebase() {
    const rng = new lab.util.Random();
  
  firebase.database().ref(rng.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Debrief No Consent",
      "width": "l",
      "tardy": true,
      "skip": "${this.state['Participant_Consent'] == '1'}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "You may now exit your browser.  Thank you!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Page",
      "tardy": true,
      "skip": "${this.state['Participant_Consent'] == '1'}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Chtml\u003E\n    \u003Cbody\u003E\n\n\u003Cb\u003E Clicking the 'Continue' button below will open up a new window redirecting you to SONA, and awarding your 1 participation credit.  Once the new window opens, please minimize it and continue the experiment.  You may return to the new window following completion of the experiment. \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    Some browsers use pop-up blockers which may prevent the new window from opening.  If for some reason the new window does not open, and you do not receive credit for your participation in this study, please email langrirw@myumanitoba.ca AFTER COMPLETING THE EXPERIMENT.  \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n  \n  Reminder: You are free to withdraw from the study at any time by exiting your browser (participation is completely voluntary), and\u002For refrain from answering any questions you prefer to omit, without prejudice or consequence.  You will also still receive your participation credit if you encounter any technical difficulties, and cannot continue.  This means that should you choose to withdraw at any point from the study, you will still receive 1 participation credit. \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n\n\u003Cbutton onclick=\"window.open('https:\u002F\u002Fumanitobapsych.sona-systems.com\u002Fwebstudy_credit.aspx?experiment_id=1313&credit_token=c84ad4dbec424d0e8a58efb46fee6848&survey_code=${this.state.url.id}'\n,'','width=,height=,resizeable=no');\" id=\"Continue\" class=\"float-left submit-button\" \u003EContinue\u003C\u002Fbutton\u003E\n\n\n\n\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "click button#Continue": "Credit"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Participation Credit",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "The following information is used to assist us in conducting our study.  Please note that there is no personally identifiable information kept, and you will only be referred to by an arbitrary participant number.  All information will be kept confidential, and your files will only be accessible by the investigators.  You may refrain from answering any questions you choose."
        },
        {
          "type": "text",
          "content": "Please read each question very carefully and fill out the following information to the best of your knowledge (leave blank if you don't know the answer):",
          "title": "Instructions"
        },
        {
          "required": false,
          "type": "input",
          "label": "Please record the make\u002Fmodel and (diagonal) screen size of the device you are using to complete the experiment (e.g., macbook pro; 13.3 in):",
          "name": "please-record-the-makemodel-and-(diagonal)-screen-size-of-the-device-you-are-using-to-complete-the-experiment-(e.g.-macbook-pro-13.3-in):"
        },
        {
          "required": false,
          "type": "checkbox",
          "options": [
            {
              "label": "Using your finger on a track pad",
              "coding": "1"
            },
            {
              "label": "Using a Mouse",
              "coding": "2"
            },
            {
              "label": "Using your finger on a touch screen monitor",
              "coding": "3"
            }
          ],
          "label": "How are you controlling the cursor on your device?",
          "name": "how-are-you-controlling-the-cursor-on-your-device"
        },
        {
          "required": false,
          "type": "input",
          "label": "What is your age (years)?",
          "name": "what-is-your-age-(years)"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "I have normal vision",
              "coding": "1"
            },
            {
              "label": "I have corrected-to-normal vision (e.g., Wearing glasses, contact lenses, corrective eye-surgery etc.)",
              "coding": "2"
            }
          ],
          "label": "Vision:",
          "name": "vision:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Male",
              "coding": "1"
            },
            {
              "label": "Female",
              "coding": "2"
            },
            {
              "label": "Prefer not to answer",
              "coding": "3"
            }
          ],
          "label": "Sex:",
          "name": "sex:"
        },
        {
          "required": true,
          "type": "text",
          "title": "Which hand do you use to do the following?"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Throw a ball:",
          "name": "throw-a-ball:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Brush your teeth:",
          "name": "brush-your-teeth:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Eat soup with a spoon:",
          "name": "eat-soup-with-a-spoon:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Comb your hair:",
          "name": "comb-your-hair:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Cut bread with a knife:",
          "name": "cut-bread-with-a-knife:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Swing a tennis\u002Fbadminton racquet or bat:",
          "name": "swing-a-tennisbadminton-racquet-or-bat:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Hammer a nail:",
          "name": "hammer-a-nail:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Point to something accurately:",
          "name": "point-to-something-accurately:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Write your name:",
          "name": "write-your-name:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "Control the cursor when using a computer:",
          "name": "control-the-cursor-when-using-a-computer:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No",
              "coding": "2"
            }
          ],
          "label": "Do you play any eye-hand coordination sports?",
          "name": "do-you-play-any-eye-hand-coordination-sports"
        },
        {
          "required": false,
          "type": "input",
          "label": "If yes, which sports do you play?",
          "name": "if-yes-which-sports-do-you-play"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Fullscreen",
      "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions",
          "content": "In this experiment, you will be using the mouse cursor to click on target circles presented on the screen.\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "This experiment involves 4 parts:"
        },
        {
          "required": true,
          "type": "text",
          "content": "Part 1: Screen Setup"
        },
        {
          "required": true,
          "type": "text",
          "content": "Part 2: Size Judgement\n\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "Part 3: Practice"
        },
        {
          "required": true,
          "type": "text",
          "content": "Part 4: Experimental Trials"
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' when ready to begin."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "cross_r.cur": "embedded\u002F628faecdf73efcb02e6ba66f589b816f3bb3fc1ef42cf76ecad460f5587d4069.cur"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['click button#fullscreen'] = function() {
  // Launch fullscreen mode
lab.util.fullscreen.launch(document.body)
    // ... if successful, move to next screen
  .then(() => this.end('Fullscreen mode enabled'))
    // ... otherwise, alert the user
  .catch(() => alert('Fullscreen mode not available'))
}
}
      },
      "title": "Instructions_1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 1: First, a quick task to get your screen set-up for the experiment.",
          "content": "Click the center of each circle with your cursor.  \n\nTIP: You may need to be very precise with your clicking."
        },
        {
          "required": true,
          "type": "text",
          "title": "Click 'Continue' when ready to proceed."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Instructions 1.5"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "0",
          "": "Center"
        },
        {
          "Horizontal_Pos": "-200",
          "Vertical_Pos": "0",
          "": "Left"
        },
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "-150",
          "": "High"
        },
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "150",
          "": "Low"
        },
        {
          "Horizontal_Pos": "200",
          "Vertical_Pos": "0",
          "": "Right"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Screen Setup",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": "18",
                "height": 4,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "aoi",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": "2",
                "height": "2",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Center"
              },
              {
                "type": "circle",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": 2.46,
                "height": 2.46,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Center": "Center",
              "click @Low": "Low",
              "click @High": "High",
              "click @Right": "Right",
              "click @Left": "Left",
              "click @Top_Left": "Top_Left",
              "click @Top_Right": "Top_Right",
              "click @Bottom_Left": "Bottom_Left",
              "click @Bottom_Right": "Bottom_Right"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Calibration",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.jpeg\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask",
            "timeout": "200"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 2: Size Judgement",
          "content": "You will be shown two target circles, one of which is slightly larger than the other."
        },
        {
          "required": true,
          "type": "text",
          "content": "Choose which target circle is largest by clicking on it."
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"Size Judgment Image 1.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to proceed."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
        "Small vs Big Click.JPG": "embedded\u002Fb9a9e143363e9e7b0d6e32a4d7db3f99b566ab8ea3d80df8de9eb1de182bcc2c.JPG",
        "Size Judgment Image 2.png": "embedded\u002F48c44a9b8fe72a138d23878688ba883bac8c58003f6990b980d43353b9ace40e.png",
        "Size Judgment Image 1.png": "embedded\u002Fc8043101e739c94bc5fc27971be3262e5178522a6c757ed0ca0ab9bcba182048.png"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Instructions_2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 2: Size Judgement Continued",
          "content": "If a target circle is surrounded by a ring of other circles, only consider the size of the target circle in the MIDDLE when comparing target circle sizes."
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"Size Judgment Image 2.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to proceed."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Small vs Big Click w context.JPG": "embedded\u002F444d33ff5ea5f378ed9860435aadec393a1b816791e7775e379b42e262b78049.JPG",
        "Size Judgment Image 2.png": "embedded\u002F48c44a9b8fe72a138d23878688ba883bac8c58003f6990b980d43353b9ace40e.png",
        "Size Judgment Image 1.png": "embedded\u002Fc8043101e739c94bc5fc27971be3262e5178522a6c757ed0ca0ab9bcba182048.png"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Instructions_3"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "P_Large_3.png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3 (Big).png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "Control_3 (Big).png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "Control_3 (Small).png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3 (Big).png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "P_Large_3.png"
        },
        {
          "P_Size_L": "Control_3 (Big).png",
          "P_Size_R": "P_Large_3.png"
        },
        {
          "P_Size_L": "Control_3 (Small).png",
          "P_Size_R": "P_Large_3.png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "Control_3 (Big).png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "Control_3 (Big).png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "Control_3 (Big).png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "Control_3 (Small).png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "Control_3 (Small).png",
          "P_Size_R": "Control_3 (Big).png"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {
        "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
        "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
        "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
        "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
        "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Perceptual Comparison",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 20.84,
                "height": 20.84,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
              },
              {
                "type": "circle",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": "#aaaaaa",
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 642.16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the grey button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start_Button": "Start Position"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Start Button"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.jpeg\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask",
            "timeout": "200"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "0",
                "top": "0",
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "image",
                "left": "-200",
                "top": 0,
                "angle": 0,
                "width": "300",
                "height": "300",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.P_Size_L] }"
              },
              {
                "type": "image",
                "left": "200",
                "top": 0,
                "angle": 0,
                "width": "300",
                "height": "300",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.P_Size_R] }"
              },
              {
                "type": "aoi",
                "left": "-200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Left"
              },
              {
                "type": "aoi",
                "left": "200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Right"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
              "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
              "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png"
            },
            "responses": {
              "click @Response_Left": "Respond_Left",
              "click @Response_Right": "Respond_Right"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Comparison",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 3: Practice",
          "content": "A target circle will appear on the screen."
        },
        {
          "required": true,
          "type": "text",
          "content": "When the target circle appears, click the center of the target circle AS QUICKLY AND AS ACCURATELY AS POSSIBLE."
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"Practice instructions image.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to being the first set of practice trials."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Practice instructions image.png": "embedded\u002F65493dcefcf473e9cb445f3af7d6d0d3c02e4b8003d2dcfeacdeda208ff69d75.png"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Practice Instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "P_Size": "P_Small_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Small_3.png",
          "Position": "200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "200"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Practice Trials",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": "20.84",
                "height": "20.84",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
              },
              {
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": "#aaaaaa",
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 642.16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the grey button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start_Button": "Start Position"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Start Button"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.jpeg\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask",
            "timeout": "200"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 800,
                "height": "600",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "image",
                "left": "${parameters.Position}",
                "top": 0,
                "angle": 0,
                "width": "300",
                "height": "300",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.P_Size] }"
              },
              {
                "type": "aoi",
                "left": "-200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Left"
              },
              {
                "type": "aoi",
                "left": "200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Right"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
              "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
              "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
              "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
              "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png"
            },
            "responses": {
              "click @Response_Left": "Respond_Left",
              "click @Response_Right": "Respond_Right"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Practice",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 4: Experimental Trials",
          "content": "We will now move on to the real experiment."
        },
        {
          "required": true,
          "type": "text",
          "title": "Remember:",
          "content": "The goal is to click the center of the target circle AS QUICKLY AND ACCURATELY AS POSSIBLE."
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to begin.  Good Luck!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Experimental Trials instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "P_Size": "P_Small_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Small_3.png",
          "Position": "200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "200"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "50"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Experimental Trials_Pre Manip",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 20.84,
                "height": 20.84,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
              },
              {
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": "#aaaaaa",
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 642.16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the grey button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start_Button": "Start Position"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Start Button"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.jpeg\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask",
            "timeout": "200"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "image",
                "left": "${parameters.Position}",
                "top": 0,
                "angle": 0,
                "width": "300",
                "height": "300",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.P_Size] }"
              },
              {
                "type": "aoi",
                "left": "-200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Left"
              },
              {
                "type": "aoi",
                "left": "200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Right"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
              "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
              "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
              "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
              "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png"
            },
            "responses": {
              "click @Response_Left": "Respond_Left",
              "click @Response_Right": "Respond_Right"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Pre_Manip Exp Trial",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "You're moving a bit slow!",
          "content": "Remember: The goal is to click the center of the target circle AS QUICKLY AS POSSIBLE."
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to begin the next set of trials."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Speed_Manip Instructions"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Try to be a bit more accurate when clicking!",
          "content": "Remember: The goal is to click the CENTER of the target circle AS ACCURATELY AS POSSIBLE."
        },
        {
          "required": true,
          "type": "text",
          "content": "Click 'Continue' to begin the next set of trials."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Accuracy_Manip Instructions",
      "skip": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Press the 'Continue' button below to proceed to the next set of trials."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Control Manip_Instructions",
      "skip": true
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "P_Size": "P_Small_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Small_3.png",
          "Position": "200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "P_Large_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3.png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Small).png",
          "Position": "200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "-200"
        },
        {
          "P_Size": "Control_3 (Big).png",
          "Position": "200"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "50"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Experimental Trials_Post Manip",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
        },
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": "20.84",
                "height": "20.84",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
              },
              {
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": "#aaaaaa",
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 642.16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the grey button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start_Button": "Start Position"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Start Button"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.jpeg\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask",
            "timeout": "200"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "800",
                "height": "600",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "image",
                "left": "${parameters.Position}",
                "top": 0,
                "angle": 0,
                "width": "300",
                "height": "300",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.P_Size] }"
              },
              {
                "type": "aoi",
                "left": "-200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Left"
              },
              {
                "type": "aoi",
                "left": "200",
                "top": 0,
                "angle": 0,
                "width": "100",
                "height": "100",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Response_Right"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
              "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
              "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
              "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
              "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png"
            },
            "responses": {
              "click @Response_Left": "Respond_Left",
              "click @Response_Right": "Respond_Right"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
            },
            "title": "Post_Manip Exp Trial",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cbutton id=\"Continue\"\u003EContinue\u003C\u002Fbutton\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* Download data to firebase */
this.options.events['click button#Continue'] = function sendToFirebase() {
    const rng = new lab.util.Random();
  
  firebase.database().ref(rng.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Download to Firebase"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "Experiment Finished!",
          "content": "Thank you for participating."
        },
        {
          "required": true,
          "type": "text",
          "title": "Debriefing:",
          "content": "The purpose of this study was to measure how the perception of a circle's size influences how accurately participants judge the location of that circle's center.  To bias size perception, we used a commonly known illusion often referred to as the 'Ebbinghaus Illusion'.  This illusion involves surrounding a middle circle with a ring of larger or smaller circles.\n\nIn this illusion, a circle is usually perceived as larger when surrounded by smaller circles, while an identical sized circle is typically perceived as smaller when surrounded by larger circles.  During the experiment, participants were required to choose the larger of two circles.  In some of those trials, the target circles were actually the same size, even though the illusion may have made them appear smaller or larger."
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "During the experimental trials, participants received feedback about their performance (e.g., you were moving too slowly, or not clicking the target circle accurately enough).  These messages were automated, and did not reflect participants' actual speed or accuracy in any way.  Our intention was to encourage participants to emphasize either speed or accuracy while completing the trials, to see how these added motivations would influence their accuracy when clicking the center of the circle."
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "If you have any questions about this study, please contact us:"
        },
        {
          "required": true,
          "type": "text",
          "content": "Ryan Langridge (PhD Candidate, Psychology, University of Manitoba, langrirw@myumanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Tiffany Carther-Krone (PhD Candidate, Psychology, University of Manitoba, lazart@myumanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, Jonathan.Marotta@umanitoba.ca)",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "Or, you can contact the Human Ethics Coordinator at humanethics@umanitoba.ca.",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "You may now press ESC and exit your browser window.  Thank you!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Debrief_Experiment Complete",
      "width": "l"
    }
  ]
})

// Let's go!
study.run()