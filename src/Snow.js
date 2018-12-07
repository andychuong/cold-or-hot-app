import React, { Component } from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import PropTypes from "prop-types"
import Random from "./Random"
export default class Snow extends Component {
  constructor(props) {
    super(props)

    this.x = Random.getRandomInt(this.props.width)
    this.y = Random.getRandomInt(this.props.height)

    this.angle =
      (Random.getRandomFloat(ANGLE_SEED) / ANGLE_SEED) * ANGE_RANGE +
      HALF_PI -
      HALF_ANGLE_RANGE
    this.increment = Random.getRandom(INCREMENT_LOWER, INCREMENT_UPPER)
    this.flakeSize = Random.getRandom(FLAKE_SIZE_LOWER, FLAKE_SIZE_UPPER)
    this.opacity = Math.random()
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => {
      this.move(this.props.width, this.props.height)
      this.forceUpdate()
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  move(width, height) {
    const x = this.x + this.increment * Math.cos(this.angle)
    const y = this.y + this.increment * Math.sin(this.angle)

    this.angle += Random.getRandom(-ANGLE_SEED, ANGLE_SEED) / ANGLE_DIVISOR

    this.x = x
    this.y = y

    if (!this.isInside(width, height)) {
      this.reset(width)
    }
  }

  isInside(width, height) {
    const x = this.x
    const y = this.y
    const flakeSize = this.flakeSize
    return (
      x >= -flakeSize - 1 &&
      x + flakeSize <= width &&
      y >= -flakeSize - 1 &&
      y - flakeSize < height
    )
  }

  reset(width) {
    const x = Random.getRandomInt(width)
    const y = -this.flakeSize - 1
    const angle =
      (Random.getRandomFloat(ANGLE_SEED) / ANGLE_SEED) * ANGE_RANGE +
      HALF_PI -
      HALF_ANGLE_RANGE

    this.x = x
    this.y = y
    this.angle = angle
  }

  getPosition() {
    return {
      top: this.y,
      left: this.x,
      width: this.flakeSize,
      height: this.flakeSize,
      borderRadius: this.flakeSize / 2,
      opacity: this.opacity
    }
  }

  render() {
    const snowShape = this.getPosition()

    return <View {...this.props} style={[styles.snow, snowShape]} />
  }
}
