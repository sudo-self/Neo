let animation;

const delay = time => new Promise(r => setTimeout(r, time));

const animate = async () => {
    animation = true;
  
    term.clear().set_prompt('');
    await term.set_prompt('Wake up...NEO', { typing: true });
    await delay(5000);
    term.set_prompt('');
    await term.set_prompt('The Matrix has you...', { typing: true });
    await delay(5000);
    term.set_prompt('');
    await term.set_prompt('Follow the white rabbit.', { typing: true });
    await delay(5000);
    term.set_prompt('Knock, knock, NEO.');
    await delay(5000);
    term.set_prompt('');
    animation = false;
};

const unasync = function(fn) {
    return () => {
        fn();
    };
};

const term = $('body').terminal(unasync(animate), {
    prompt: '',
    greetings: false,
    keydown: () => animation ? false : undefined
});

animate();

