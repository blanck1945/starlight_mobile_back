
const getRes = (routeMsg, routeData = "", routeId = "", pageTitle = "Shouko Kageki Revue Starlight") => {
    const msg = {
        provider: "Express - Sequelize",
        application: "Shoujo Kageki Revue Starligth RE:Live",
        state: "Fullfiled",
        msg: routeMsg,
        data: routeData,
        query: routeId,
        window_title: pageTitle,
        time_stamp: Date.now()
    }
    return msg
}

const exludeTimeStamps = () => {

}

module.exports = getRes