
/**
 * Created by Martin on 1/25/18.
 */

//Execute the eventWindowLoaded function
window.addEventListener("load",eventWindowLoaded, false);

//Called when the window has been loaded it then calls the canvasapp()
function eventWindowLoaded() {
    canvasApp();
}


//Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
}


//The function where ALL our canvas code will go
function canvasApp() {


    if (!canvasSupport()) {
        return;
    }


    //Set up the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var context = theCanvas.getContext("2d");

    //Canvas dimensions
    var canvasHeight = theCanvas.height;
    var canvasWidth = theCanvas.width;

    //Set canvas color
    var canvasColor = "gray";

    var images = [];
    var imagesSource = ["./images/bridge.png", //0
        "./images/frequen.png", //1
        "./images/logs.png", //2
        "./images/monitor.png", //3
        "./images/personallogs.png", //4
        "./images/officiallogs.png", //5
        "./images/arguement.png", //6
        "./images/sanitation.png", //7
        "./images/bridgeopening.png", //8
        "./images/missionhand.png", //9
        "./images/whatwill.png", //10
        "./images/severed.png", //11
        "./images/yourhand.png", //12
        "./images/title.png", //13
        "./images/crew.png", //14
        "./images/bridgeCam.png", //15
        "./images/cargotransfer.png", //16
        "./images/cloudcam.png", //17
        "./images/transaction.png", //18
        "./images/attack.png", //19
        "./images/SickBay.png", //20
        "./images/Vents.png", //21
        "./images/Corridor_To_Messhall.png", //22
        "./images/Kitchen.png", //23

        "./text/1.png", //24
        "./text/2.png", //25
        "./text/3.png", //26
        "./text/4.png", //27
        "./text/5.png", //28
        "./text/6.png", //29
        "./text/7.png", //30
        "./text/8.png", //31
        "./text/9.png", //32

        "./images/Map.png", //33
        "./images/Crew_Quarters.png", //34
        "./images/Crew Quarters Journals.png", //35
        "./images/Crew_Quarters_Trunk.png", //36
        "./images/Sick_Bay_Lab_Samples.png", //37
        "./images/Sick_Bay_Medical_Records.png", //38
        "./images/Sick_Bay_Medical_Table.png", //39'
        "./images/Morgue.png", //40

        "./text/11.png", //41 cargo hold
        "./text/13.png", //42 space cloud 1
        "./text/14.png", //43 space cloud 2
        "./text/15.png", //44 cloud analysis
        "./text/18.png", //45 tractor 1
        "./text/19.png", //46 tractor 2
        "./text/21.png", //47 cargo ship
        "./text/23.png", //48 bridge cam 1
        "./text/24.png", //49 bridge cam 2
        "./text/25 part 1.png", //50
        "./text/25 part 2.png", //51
        "./text/26.png", //52
        "./text/27.png", //53
        "./text/28.png", //54
        "./text/29.png", //55
        "./text/30.png", //56
        "./text/31.png", //57 sanitary
        "./text/32 p 1.png", //58 arg 1
        "./text/32 p 2.png", //59 arg 2
        "./text/33.png", //60
        "./text/34.png", //61
        "./text/35.png", //62
        "./text/36.png", //63
        "./text/37.png", //64
        "./text/38.png", //65
        "./text/39.png", //66

        "./images/Captains_Hologram.png", //67

        "./text/40.png", //68
        "./text/41.png", //69
        "./text/42.png", //70
        "./text/43.png", //71
        "./text/44.png", //72
        "./text/45.png", //73
        "./text/46.png", //74
        "./text/47.png", //75
        "./text/48.png", //76
        "./text/49.png", //77
        "./text/50.png", //78
        "./text/51.png", //79
        "./text/52.png", //80

        "./text/53.png", //81
        "./text/54.png", //82
        "./text/55.png", //83
        "./text/56.png", //84
        "./text/57.png", //85
        "./text/58.png", //86

        "./text/59.png", //87
        "./text/60.png", //88
        "./text/61.png", //89
        "./text/62.png", //90
        "./text/63.png", //91
        "./text/64.png", //92
        "./text/65.png", //93
        "./text/66.png", //94
        "./text/67.png", //95
        "./text/68.png", //96
        "./text/69.png", //97
        "./text/70.png", //98
        "./text/71.png", //99
        "./text/72.png", //100
        "./text/73.png", //101
        "./text/74.png", //102
        "./text/75.png", //103
        "./text/76.png", //104
        "./text/77.png",  //105

        "./images/gunshot.png", //106

        "./text/78.png", //107
        "./text/79.png", //108
        "./text/80.png", //109
        "./text/81.png", //110
        "./text/82.png", //111

        "./images/Boiler_Room.png", //112
        "./images/Explosion.png", //113

        "./text/83.png", //114
        "./text/84.png", //115
        "./text/85 p 1.png", //116
        "./text/85 p 2.png", //117
        "./text/86.png", //118
        "./text/87.png", //119
        "./text/88.png", //120
        "./text/89.png", //121
        "./text/90.png", //122
        "./text/91.png", //123
        "./text/92.png", //124
        "./text/93.png", //125
        "./text/94.png", //126
        "./text/95.png", //127
        "./text/96.png", //128
        "./text/97.png", //129
        "./text/98.png", //130
        "./text/99.png", //131
        "./text/100.png", //132
        "./text/101.png", //133

        "./images/Boiler_Hiding_Spot.png", //134
        "./images/Secret_Control_Room.png", //135
        "./images/Alien_Attack.png" //136

    ];

    var moveX;
    var moveY;

    var stageBridge = 0;
    var stageMed = 0;
    var stageSleep = 0;
    var stageAlien = 0;
    var stageCon = 0;
    var select = 0;
    var options = 0;
    var conspiracy = 0;
    var bridgeDone = false;
    var medDone = false;
    var sleepDone = false;
    var start = 0;

    // load all the images
    function loadImages(images, imagesSource, callback) {
        var loadedImages = 0;

        // for each imageSource
        for (var src = 0; src < imagesSource.length; src++) {
            //create a new image object
            images[src] = new Image();

            //load the image
            images[src].onload = function () {
                if (++loadedImages >= imagesSource.length) {
                    callback(images);
                }
                ;
            }
            //set the image source
            images[src].src = imagesSource[src];
        }
    }


    var fail = "MASSIVE FAILURE YA DINGUS";
    var garbage = "blahblahblahbrimbplepatchciumbersnatchblahblahblah \
        bumbleprimclimberblatchododododododododododododododododododo";

    //---------------------MESSAGES-----------------------------------

    //START
    var start1 = "Bridge";
    var start2 = "Med Bay";
    var start3 = "Living Quarters";

    //BRIDGE
    var bridge1 = "Check Logs";
    var bridge2 = "Check Footage";

    //________________________\\

    //MEDBAY
    var med1 = "Check Patient Log";
    var med2 = "Examine Medical Table";
    var med3 = "Check Lab Samples";
    var med4 = "Check Out Morgue";
    var med5 = "Patient Zero";
    var med6 = "Confidential";
    var med7 = "Trash";
    var med8 = "Empty Syringe";
    var med9 = "Patient Zero";
    var med10 = "X-Venom";
    var med11 = "Shot Victim";
    var med12 = "Mangled Body";


    //________________________\\

    //SLEEPING QUARTERS
    var sleep1 = "Rose's Journal";
    var sleep2 = "Personal Trunk";
    var sleep3 = "Bunkmate's Journal";
    var sleep4 = "Read 'Council Meetings'";
    var sleep5 = "Read 'The Sickness'";
    var sleep6 = "Read Crumpled Note";
    var sleep7 = "Examine 'Rose'";


    //________________________\\

    //LOGS
    var logs1 = "Read Crew/Ship Logs";
    var logs2 = "Read Mission Objective";
    var logs3 = "Read Further Into Log";
    var logs4 = "Read Argument";
    var logs5 = "Read Sanitary Systems";
    var logs6 = "Place Severed Hand On ID Pad";
    var logs7 = "Place Own Hand On ID Pad";
    var logs9 = "Read Personal Logs";
    var logs10 = "Read Official Logs";


    //________________________\\

    //MONITOR
    var mon1 = "Check Security Cam";
    var mon2 = "Check Space Hub Cam";
    var mon3 = "Check Bridge Cam";
    var mon4 = "Check Motion Cam";
    var mon5 = "Check Cargo Hold";
    var mon6 = "Check Space Cloud Abnormality";
    var mon7 = "Ship to Cargo Tractor Transfer";

    //________________________\\

    var alien1 = "Follow Smell";
    var alien2 = "Follow Noise";
    var alien3 = "Drop Down to Look Around";
    var alien4 = "Continue Through Vent";
    var alien5 = "Go Into Mess Hall";
    var alien6 = "Go Around, Then Enter Kitchen";
    var alien7 = "Shoot Alien";
    var alien8 = "Run to Protect";
    var alien9 = "Shoot Through Rose";
    var alien10 = "Wait and See";

    //________________________\\

    var con1 = "Follow the Heat";
    var con2 = "Follow the Whirring";
    var con3 = "Tackle Rose";
    var con4 = "Confront Verbally";
    var con5 = "Listen to Rose and Leave";
    var con6 = "'No I Won't Lose You Again'";
    var con7 = "Attempt to Get Away";
    var con8 = "Comply and Shut Engine Off";
    var con9 = "Run For Cover";
    var con10 = "Shoot Her First";
    var con11 = "Take His ID and Move On";
    var con12 = "Wake Him";
    var con13 = "Run to the Door";
    var con14 = "Run to the Air Vent";


    //---------------------DRAW METHODS-------------------------------
    function drawIntersection() {
        context.drawImage(images[33], 0, 0, canvasWidth, canvasHeight);
    }

    function drawVent() {
        context.drawImage(images[21], 0, 0, canvasWidth, canvasHeight);
    }

    function drawAlien() {
        context.drawImage(images[136],0,0,canvasWidth,canvasHeight);
    }

    function drawBoiler(){
        context.drawImage(images[112],0,0,canvasWidth,canvasHeight)
    }

    function drawHidingSpot() {
        context.drawImage(images[134],0,0,canvasWidth,canvasHeight);
    }

    function drawSecretRoom() {
        context.drawImage(images[135],0,0,canvasWidth,canvasHeight);
    }

    function drawExplosion() {
        context.drawImage(images[113],0,0,canvasWidth,canvasHeight);
    }

    function drawKitchen() {
        context.drawImage(images[23], 0, 0, canvasWidth, canvasHeight);
    }

    function drawGunshot() {
        context.drawImage(images[106],0,0,canvasWidth,canvasHeight);
    }

    function drawMessHall() {
        context.drawImage(images[22], 0, 0, canvasWidth, canvasHeight);
    }

    function drawHolo() {
        context.drawImage(images[67], 0, 0, canvasWidth, canvasHeight);
    }

    function drawMedBay() {
        context.drawImage(images[20], 0, 0, canvasWidth, canvasHeight);
    }

    function drawSamples() {
        context.drawImage(images[37], 0, 0, canvasWidth, canvasHeight);
    }

    function drawTable() {
        context.drawImage(images[39], 0, 0, canvasWidth, canvasHeight);
    }

    function drawRecords() {
        context.drawImage(images[38], 0, 0, canvasWidth, canvasHeight);
    }

    function drawMorgue() {
        context.drawImage(images[40], 0, 0, canvasWidth, canvasHeight);

    }

    function drawJournal() {
        context.drawImage(images[35], 0, 0, canvasWidth, canvasHeight);
    }

    function drawTrunk() {
        context.drawImage(images[36], 0, 0, canvasWidth, canvasHeight);
    }

    function drawQuarters() {
        context.drawImage(images[34], 0, 0, canvasWidth, canvasHeight);
    }

    function drawBridge() {
        context.drawImage(images[0], 0, 0);
    }//

    function drawFrequencies() {
        context.drawImage(images[1], 0, 0);
    }//

    function drawLogs() {
        context.drawImage(images[2], 0, 0);
    }//

    function drawMonitor() {
        context.drawImage(images[3], 0, 0);
    }//

    function drawTitle() {
        context.drawImage(images[13], 0, 0, canvasWidth, canvasHeight);
    }

    function drawFourOptions(mess1, mess2, mess3, mess4) {

        context.fillStyle = "rgba(53,69,100,0.5)";
        context.font = "20px Silom";
        //TOP LEFT
        context.beginPath();
        context.fillRect(30, 10, 400, 80);
        context.strokeStyle = "white";
        context.rect(30, 10, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess1, 40, 40);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //TOP RIGHT
        context.beginPath();
        context.fillRect(450, 10, 400, 80);
        context.strokeStyle = "white";
        context.rect(450, 10, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess2, 460, 40);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //BOTTOM LEFT
        context.beginPath();
        context.fillRect(30, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(30, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess3, 40, 530);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //BOTTOM RIGHT
        context.beginPath();
        context.fillRect(450, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(450, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess4, 460, 530);
        context.stroke();
        context.closePath();

    }//

    function drawThreeOptions(mess1, mess2, mess3) {

        context.fillStyle = "rgba(53,69,100,0.5)";
        //TOP
        context.beginPath();
        context.fillRect(230, 10, 400, 80);
        context.strokeStyle = "white";
        context.rect(230, 10, 400, 80);
        context.fillStyle = "white";
        context.font = "20px Silom";
        context.fillText(mess1, 240, 40);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //BOTTOM LEFT
        context.beginPath();
        context.fillRect(30, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(30, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess2, 40, 530);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //BOTTOM RIGHT
        context.beginPath();
        context.fillRect(450, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(450, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess3, 460, 530);
        context.stroke();
        context.closePath();

    }//

    function drawTwoOptions(mess1, mess2) {
        context.fillStyle = "rgba(53,69,100,0.5)";
        context.font = "20px Silom";
        //BOTTOM LEFT
        context.beginPath();
        context.fillRect(30, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(30, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess1, 40, 530);
        context.stroke();
        context.closePath();

        context.fillStyle = "rgba(53,69,100,0.5)";
        //BOTTOM RIGHT
        context.beginPath();
        context.fillRect(450, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(450, 500, 400, 80);
        context.fillStyle = "white";
        context.fillText(mess2, 460, 530);
        context.stroke();
        context.closePath();
    }//

    function drawOneOption(mess1) {
        context.fillStyle = "rgba(53,69,100,0.5)";

        //BOTTOM
        context.beginPath();
        context.fillRect(230, 500, 400, 80);
        context.strokeStyle = "white";
        context.rect(230, 500, 400, 80);
        context.fillStyle = "white";
        context.font = "20px Silom";
        context.fillText(mess1, 240, 530);
        context.stroke();
        context.closePath();

    }//

    function drawSideBar() {

        //HOME
        context.fillStyle = "rgba(53,69,100,0.5)";
        context.beginPath();
        context.fillRect(40, 130, 80, 80);
        context.fillStyle = "white";
        context.font = "40px Silom";
        context.fillText("H", 50, 170);
        context.closePath();

    }

    function drawBigTextBox(image) {

        context.fillStyle = "rgba(53,69,100,0.5)";
        context.beginPath();
        context.fillRect(178, 120, 534, 360);
        context.strokeStyle = "white";
        context.rect(178, 120, 534, 360);
        context.fillStyle = "white";
        context.drawImage(image, 178, 120);
        context.stroke();
        context.closePath();

    }//

    //---------------------FUNCTIONALITY-------------------------------


    function navBridge() {
        switch (stageBridge) {
            //TITLE SCREEN
            case 0:
            //BRIDGE*v
            case 1:
                options = 2;
                drawBridge();
                var opening = images[27];
                drawBigTextBox(opening);
                drawTwoOptions(bridge1, bridge2);
                if (select === 1) {
                    stageBridge = 4;
                }
                if (select === 2) {
                    stageBridge = 2;
                }
                select = 0;
                break;
            //MONITOR Start*v
            case 2:
                options = 3;
                drawMonitor();
                drawThreeOptions(mon1, mon2, mon3);
                var prompt = images[28];
                drawBigTextBox(prompt);
                if (select === 1) {
                    stageBridge = 8;
                }
                if (select === 2) {
                    stageBridge = 9;
                }
                if (select === 3) {
                    stageBridge = 10;
                }
                select = 0;
                break;
            //LOGS Start*v
            case 4:
                options = 3;
                drawLogs();
                drawThreeOptions(logs1, logs2, logs3);
                //   var prompt = images[10];
                //   drawBigTextBox(prompt);
                if (select === 1) {
                    stageBridge = 5;
                }
                if (select === 2) {
                    stageBridge = 6;
                }
                if (select === 3) {
                    stageBridge = 7;
                }
                select = 0;
                break;
            //LOGS 1 *v
            case 5:
                options = 1;
                drawLogs();
                var crew = images[53];
                drawBigTextBox(crew);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 32;
                }
                // select = 0;
                break;
            //LOGS 2*v
            case 6:
                options = 2;
                drawLogs();
                drawOneOption("Continue");
                var mission = images[58];
                drawBigTextBox(mission);
                if (select === 1) {
                    stageBridge = 29;
                }

                select = 0;
                break;
            //LOGS 3*v
            case 7:
                options = 2;
                drawLogs();
                //  var prompt = images[10];
                //   drawBigTextBox(prompt);
                drawTwoOptions(logs9, logs10);
                if (select === 1) {
                    stageBridge = 18;
                }
                if (select === 2) {
                    stageBridge = 19;
                }
                select = 0;
                break;
            //MONITOR
            case 8:
                options = 2;
                drawMonitor();
                var prompt = images[10];
                drawBigTextBox(prompt);
                drawTwoOptions(mon4, mon5);
                if (select === 1) {
                    stageBridge = 11;
                }
                if (select === 2) {
                    stageBridge = 12;
                }
                select = 0;
                break;
            //MONITOR 1
            case 9:
                options = 2;
                drawMonitor();
                drawTwoOptions(mon6, mon7);
                if (select === 1) {
                    stageBridge = 13;
                }
                if (select === 2) {
                    stageBridge = 14;
                }
                select = 0;
                break;
            //MONITOR 2
            case 10:
                options = 1;
                drawMonitor();
                var bCam = images[48];
                drawBigTextBox(bCam);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 27;
                }
                select = 0;
                break;
            //MONITOR 3
            case 11:
                options = 1;
                drawMonitor();
                var attack = images[31];
                drawBigTextBox(attack);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 22;
                }
                select = 0;
                break;
            //MONITOR 4
            case 12:
                drawMonitor();
                options = 1;
                var trans = images[41];
                drawBigTextBox(trans);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                    conspiracy++;
                }
                select = 0;
                break;
            //MONITOR 5
            case 13:
                drawMonitor();
                options = 1;
                //drawOneOption(fail);
                var cloud = images[42];
                drawBigTextBox(cloud);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 23;
                }
                select = 0;
                break;
            //MONITOR 6
            case 14:
                drawMonitor();
                options = 1;
                var cargo = images[45];
                drawBigTextBox(cargo);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 25;
                }
                select = 0;
                break;
            //LOGS 5*v
            case 16:
                drawLogs();
                options = 1;
                var severed = images[62];
                drawBigTextBox(severed);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                    conspiracy++;
                }
                select = 0;
                break;
            //LOGS 6*v
            case 17:
                options = 1;
                drawLogs();
                var ownHand = images[63];
                drawBigTextBox(ownHand);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //LOGS 7*v
            case 18:
                options = 1;
                drawLogs();
                var personal = images[64];
                drawBigTextBox(personal);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //LOGS 8*v
            case 19:
                options = 1;
                drawLogs();
                var office = images[65];
                drawBigTextBox(office);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //LOGS 9*v
            case 20:
                options = 1;
                drawLogs();
                var arg = images[58];
                drawBigTextBox(arg);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 30;
                }
                select = 0;
                break;
            //LOGS 10*v
            case 21:
                options = 1;
                drawLogs();
                var sanitary = images[57];
                drawBigTextBox(sanitary);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //MON
            case 22:
                drawMonitor();
                drawBigTextBox(images[32]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //MON
            case 23:
                drawMonitor();
                options = 1;
                drawBigTextBox(images[43]);
                drawOneOption("Read Cloud Analysis");
                if (select === 1) {
                    stageBridge = 24;
                }
                select = 0;
                break;
            //MON
            case 24:
                drawMonitor();
                options = 1;
                drawBigTextBox(images[44]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                }
                select = 0;
                break;
            //MON
            case 25:
                drawMonitor();
                options = 1;
                var cargo = images[46];
                drawBigTextBox(cargo);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 26;
                }
                select = 0;
                break;
            //MON
            case 26:
                drawMonitor();
                options = 1;
                var cargo = images[47];
                drawBigTextBox(cargo);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                    conspiracy++;
                }
                select = 0;
                break;
            //MON
            case 27:
                options = 1;
                drawHolo();
                drawBigTextBox(images[49]);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 33;
                }
                select = 0;
                break;
            //LOG
            case 28:
                options = 2;
                drawLogs();
                drawTwoOptions(logs6, logs7);
                var mission = images[60];
                drawBigTextBox(mission);
                if (select === 1) {
                    stageBridge = 16;
                }
                if (select === 2) {
                    stageBridge = 17;
                }
                select = 0;
                break;
            case 29:
                options = 1;
                drawLogs();
                drawOneOption("Continue");
                drawBigTextBox(images[59]);
                if (select === 1) {
                    stageBridge = 28;
                }
                select = 0;
                break;
            case 30:
                options = 1;
                drawLogs();
                var arg = images[59];
                drawBigTextBox(arg);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                    conspiracy++;
                }
                select = 0;
                break;
            case 31:
                options = 2;
                drawLogs();
                var crew = images[55];
                drawBigTextBox(crew);
                drawTwoOptions(logs4, logs5);
                if (select === 1) {
                    stageBridge = 20;
                }
                if (select === 2) {
                    stageBridge = 21;
                }
                // select = 0;
                break;
            case 32:
                options = 1;
                drawLogs();
                var crew = images[54];
                drawBigTextBox(crew);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 31;
                }
                // select = 0;
                break;
            case 33:
                options = 1;
                drawHolo();
                drawBigTextBox(images[50]);
                drawOneOption("Continue");
                if (select === 1) {
                    stageBridge = 34;
                }
                select = 0;
                break;
            case 34:
                options = 1;
                drawHolo();
                drawBigTextBox(images[51]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageBridge = 35;
                    conspiracy++;
                }
                select = 0;
                break;
            case 35:
                options = 1;
                drawBridge();
                drawOneOption("Return to Corridor");
                drawBigTextBox(images[66]);
                if (select === 1) {
                    start = 3;
                    bridgeDone = true;
                }
        }

    }//

    function navMedBay() {
        switch (stageMed) {
            case 0:
                stageMed = 1;
                break;
            case 1:
                options = 4;
                drawMedBay();
                drawBigTextBox(images[27]);
                drawFourOptions(med1, med2, med3, med4);
                if (select === 1) {
                    //log
                    stageMed = 2;
                }
                if (select === 2) {
                    //table
                    stageMed = 3;
                }
                if (select === 3) {
                    //samples
                    stageMed = 4;
                }
                if (select === 4) {
                    //morgue
                    stageMed = 5;
                }
                select = 0;
                break;
            //40
            case 2:
                options = 2;
                drawRecords();
                drawBigTextBox(images[68]);
                drawTwoOptions(med5, med6);
                if (select === 1) {
                    stageMed = 6;
                }
                if (select === 2) {
                    stageMed = 7;
                }
                select = 0;
                break;
            case 3:
                options = 2;
                drawTable();
                drawBigTextBox(images[27]);
                drawTwoOptions(med7, med8);
                if (select === 1) {
                    stageMed = 8;
                }
                if (select === 2) {
                    stageMed = 9;
                }
                select = 0;
                break;
            //45
            case 4:
                options = 2;
                drawSamples();
                drawBigTextBox(images[73]);
                drawTwoOptions(med9, med10);
                if (select === 1) {
                    stageMed = 10;
                }
                if (select === 2) {
                    stageMed = 11;
                }
                select = 0;
                break;
            //47
            case 5:
                options = 2;
                drawMorgue();
                drawBigTextBox(images[75]);
                drawTwoOptions(med11, med12);
                if (select === 1) {
                    stageMed = 12;
                }
                if (select === 2) {
                    stageMed = 13;
                }
                select = 0;
                break;
            //41
            case 6:
                options = 1;
                drawRecords();
                drawOneOption("Move On");
                drawBigTextBox(images[69]);
                if (select === 1) {
                    stageMed = 14;
                }
                select = 0;
                break;
            //42
            case 7:
                options = 1;
                drawRecords();
                drawOneOption("Move On");
                drawBigTextBox(images[70]);
                if (select === 1) {
                    stageMed = 15;
                }
                select = 0;
                break;
            //43
            case 8:
                options = 1;
                drawTable();
                drawOneOption("Move On");
                drawBigTextBox(images[71]);
                if (select === 1) {
                    stageMed = 15;
                }
                select = 0;
                break;
            //44
            case 9:
                options = 1;
                drawTable();
                drawOneOption("Move On");
                drawBigTextBox(images[72]);
                if (select === 1) {
                    stageMed = 14;
                }
                select = 0;
                break;
            //46
            case 10:
                options = 1;
                drawSamples();
                drawOneOption("Move On");
                drawBigTextBox(images[74]);
                if (select === 1) {
                    stageMed = 14;
                }
                select = 0;
                break;
            //47
            case 11:
                options = 1;
                drawSamples();
                drawOneOption("Move On");
                drawBigTextBox(images[75]);
                if (select === 1) {
                    stageMed = 15;
                }
                select = 0;
                break;
            //49
            case 12:
                options = 1;
                drawMorgue();
                drawOneOption("Move On");
                drawBigTextBox(images[77]);
                if (select === 1) {
                    stageMed = 15;
                }
                select = 0;
                break;
            //50
            case 13:
                options = 1;
                drawMorgue();
                drawOneOption("Move On");
                drawBigTextBox(images[78]);
                if (select === 1) {
                    stageMed = 14;
                }
                select = 0;
                break;
            //Alien
            case 14:
                options = 1;
                drawMedBay();
                drawOneOption("Return to Corridor");
                drawBigTextBox(images[79]);
                if (select === 1){
                    start = 3;
                    medDone = true;
                }
                break;
            //Conspiracy
            case 15:
                options = 1;
                drawMedBay();
                drawOneOption("Return to Corridor");
                drawBigTextBox(images[80]);
                if (select === 1){
                    start = 3;
                    medDone = true;
                    conspiracy++;
                }
                break;

        }

    }

    function navQuarters() {
        switch (stageSleep) {
            case 0:
                options = 3;
                drawQuarters();
                drawBigTextBox(images[27]);
                drawThreeOptions(sleep1, sleep2, sleep3);
                if (select === 1) {
                    stageSleep = 1;
                }
                if (select === 2) {
                    stageSleep = 2;
                }
                if (select === 3) {
                    stageSleep = 3;
                }
                select = 0;
                break;
            case 1:
                options = 2;
                drawJournal();
                drawBigTextBox(images[27]);
                drawTwoOptions(sleep4, sleep5);
                if (select === 1) {
                    stageSleep = 4;
                }
                if (select === 2) {
                    stageSleep = 5;
                }
                select = 0;
                break;
            case 2:
                options = 1;
                drawTrunk();
                drawOneOption(sleep6);
                if (select === 1) {
                    stageSleep = 6;
                }
                select = 0;
                break;
            case 3:
                options = 1;
                drawJournal();
                drawOneOption(sleep7);
                if (select === 1) {
                    stageSleep = 7;
                }
                select = 0;
                break;
            //53
            case 4:
                options = 1;
                drawJournal();
                drawBigTextBox(images[81]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageSleep = 9;
                }
                select = 0;
                break;
            //54
            case 5:
                options = 1;
                drawJournal();
                drawBigTextBox(images[82]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageSleep = 8;
                }
                select = 0;
                break;
            //55
            case 6:
                options = 1;
                drawTrunk();
                drawBigTextBox(images[83]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageSleep = 8;
                }
                select = 0;
                break;
            //56
            case 7:
                options = 1;
                drawJournal();
                drawBigTextBox(images[84]);
                drawOneOption("Move On");
                if (select === 1) {
                    stageSleep = 9;
                }
                select = 0;
                break;
            //Alien
            case 8:
                options = 1;
                drawQuarters();
                drawBigTextBox(images[85]);
                drawOneOption("Return to Corridor");
                if(select === 1){
                    start = 3;
                    sleepDone = true;
                }
                break;
            //Conspiracy
            case 9:
                options = 1;
                drawQuarters();
                drawBigTextBox(images[86]);
                drawOneOption("Return to Corridor");
                if(select === 1){
                    start = 3;
                    sleepDone = true;
                    conspiracy++;
                }
                break;
        }
    }

    function navAlien() {
        switch (stageAlien) {
            //61
            case 0:
                options = 1;
                drawIntersection();
                drawOneOption("Continue");
                drawBigTextBox(images[89]);
                if (select === 1) {
                    stageAlien = 1;
                }
                select = 0;
                break;
            //63
            case 1:
                options = 2;
                drawVent();
                drawTwoOptions(alien1, alien2);
                drawBigTextBox(images[91]);
                if (select === 1) {
                    stageAlien = 2;
                }
                if (select === 2) {
                    stageAlien = 3;
                }
                select = 0;
                break;
            //64
            case 2:
                options = 2;
                drawVent();
                drawBigTextBox(images[92]);
                drawTwoOptions(alien3, alien4);
                if (select === 1) {
                    stageAlien = 4;
                }
                if (select === 2) {
                    stageAlien = 5;
                }
                select = 0;
                break;
            //69
            case 3:
                options = 2;
                drawMessHall();
                drawBigTextBox(images[97]);
                drawTwoOptions(alien5, alien6);
                if (select === 1) {
                    stageAlien = 7;
                }
                if (select === 2) {
                    stageAlien = 8;
                }
                select = 0;
                break;
            //65
            case 4:
                options = 1;
                drawAlien();
                drawOneOption("Continue");
                drawBigTextBox(images[93]);
                if (select === 1) {
                    start = 9;
                }
                select = 0;
                break;
            //66
            case 5:
                options = 1;
                drawKitchen();
                drawOneOption("Continue");
                drawBigTextBox(images[94]);
                if (select === 1) {
                    stageAlien = 6;
                }
                select = 0;
                break;
            //67
            case 6:
                options = 1;
                drawIntersection();
                drawOneOption("Continue");
                drawBigTextBox(images[95]);
                if (select === 1) {
                    stageAlien = 17;
                }
                select = 0;
                break;
            //70
            case 7:
                options = 1;
                drawMessHall();
                drawOneOption("Continue");
                drawBigTextBox(images[98]);
                if (select === 1) {
                    stageAlien = 9;
                }
                select = 0;
                break;
            //71
            case 8:
                options = 1;
                drawMessHall();
                drawOneOption("Continue");
                drawBigTextBox(images[99]);
                if (select === 1) {
                    start = 9;
                }
                select = 0;
                break;
            //72
            case 9:
                options = 2;
                drawKitchen();
                drawTwoOptions(alien7, alien8);
                drawBigTextBox(images[100]);
                if (select === 1) {
                    stageAlien = 12;
                }
                if (select === 2) {
                    stageAlien = 13;
                }
                select = 0;
                break;
            //70
            case 10:
                options = 1;
                drawKitchen();
                drawOneOption("Continue");
                drawBigTextBox(images[98]);
                if (select === 1) {
                    stageAlien = 16;
                }
                break;
            //76
            case 11:
                options = 1;
                drawKitchen();
                drawOneOption("Continue");
                drawBigTextBox(images[104]);
                if (select === 1) {
                    stageAlien = 12;
                }
                select = 0;
                break;
            //73
            case 12:
                options = 1;
                drawKitchen();
                drawTwoOptions(alien9, alien10);
                drawBigTextBox(images[101]);
                if (select === 1) {
                    stageAlien = 14;
                }
                if (select === 2) {
                    stageAlien = 15;
                }
                select = 0;
                break;
            case 13:
            //74
            case 14:
                options = 1;
                drawGunshot();
                drawOneOption("Continue");
                drawBigTextBox(images[102]);
                if (select === 1) {
                    start = 10;
                }
                select = 0;
                break;
            //75
            case 15:
                options = 1;
                drawAlien();
                drawOneOption("Continue");
                drawBigTextBox(images[103]);
                if (select === 1) {
                    start = 10;
                }
                break;
            //71
            case 16:
                options = 1;
                drawKitchen();
                drawOneOption("Continue");
                drawBigTextBox(images[99]);
                if (select === 1) {
                    start = 10;
                }
                break;
            //68
            case 17:
                options = 1;
                drawAlien();
                drawOneOption("Continue");
                drawBigTextBox(images[96]);
                if (select === 1) {
                    start = 10;
                }
                break;



        }
    }

    function navConspiracy() {
        switch (stageCon) {
            //62
            case 0:
                options = 1;
                drawIntersection();
                drawOneOption("Continue");
                drawBigTextBox(images[90]);
                if (select === 1) {
                    stageCon = 1;
                }
                select = 0;
                break;
            //77
            case 1:
                options = 2;
                drawVent();
                drawTwoOptions(con1,con2);
                drawBigTextBox(images[105]);
                if (select === 1) {
                    stageCon = 2;
                }
                if (select ===2){
                    stageCon = 3;
                }
                select = 0;
                break;
            //78
            case 2:
                options = 2;
                drawBoiler();
                drawTwoOptions(con3,con4);
                drawBigTextBox(images[107]);
                if(select === 1){
                    stageCon = 4;
                }
                if(select === 2){
                    stageCon = 5;
                }
                select = 0;
                break;
            //93
            case 3:
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[125]);
                if(select === 1){
                    stageCon = 19;
                }
                select = 0;
                break;
            //79
            case 4:
                options = 2;
                drawBoiler();
                drawTwoOptions(con5,con6);
                drawBigTextBox(images[108]);
                if(select === 1){
                    stageCon = 6;
                }
                if(select === 2){
                    stageCon = 7;
                }
                select = 0;
                break;
            //85 p 1
            case 5:
                options = 1;
                drawBoiler();
                drawOneOption("Continue");
                drawBigTextBox(images[116]);
                if(select === 1){
                    stageCon = 17;
                }
                select = 0;
                break;
            //80
            case 6:
                options = 1;
                drawBoiler();
                drawOneOption("Continue");
                drawBigTextBox(images[109]);
                if(select === 1){
                    stageCon = 8;
                }
                select = 0;
                break;
            //83
            case 7:
                //83->84
                options = 1;
                drawBoiler();
                drawOneOption("Continue");
                drawBigTextBox(images[114]);
                if(select === 1){
                    stageCon = 10;
                }
                select = 0;
                break;
            //81
            case 8:
                options = 2;
                drawBoiler();
                drawTwoOptions(con7,con8);
                drawBigTextBox(images[110]);
                if(select === 1){
                    stageCon = 9;
                }
                if(select === 2){
                    stageCon = 9;
                }
                select = 0;
                break;
            //82
            case 9:
                options = 1;
                drawExplosion();
                drawOneOption("Continue");
                drawBigTextBox(images[111]);
                if(select === 1){
                    start = 10;
                }
                select = 0;
                break;
            //84
            case 10:
                options = 1;
                drawExplosion();
                drawOneOption("Continue");
                drawBigTextBox(images[115]);
                if(select === 1){
                    start = 10;
                }
                select = 0;
                break;
            //86
            case 11:
                options = 1;
                drawHidingSpot();
                drawOneOption("Continue");
                drawBigTextBox(images[118]);
                if(select === 1){
                    stageCon = 13;
                }
                select = 0;
                break;
            //90
            case 12:
                //
                options = 1;
                drawGunshot();
                drawOneOption("Continue");
                drawBigTextBox(images[122]);
                if(select === 1){
                    stageCon = 16;
                }
                select = 0;
                break;
            //87
            case 13:
                options = 1;
                drawHidingSpot();
                drawOneOption("Continue");
                drawBigTextBox(images[119]);
                if(select === 1){
                    stageCon = 14;
                }
                select = 0;
                break;
            //88
            case 14:
                options = 1;
                drawHidingSpot();
                drawOneOption("Continue");
                drawBigTextBox(images[120]);
                if(select === 1){
                    stageCon = 15;
                }
                select = 0;
                break;
            //89
            case 15:
                options = 1;
                drawHidingSpot();
                drawOneOption("Continue");
                drawBigTextBox(images[121]);
                if(select === 1){
                    start = 9;
                }
                select = 0;
                break;
            //91
            case 16:
                //
                options = 1;
                drawHolo();
                drawBigTextBox(images[123]);
                drawOneOption("Continue");
                if(select === 1){
                    stageCon = 18;
                }
                select = 0;
                break;
            //85 p 2
            case 17:
                options = 2;
                drawTwoOptions(con9,con10);
                drawBigTextBox(images[117]);
                if(select === 1){
                    stageCon = 11;
                }
                if(select === 2){
                    stageCon = 12;
                }
                select = 0;
                break;
            //92
            case 18:
                options = 1;
                drawExplosion();
                drawBigTextBox(images[124]);
                drawOneOption("Continue");
                if(select === 1){
                    start = 10;
                }
                select = 0;
                break;
            //94
            case 19:
                //
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[126]);
                if(select === 1){
                    stageCon = 20;
                }
                select = 0;
                break;
            //95
            case 20:
                options = 2;
                drawSecretRoom();
                drawTwoOptions(con11,con12);
                drawBigTextBox(images[127]);
                if(select === 1){
                    stageCon = 21;
                }
                if(select === 2){
                    stageCon = 22;
                }
                select = 0;
                break;
            //96
            case 21:
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[128]);
                if(select === 1){
                    stageCon = 23;
                }
                select = 0;
                break;
            //99
            case 22:
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[131]);
                if(select === 1){
                    stageCon = 25;
                }
                select = 0;
                break;
            //97
            case 23:
                options = 2;
                drawHolo();
                drawTwoOptions(con13,con14);
                drawBigTextBox(images[129]);
                if(select === 1){
                    stageCon = 24;
                }
                if(select === 2){
                    stageCon = 24;
                }
                select = 0;
                break;
            //98
            case 24:
                options = 1;
                drawExplosion();
                drawOneOption("Continue");
                drawBigTextBox(images[130]);
                if(select === 1){
                    start = 10;
                }
                select = 0;
                break;
            //100
            case 25:
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[132]);
                if(select === 1){
                    stageCon = 26;
                }
                select = 0;
                break;
            //101
            case 26:
                options = 1;
                drawSecretRoom();
                drawOneOption("Continue");
                drawBigTextBox(images[133]);
                if(select === 1){
                    start = 9;
                }
                select = 0;
                break;

        }
    }

        function selectFourOptions() {
            //TOP LEFT
            if ((moveX > 30) && (moveX < 431)) {
                if ((moveY > 10) && (moveY < 91)) {
                    console.log("Top Left");
                    select = 1;
                }
            }
            //TOP RIGHT
            if ((moveX > 450) && (moveX < 851)) {
                if ((moveY > 10) && (moveY < 91)) {
                    console.log("Top Right");
                    select = 2;
                }
            }
            //BOTTOM LEFT
            if ((moveX > 30) && (moveX < 431)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Left");
                    select = 3;
                }
            }
            //BOTTOM RIGHT
            if ((moveX > 450) && (moveX < 851)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Right");
                    select = 4;
                }
            }

        }//

        function selectThreeOptions() {

            //TOP
            if ((moveX > 230) && (moveX < 631)) {
                if ((moveY > 10) && (moveY < 91)) {
                    console.log("Top");
                    select = 1;
                }
            }

            //BOTTOM LEFT
            if ((moveX > 30) && (moveX < 431)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Left");
                    select = 2;
                }
            }
            //BOTTOM RIGHT
            if ((moveX > 450) && (moveX < 851)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Right");
                    select = 3;
                }
            }

        }//

        function selectTwoOptions() {


            //BOTTOM LEFT
            if ((moveX > 30) && (moveX < 431)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Left");
                    select = 1;
                }
            }
            //BOTTOM RIGHT
            if ((moveX > 450) && (moveX < 851)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom Right");
                    select = 2;
                }
            }

        }//

        function selectOneOption() {
            //BOTTOM
            if ((moveX > 230) && (moveX < 631)) {
                if ((moveY > 500) && (moveY < 581)) {
                    console.log("Bottom");
                    select = 1;
                }
            }

        }//

        //For initial testing purposes only
        function selectSideBar() {
            //HOME BUTTON
            if ((moveX > 40) && (moveX < 121)) {
                if ((moveY > 130) && (moveY < 211)) {
                    stage = 1;
                }
            }


        }


        //---------------------EVENTS/LISTENERS-----------------------------

        theCanvas.addEventListener("click", eventClick, false);
        theCanvas.addEventListener("mousemove", eventMouseMove, false);

        function eventClick(e) {
            //   selectSideBar();
            if (options === 1) {
                selectOneOption();
            } else if (options === 2) {
                selectTwoOptions();
            } else if (options === 3) {
                selectThreeOptions();
            } else if (options === 4) {
                selectFourOptions();
            } else {
                selectOneOption();
            }


        }//


        function eventMouseMove(e) {

            console.log("Mouse: " + e.offsetX + ", " + e.offsetY);

            //gets true mouse position
            moveX = e.offsetX;
            moveY = e.offsetY;

        }//

        //draw the canvas

        function drawCanvas() {

            //clear the canvas
            clearCanvas(canvasColor);

            if (start === 0) {
                options = 1;
                drawTitle();
                drawOneOption("BEGIN");
                if (select === 1) {
                    start = 1;
                }
                select = 0;
            }
            if (start === 1) {
                options = 1;
                drawTitle();
                drawBigTextBox(images[24]);
                drawOneOption("Continue");
                if (select === 1) {
                    start = 2;
                }
                select = 0;
            }
            if (start === 2) {
                options = 1;
                drawTitle();
                drawBigTextBox(images[25]);
                drawOneOption("Continue");
                if (select === 1) {
                    start = 3;
                }
                select = 0;
            }
            if (start === 3) {
                if ((sleepDone !== false) && (bridgeDone !== false) && (medDone !== false)) {
                    if (conspiracy < 2) {
                        start = 7;
                    } else {
                        start = 8;
                    }
                } else {
                    drawIntersection();
                    options = 3;
                    drawBigTextBox(images[26]);
                    drawThreeOptions(start1, start2, start3);
                    if (select === 1) {
                        if (bridgeDone === false) {
                            start = 4;
                        }
                    }
                    if (select === 2) {
                        if (medDone === false) {
                            start = 5;
                        }
                    }
                    if (select === 3) {
                        if (sleepDone === false) {
                            start = 6;
                        }
                    }
                }
                select = 0;
            }
            if (start === 4) {
                navBridge();
                select = 0;
            }
            if (start === 5) {
                navMedBay();
                select = 0;
            }
            if (start === 6) {
                navQuarters();
                select = 0;
            }
            if (start === 7) {
                navAlien();
                select = 0;
            }
            if (start === 8) {
                navConspiracy();
                select = 0;
            }
            if (start === 9) {
                drawTitle();
                drawOneOption("THE END!");
            }
            if (start === 10) {
                drawTitle();
                drawOneOption("THE END! Or is it...");
            }

        }//



    // clear canvas
    function clearCanvas( ) {

        //Set fill style
        context.fillStyle = canvasColor;

        //Fill canvas with color
        context.fillRect(0, 0, canvasWidth , canvasHeight);

    }//


    var frameCounter = 0;

    function loop() {
        requestAnimationFrame(loop);
        frameCounter++;
        drawCanvas();
    }//

    //load the images
    loadImages( images, imagesSource, function(images) {
        // draw the canvas
        loop();
    });


}