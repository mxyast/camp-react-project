import React from 'react'
import { Dropdown, Image, DropdownMenu, MenuItem } from 'semantic-ui-react'

export default function SignedIn({singOut}) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ANLem4aJkHudjH59dk9dAbjQf6YJW-V73154e5SkeHwKtw=s32-c-mo" />
                <Dropdown pointing="top right" text='ilyas'>
                    <DropdownMenu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={singOut} text="Çıkış yap" icon="sing-out" />
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
