import Link from "next/link"

interface ILink {
    title: string,
    href: string,
    arrow: 'back'| 'forward'| 'outward'
}

const CostumLink = ({title, href, arrow}: ILink) => {
    switch(arrow) {
        case 'back':
            return (
                <Link href={{href}} className="flex items-center text-primary gap-1 font-medium">
                    <span className="material-symbols-outlined">arrow_{arrow}</span>
                    <p>{title}</p>
                </Link>
              )
        case 'forward': 
        case 'outward':
            return (
                <Link href={{href}} className="flex items-center text-primary gap-1 font-medium">
                    <p>{title}</p>
                    <span className="material-symbols-outlined">arrow_{arrow}</span>
                </Link>
              )
    }
}

export default CostumLink