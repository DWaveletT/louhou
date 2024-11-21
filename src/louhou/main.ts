const WIDTH  = 600;
const HEIGHT = 480;
const FPS = 60;

let total_frame = 0, timeOrigin = 0;

const entities = (() => {
    const result: { x: number, y: number, vx: number, vy: number }[] = [];
    for(let i = 0;i < 100;++ i){
        result.push({
            x: Math.random() *  WIDTH,
            y: Math.random() * HEIGHT,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5
        });
    }
    return result;
})();

function update(content: CanvasRenderingContext2D){
    content.clearRect(0, 0, WIDTH, HEIGHT);
    for(const entity of entities){
        content.fillRect(Math.floor(entity.x), Math.floor(entity.y), 10, 10);
        entity.x += entity.vx;
        entity.y += entity.vy;
        
        if(entity.x < 0) entity.x =  WIDTH;
        if(entity.y < 0) entity.y = HEIGHT;
        if(entity.x >  WIDTH) entity.x = 0;
        if(entity.y > HEIGHT) entity.y = 0;
    }
}

export function start(canvas: HTMLCanvasElement){
    const content = canvas.getContext("2d");
    if(!content){
        alert('浏览器版本过低，无法运行！');
        return;
    }
    timeOrigin = performance.now();
    const nextTick = () => {
        if(total_frame % 60 == 0){
            console.log(1000 * total_frame / (performance.now() - timeOrigin));
        }
        if(performance.now() - timeOrigin > 1000 / FPS * total_frame){
            update(content);
            total_frame = total_frame + 1;
        }
        requestAnimationFrame(nextTick);
    };

    nextTick();
}