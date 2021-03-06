import React from 'react'
import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList as MuiMenuList,
} from '@mui/material'
import { Link } from './Link'

export const MenuList = (props) => {
	const {
		items,
		onSelect,
	} = props

	return (
		<MuiMenuList>
			{items.map(item =>
				<Link key={item.label} href={item.href}>
					<MenuItem
						onClick={onSelect}
						divider
						sx={{ height: (theme) => theme.spacing(6) }}
					>
						<ListItemIcon>
							{item.icon}
						</ListItemIcon>
						<ListItemText primary={item.label} />
					</MenuItem>
				</Link>
			)}
		</MuiMenuList>
	)
}