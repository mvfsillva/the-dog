export const formatId = dog => {
  const regex = /(^.*)\/(.*)?\..{3,}$/g
  return regex.exec(dog)[2]
}
