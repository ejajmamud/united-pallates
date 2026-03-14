import {
    ArrowRight,
    BadgeDollarSign,
    Boxes,
    Building2,
    ClipboardList,
    Factory,
    Facebook,
    Globe2,
    HandCoins,
    Linkedin,
    Mail,
    MapPinned,
    MessageCircle,
    Package,
    Phone,
    Recycle,
    ShieldCheck,
    Truck
} from "lucide/dist/esm/lucide.js";

const iconMap = {
    arrowRight: ArrowRight,
    badgeDollarSign: BadgeDollarSign,
    boxes: Boxes,
    building2: Building2,
    clipboardList: ClipboardList,
    factory: Factory,
    facebook: Facebook,
    globe2: Globe2,
    handCoins: HandCoins,
    linkedin: Linkedin,
    mail: Mail,
    mapPinned: MapPinned,
    messageCircle: MessageCircle,
    package: Package,
    phone: Phone,
    recycle: Recycle,
    shieldCheck: ShieldCheck,
    truck: Truck
};

export function icon(name, attrs = {}) {
    const Icon = iconMap[name];
    if (!Icon) return "";

    const svgAttrs = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 1.9,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "icon-stroke",
        ...attrs
    };

    const attrString = Object.entries(svgAttrs)
        .map(([key, value]) => `${key}="${String(value)}"`)
        .join(" ");

    const children = Icon.map(([tag, tagAttrs]) => {
        const childAttrs = Object.entries(tagAttrs)
            .map(([key, value]) => `${key}="${String(value)}"`)
            .join(" ");
        return `<${tag} ${childAttrs}></${tag}>`;
    }).join("");

    return `<svg ${attrString}>${children}</svg>`;
}
