let bool = false;

// operator()
const btn_division = document.querySelector('.button_division').addEventListener('click', () => input('/'));
const btn_multiplication = document.querySelector('.button_multiplication').addEventListener('click', () => input('*'));
const btn_subtraction = document.querySelector('.button_subtraction').addEventListener('click', () => input('-'));
const btn_addition = document.querySelector('.button_addition').addEventListener('click', () => input('+'));
const btn_equal = document.querySelector('.button_equal').addEventListener('click', () => result());

// number
let number = [];
for (let i = 0; i < 10; i++) {
    number[i] = document.querySelector(`.button_${i}`).addEventListener('click', () => input(`${i}`));
}

// others
const btn_allClear = document.querySelector('.button_ac').addEventListener('click', () => clear('ac'));
const btn_plusMinus = document.querySelector('.button_plus_minus').addEventListener('click', () => plusMinus());
const btn_percentage = document.querySelector('.button_percentage').addEventListener('click', () => input('%'));
const btn_clear = document.querySelector('.button_c').addEventListener('click', () => clear('c'));
const btn_comma = document.querySelector('.button_comma').addEventListener('click', () => input('.'));

// keyboard action
document.addEventListener('keydown', (event) => {
    if (event.key == 0) {
        input(0);
    }
    if (event.key == 1) {
        input(1);
    }
    if (event.key == 2) {
        input(2);
    }        
    if (event.key == 3) {
        input(3);
    }   
    if (event.key == 4) {
        input(4);
    }
    if (event.key == 5) {
        input(5);
    }    
    if (event.key == 6) {
        input(6);
    }    
    if (event.key == 7) {
        input(7);
    }
    if (event.key == 8) {
        input(8);
    }
    if (event.key == 9) {
        input(9);
    }
    if (event.key == '+') {
        input('+');
    }    
    if (event.key == '-') {
        input('-');
    }
    if (event.key == '/') {
        input('/');
    }
    if (event.key == '*') {
        input('*');
    }
    if (event.key == '%') {
        input('%');    
    }
    if (event.key == '.') {
        input('.');
    }
    if (event.key == '=') {
        result();
    }
    if (event.key == 'Enter') {
        result();
    }
    if (event.key == 'Backspace') {
        clear('c');
    }

});

// function
const input = (gain) => {
    const screen_value = document.querySelector('.screen').innerHTML;
    let value;

    if (screen_value == '0') {
        value = gain;
        document.querySelector('.screen').innerText = value;
    }
    else {
        if (gain == '%') {
            const result_percentage = screen_value/ 100;
            document.querySelector('.screen').innerText = result_percentage;
        }
        else if (gain == '.') {
            if (screen_value == '0') {
                value = '0.';
                document.querySelector('.screen').innerText = value;
            }
            else {
                value = screen_value + gain;
                document.querySelector('.screen').innerText = value;    
            }
        }
        else {
            value = screen_value + gain;
            document.querySelector('.screen').innerText = value;
        }
    }
};

const plusMinus = () => {
    let value = document.querySelector('.screen').innerText;

    if (value == '-') {
        document.querySelector('.screen').innerText = '0';
    }
    else if (value > 0) {
        value = `-${value}`;
        document.querySelector('.screen').innerText = value;
    }
    else if(value < 0) {
        value = value.slice(1);
        document.querySelector('.screen').innerText = value;
    }
};


const clear = (gain) => {
    if (gain == 'c') {
        const screen_value = document.querySelector('.screen').innerText;
        // if (screen_value == '0') {
        if (screen_value.length == 1 || isNaN(screen_value)) {
            document.querySelector('.screen').innerText = '0';
        }
        else {
            const value = document.querySelector('.screen').innerText;
            document.querySelector('.screen').innerText = value.slice(0, -1);
        }
    }
    if (gain == 'ac') {
        document.querySelector('.screen').innerText = '0';
    }
};

const result = () => {
    let value = document.querySelector('.screen').innerText;
    try {
        // document.querySelector('.screen').innerText = eval(value);
        // console.log(eval(value));

        const result = eval(value);
        // console.log(isNaN(value))
        if (!isNaN(result)) {
            document.querySelector('.screen').innerText = result;
        }
        else {
            document.querySelector('.screen').innerText = 'Invalid';
        }
    } catch (error) {
        document.querySelector('.screen').innerText = 'Invalid';
    }
};