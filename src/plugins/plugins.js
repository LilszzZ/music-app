import { Button, Icon, Swipe, SwipeItem, Popup } from 'vant';
let plugins = [
    Button, Icon, Swipe, SwipeItem, Popup
]

export default function uesVant(app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}

