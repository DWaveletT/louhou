interface HitboxRectangle {
    type: 'rectangle',
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
}

interface HitboxCircle {
    type: 'circle',
    dx: number,
    dy: number,
    radius: number,
}

type Hitbox = HitboxRectangle | HitboxCircle;

interface Entity {
    x: number,
    y: number,
    hitbox: Hitbox
};

interface Player extends Entity {
    bomb: number,
}

interface Bullet extends Entity {
    
}


export type { Entity, Player, Bullet };