module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let name = members.map(team => {
    if (typeof team == 'string'){
      return team.trim().charAt(0).toUpperCase( )
    }
  })

  return name.sort().join("")
};
