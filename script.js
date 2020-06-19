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
          "type": "text",
          "title": "Instructions",
          "content": "Please fill out the following information to the best of your knowledge (leave blank if you don't know the answer):"
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
              "label": "Mouse"
            },
            {
              "label": "Touch pad"
            },
            {
              "label": "Finger (Touchscreen)"
            }
          ],
          "label": "How are you controlling the cursor on your device?",
          "name": "how-are-you-controlling-the-cursor-on-your-device"
        },
        {
          "required": true,
          "type": "text",
          "title": "Click 'Continue' to proceed. "
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
      "width": "l"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003C!doctype html\u003E\n\n\u003Chtml\u003E\n    \u003Chead\u003E\n      \u003C!-- Give it a title --\u003E\n        \u003Ctitle\u003EPsychology Experiment - Informed Consent Form\u003C\u002Ftitle\u003E\n        \n        \u003C!-- load in the default css rules --\u003E\n        \u003Clink rel=stylesheet href=\"\u002Fstatic\u002Fcss\u002Fbootstrap.min.css\" type=\"text\u002Fcss\"\u003E\n        \u003Clink rel=stylesheet href=\"\u002Fstatic\u002Fcss\u002Fstyle.css\" type=\"text\u002Fcss\"\u003E\n        \n        \u003C!-- set up funciton to just close down if the user exits --\u003E\n        \u003Cscript type=\"text\u002Fjavascript\"\u003E\n            function onexit() {\n              self.close(); \u002F\u002F no harm, no foul here\n            }\n        \u003C\u002Fscript\u003E\n    \u003C\u002Fhead\u003E\n    \u003Cbody\u003E\n        \u003Cdiv id=\"container-consent\"\u003E\n            \u003Cdiv id=\"consent\"\u003E\n                \u003Cdiv class=\"legal well\"\u003E\n                  \n                    \u003Cp\u003E\n                    \u003Chtml\u003E\u003Chead\u003E\u003Cmeta http-equiv=\"Content-Type\" content=\"text\u002Fhtml;charset=utf-8\" \u002F\u003E\u003Clink href=\"style.css\" rel=\"stylesheet\" type=\"text\u002Fcss\" \u002F\u003E\u003Ctitle\u003EUnknown\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"calibre\" id=\"calibre_link-0\"\u003E\n\n\t\u003Cp\u003E\n\t  \u003C!-- set up a \"table\" that will include the logo and letter head. Image will adapt to screen size --\u003E\n\t  \u003Ctable style=\"width:90%\"\u003E\n\t    \u003Ctr\u003E\n    \t  \u003Cth\u003E\u003Cimg src = \"img\u002FUM_Logo.png\"; width=\"50%\"\u003E\u003C\u002Fth\u003E\n    \t  \u003Cth\u003EName Here, Ph.D.\u003Cbr\u002F\u003E\n    \t  Job Title\u003Cbr\u002F\u003E\n    \t  Department of Something\u003Cbr\u002F\u003E\n    \t  University Name\u003Cbr\u002F\u003E\n    \t  City, Province, Postal Code\u003Cbr\u002F\u003E\n    \t  email\u003Cbr\u002F\u003E\n    \t  Tel: 111-111-1111\u003C\u002Fth\u003E\n    \t \u003C\u002Ftr\u003E\n\t  \u003C\u002Ftable\u003E\n\t\u003C\u002Fp\u003E\n\t\n\t\u003C!-- set alignment to left --\u003E\n\t\u003Cp align=\"left\"\u003E\n\t  \n\t  \u003C!-- enter text that you want for your consent form --\u003E\n\t  \u003Cb\u003EProject Title\u003C\u002Fb\u003E: Example of Running a jsPsych Experiment Online?\u003Cbr\u002F\u003E\n    \u003Cb\u003ESupervisor\u003C\u002Fb\u003E: Name Here\u003Cbr\u002F\u003E\n    \u003Cb\u003EStudent Researchers\u003C\u002Fb\u003E: Other Names\u003Cbr\u002F\u003E\n\u003Cb\u003EWebsite: https:\u002F\u002Fgithub.com\u002FSmithBradleyC\u002FjsPsych_Online_Experiments\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Ci\u003EThis is where you put all of the important information to have on a consent form. Changing it as you need or see fit.\u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EPurpose\u003C\u002Fb\u003E: The purpose of this experiment is to demonstrate how a jsPsych experiment can be hosted online.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EProcedure\u003C\u002Fb\u003E: For this example experiment, you will be shown words in coloured text and asked to identify the colour of the text.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003ERisks and benefits\u003C\u002Fb\u003E:\nThere are no risks involved greater than that which you might experience in your everyday activities. Data is being collected if you complete the experiment and you have the opportunity to identify yourself if you decide to. This repository and database is public so people could have access to how quickly you respond to coloured text.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EYour privacy\u003C\u002Fb\u003E: Your digital data file (only saved if you complete the experiment) may be shared publicly (\u003Cb\u003Ehttps:\u002F\u002Fgithub.com\u002FSmithBradleyC\u002FjsPsych_Online_Experiments\u003C\u002Fb\u003E). However, the data will be stored in a form that will preserve your anonymity unless you provide an identifying value in the survey questions.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003ECompensation\u003C\u002Fb\u003E: This experiment takes about 3 minutes to complete and your only compensation is the learning experience I'm trying to provide with the GitHub repository.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EVoluntary withdrawal\u003C\u002Fb\u003E: Even after you consent to participate in the \"experiment\", you can choose to withdraw your participation at any time during the study and with no consequences. Just close the web browser. \u003Ci\u003E\u003Cb\u003EData from participants who leave partway through the experiment will not be saved.\u003C\u002Fb\u003E\u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EFeedback\u003C\u002Fb\u003E: This is not a read study and as such no feedback will be provided. Check out the website for more info: https:\u002F\u002Fgithub.com\u002FSmithBradleyC\u002FjsPsych_Online_Experiments. Feel free to email if you have questions: (smithb21@myumanitoba.ca).\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EDissemination\u003C\u002Fb\u003E: The data collected will be stored on a publicly accesible Firebase Database. It will not be officially published in any form.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Cb\u003EConsent:\u003C\u002Fb\u003E \u003Ci\u003EIf you wish to continue to the experiment please click the button to begin the study. \u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\u003Ci\u003EPut additional consent legalies here\u003C\u002Fi\u003E \u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n\t\u003C\u002Fp\u003E\n                  \u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n\n                \u003C!-- give a horizontal line --\u003E\n                \u003Chr\u003E\n                \n\n                \u003Ch4\u003EDo you understand and consent to these terms?\u003C\u002Fh4\u003E\n                \u003Cbr\u003E\n\n                \u003Ccenter\u003E\n                    \n                    \u003C!-- set up a button group so that any of the buttons will end the trial --\u003E\n                    \u003Cdiv class=\"btn-group\"; id = \"consent-btns\"\u003E\n                      \u003C!-- set up the \"agree\" button. It sets the consent_check to true so the debriefing trial will be skipped --\u003E\n                      \u003Cbutton type=\"button\"; id = \"agree-btn\"; class=\"btn btn-primary btn-lg\"; style=\"font-size: 20pt\"; onClick = \"consent_check = true\"\u003EI agree\u003C\u002Fbutton\u003E\n\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    \n                    \u003C!-- set up the \"disagree\" button, it does not change the consent_check to true so the debrief will happen --\u003E\n                    \u003Cbutton type=\"button\"; id = \"disagree-btn\"; class=\"btn btn-danger btn-lg\"; style=\"font-size: 20pt\"\n                    \u003Cspan class=\"glyphicon glyphicon-ban-circle\"\u003E\u003C\u002Fspan\u003E No, I do not want to participate\n                    \u003C\u002Fbutton\u003E\n                    \u003C\u002Fdiv\u003E\n                \u003C\u002Fcenter\u003E\n\n            \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n    \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "click button#agree-btn": "Consent",
        "click button#disagree-btn": "No Consent"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form",
      "skip": true
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
  console.log(this.Random.uuid4());

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Screen",
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
      "title": "Loop",
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
            "title": "Screen",
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
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "P_Small_3.png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3.png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "P_Large_3.png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "P_Small_3.png",
          "P_Size_R": "Control_3 (Big).png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "P_Large_3.png",
          "P_Size_R": "Control_3 (Big).png"
        },
        {
          "P_Size_L": "Control_3.png",
          "P_Size_R": "Control_3 (Small).png"
        },
        {
          "P_Size_L": "Control_3.png",
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
                "type": "circle",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9"
              },
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
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 640.41,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the blue button to begin the next trial",
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
            "title": "Screen",
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
            "title": "Screen_1",
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
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 640.41,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the blue button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 38.48,
                "height": 38.48,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
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
            "title": "Screen",
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
            "title": "Screen_2",
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
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 640.41,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the blue button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 38.48,
                "height": 38.48,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
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
            "title": "Screen",
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
            "title": "Screen_3",
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
          "content": "Remember: The goal is click the center of the target circle AS QUICKLY AS POSSIBLE."
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
          "content": "Remember: The goal is click the CENTER of the target circle AS ACCURATELY AS POSSIBLE."
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
          "P_Size": "Control_3 (Small).png",
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
                "type": "circle",
                "left": 0.38,
                "top": 249.62,
                "angle": 0,
                "width": 30.64,
                "height": 30.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 640.41,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Click on the blue button to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 38.48,
                "height": 38.48,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start_Button"
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
            "title": "Screen",
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
            "title": "Screen_4",
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
      "content": "\u003Cbutton id=\"Download\"\u003EDownload\u003C\u002Fbutton\u003E",
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
this.options.events['click button#Download'] = function sendToFirebase() {
  
  firebase.database().ref("1234").set({
    data: this.options.datastore.exportJson()
    });
  firebase.database().ref(this.option.util.Random.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Form"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Experiment Finished",
          "content": "Great Job!  Thank you for participating."
        },
        {
          "required": true,
          "type": "text",
          "title": "Debriefing:",
          "content": "The purpose of this study was to measure how the perception of a circle's size influences how accurately participants judge the center of that circle.  To bias size perception, we used a commonly known illusion often referred to as the 'Ebbinghaus Illusion'.  This illusion involves surrounding a middle circle with a ring of larger or smaller circles.\n\nIn this illusion, a circle is usually perceived as larger when surrounded by smaller circles, while an identical sized circle is typically perceived as smaller when surrounded by larger circles.  During part 2 of this experiment, you were required to choose the larger of two circles.  In some of those trials, the target circles were actually the same size, even though the illusion may have made them appear smaller or larger."
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "During the experimental trials, you will have received feedback about your performance (e.g., you were moving to slowly, or not clicking the target circle accurately enough).  These messages were automated, and did not reflect your actual speed or accuracy in any way.  Our intention was to encourage participants to emphasize either speed or accuracy while completing the trials, to see how these added motivations would influence the results."
        },
        {
          "required": true,
          "type": "text",
          "title": "You may now exit.  Thank you!"
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
      "title": "Debrief",
      "width": "l"
    }
  ]
})

// Let's go!
study.run()