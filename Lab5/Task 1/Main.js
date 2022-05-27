//1
 function FisrtTask() {
    let x = 6,
      y = 15,
      z = 4
    x += y - x++ * z
    console.log('x= ', x)
    z = --x - y * 5
    console.log('z= ', z)
    y /= x + (5 % z)
    console.log('y= ', y)
    z = x++ + y * 5
    console.log('z= ', z)
    x = y - x++ * z
    console.log('x= ', x)
  }
//FirstTask()
