<Freeinternship>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sekhawati Old Papers - Years</title>
    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #6200ea;
            color: white;
            text-align: center;
            padding: 1.5em 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .year-block, .semester-block {
            border-radius: 10px;
            padding: 0px;
            margin: 15px;
            width: calc(33% - 30px); /* 33% width minus margin for 3 columns layout */
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            background: #ffffff;
            color: #333;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .semester-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .semester-block {
            width: calc(50% - 30px); /* 50% width for 2 columns layout */
        }

        .year-block:hover, .semester-block:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .year-block h2, .semester-block h3 {
            font-size: 1.5em;
            margin-bottom: 20px;
        }

        .subjects {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .subject-button {
    background: transparent; /* Changed button color to transparent */
    border: 2px solid #ffffff; /* Adding border for visibility */
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    color: #ffffff; /* Text color */
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.subject-button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    color: white; /* Text color on hover */
    background-color: #6200ea; /* Background color on hover */

        }

        /* Different colors for each year block */
        #year-2019-20 { background: linear-gradient(45deg, #2196F3, #21CBF3); }
        #year-2020-21 { background: linear-gradient(45deg, #66BB6A, #43A047); }
        #year-2021-22 { background: linear-gradient(45deg, #FF7043, #FF5722); }
        #year-2022-23 { background: linear-gradient(45deg, #AB47BC, #8E24AA); }


        /* Different colors for each semester block */
        #semester-2023-24-1 { background: linear-gradient(45deg, #FFEB3B, #FBC02D); }
        #semester-2023-24-2 { background: linear-gradient(45deg, #EC407A, #D81B60); }
        #semester-2024-25-1 { background: linear-gradient(45deg, #26A69A, #00796B); }
        #semester-2024-25-2 { background: linear-gradient(45deg, #FFA726, #FB8C00); }

        @media (max-width: 1200px) {
            .year-block {
                width: calc(50% - 30px); /* 2 columns layout */
            }

            .semester-block {
                width: calc(100% - 30px); /* 1 column layout */
            }
        }

        @media (max-width: 900px) {
            .year-block {
                width: calc(100% - 30px); /* 1 column layout */
            }

            .semester-block {
                width: calc(100% - 30px); /* 1 column layout */
            }
        }

        footer {
            text-align: center;
            padding: 1em 0;
            background-color: #6200ea;
            color: white;
            box-shadow: 0 -4px 8px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <header>
        <h1>Sekhawati Old Papers</h1>
        <p>Access Previous exam papers by year and semester</p>
    </header>
    <main>
        <div class="container">
            <!-- Year blocks from 2019 to 2022 -->
            <div class="year-block" id="year-2019-20">
                <h2>2019-20</h2>
                <div class="subjects">
                    <button class="subject-button">Subject 1</button>
                    <button class="subject-button">Subject 2</button>
                    <button class="subject-button">Subject 3</button>
                    <button class="subject-button">Subject 4</button>
                    <button class="subject-button">Subject 5</button>
                    <button class="subject-button">Subject 6</button>
                </div>
            </div>
            <div class="year-block" id="year-2020-21">
                <h2>2020-21</h2>
                <div class="subjects">
                    <button class="subject-button">Subject 1</button>
                    <button class="subject-button">Subject 2</button>
                    <button class="subject-button">Subject 3</button>
                    <button class="subject-button">Subject 4</button>
                    <button class="subject-button">Subject 5</button>
                    <button class="subject-button">Subject 6</button>
                </div>
            </div>
            <div class="year-block" id="year-2021-22">
                <h2>2021-22</h2>
                <div class="subjects">
                    <button class="subject-button">Subject 1</button>
                    <button class="subject-button">Subject 2</button>
                    <button class="subject-button">Subject 3</button>
                    <button class="subject-button">Subject 4</button>
                    <button class="subject-button">Subject 5</button>
                    <button class="subject-button">Subject 6</button>
                </div>
            </div>
            <div class="year-block" id="year-2022-23">
                <h2>2022-23</h2>
                <div class="subjects">
                    <button class="subject-button">Subject 1</button>
                    <button class="subject-button">Subject 2</button>
                    <button class="subject-button">Subject 3</button>
                    <button class="subject-button">Subject 4</button>
                    <button class="subject-button">Subject 5</button>
                    <button class="subject-button">Subject 6</button>
                </div>
            </div>

            <!-- Year blocks for 2023 and 2024 with semesters -->
            <div class="year-block">
                <h2>2023-24</h2>
                <div class="semester-container">
                    <div class="semester-block" id="semester-2023-24-1">
                        <h3>Semester 1</h3>
                        <div class="subjects">
                            <button class="subject-button">Subject 1</button>
                            <button class="subject-button">Subject 2</button>
                            <button class="subject-button">Subject 3</button>
                            <button class="subject-button">Subject 4</button>
                            <button class="subject-button">Subject 5</button>
                            <button class="subject-button">Subject 6</button>
                        </div>
                    </div>
                    <div class="semester-block" id="semester-2023-24-2">
                        <h3>Semester 2</h3>
                        <div class="subjects">
                            <button class="subject-button">Subject 1</button>
                            <button class="subject-button">Subject 2</button>
                            <button class="subject-button">Subject 3</button>
                            <button class="subject-button">Subject 4</button>
                            <button class="subject-button">Subject 5</button>
                            <button class="subject-button">Subject 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="year-block">
                <h2>2024-25</h2>
                <div class="semester-container">
                    <div class="semester-block" id="semester-2024-25-1">
                        <h3>Semester 1</h3>
                        <div class="subjects">
                            <button class="subject-button">Subject 1</button>
                            <button class="subject-button">Subject 2</button>
                            <button class="subject-button">Subject 3</button>
                            <button class="subject-button">Subject 4</button>
                            <button class="subject-button">Subject 5</button>
                            <button class="subject-button">Subject 6</button>
                        </div>
                    </div>
                    <div class="semester-block" id="semester-2024-25-2">
                        <h3>Semester 2</h3>
                        <div class="subjects">
                            <button class="subject-button">Subject 1</button>
                            <button class="subject-button">Subject 2</button>
                            <button class="subject-button">Subject 3</button>
                            <button class="subject-button">Subject 4</button>
                            <button class="subject-button">Subject 5</button>
                            <button class="subject-button">Subject 6</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Sekhawati Old Papers. All rights reserved.</p>
    </footer>
</body>
</html>
