import Link from "next/link"
import { Separator } from "./ui/separator"
import InfoDialog from "./InfoDialog"

const Footer = () => {
    return (
        <footer className="w-full">
            <Separator orientation='horizontal' className='w-full' />
            <div className="text-sm text-muted-foreground px-4 py-2 flex justify-between items-center">
                <p>
                    Created by {" "}
                    <Link href={"https://uskhokhar.me"} target="_blank" className="underline">
                        U.S.Khokhar
                    </Link>
                </p>
                <p className="text-right">Want to contribute? Checkout the {" "}
                    <Link href={"https://github.com/USKhokhar/devoss/blob/master/CONTRIBUTING.md"} target="_blank" className="underline">
                        Contribution Guidelines
                    </Link>
                    .
                </p>
            </div>
        </footer>
    )
}

export default Footer