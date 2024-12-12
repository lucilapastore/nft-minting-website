import { client } from "@/app/client"
import { ConnectButton, lightTheme } from "thirdweb/react"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">NFT Project</div>
          {/*<Button>Connect Wallet</Button>*/}
          <ConnectButton client={client} 
          theme={lightTheme()}
          connectButton={{
            label: "Connect wallet"
          }}/>
        </div>
      </div>
    </nav>
  )
}


