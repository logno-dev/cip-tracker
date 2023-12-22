let chiller = [
  {
    type: "cip",
    time: new Date("2023-12-22T08:30:00"),
  }
]

let t2000 = []

function cipEvent(target, type) {
  console.log(checkStatus(target, type))
  target.push({
    type,
    time: new Date()
  })
}

function checkStatus(target, type) {
  if (target.length < 2) return
  if (
    target[target.length - 1].type === type &&
    target[target.length - 2].type === type ||
    type !== target[target.length - 1].type
  ) {
    return "CIP needed"
  }
  return "CIP not needed"
}

cipEvent(t2000, "sb")
cipEvent(t2000, "sb")
cipEvent(t2000, "vege")
cipEvent(t2000, "sb")
cipEvent(t2000, "sb")
cipEvent(t2000, "sb")

