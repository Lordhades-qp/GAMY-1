<h1 style="text-align: center;">GAMY-1</h1>
<p style="text-align: center; font-size: 18px;">
    <strong>THE FIRST GAME OF GAMY PRODUCTION</strong><br>
    CODED BY <span style="color: #3498db;">ARIMA</span>
</p>


------------


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GAMY-1</title>
    <style>
        body {
            background: black;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        .container {
            text-align: center;
            position: relative;
        }

        h1 {
            font-size: 3rem;
            text-transform: uppercase;
            letter-spacing: 5px;
            position: relative;
            z-index: 10;
            color: white;
        }

        p {
            font-size: 1.5rem;
            margin: 10px 0;
            position: relative;
            z-index: 10;
            color: #3498db;
        }

        /* Motifs lumineux */
        .lights {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%);
            animation: moveLights 5s linear infinite;
            z-index: 1;
        }

        @keyframes moveLights {
            0% {
                transform: translate(-200px, -200px) scale(1);
            }
            50% {
                transform: translate(200px, 200px) scale(1.5);
            }
            100% {
                transform: translate(-200px, -200px) scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="lights"></div>
        <h1>GAMY-1</h1>
        <p>THE FIRST GAME OF GAMY PRODUCTION</p>
        <p>CODED BY ARIMA</p>
    </div>
</body>
</html>
