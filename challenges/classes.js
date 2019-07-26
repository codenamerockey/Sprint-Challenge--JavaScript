// 1. Copy and paste your prototype in here and refactor into class syntax.

class SecondCuboidMaker {
  // not able to reuse CuboidMaker as a class name
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  /* Formula for cuboid volume: length * width * height*/
  volume() {
    return this.length * this.width * this.height;
  }

  /*Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
   */
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new SecondCuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('Class Cuboid Volume is', cuboid2.volume()); // 100
console.log('Class Cuboid Surface Area is', cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends SecondCuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  }

  cubeVolume() {
    //Formula for volume of a cube is L x W x H
    return this.length * this.width * this.height;
  }

  cubeSurfaceArea() {
    //formula for the surface area of a cube is l X W * number of sides which is 6
    return this.length * this.width * 6;
  }
}

const cubeResults = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

console.log('The Volume of a Cube is', cubeResults.volume()); // 125
console.log('The Surface area of a Cube is', cubeResults.cubeSurfaceArea()); // 150
