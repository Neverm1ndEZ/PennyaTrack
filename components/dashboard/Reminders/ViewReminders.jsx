import { PencilIcon } from "@heroicons/react/24/solid";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	IconButton,
	Tooltip,
	Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
	"Transaction",
	"Amount",
	"Date",
	"Status",
	"Type",
	"Account",
	"",
];

const TABLE_ROWS = [
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
		name: "Spotify",
		amount: "$2,500",
		date: "Wed 3:00pm",
		status: "paid",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
		name: "Amazon",
		amount: "$5,000",
		date: "Wed 1:00pm",
		status: "paid",
		account: "master-card",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
		name: "Pinterest",
		amount: "$3,400",
		date: "Mon 7:40pm",
		status: "pending",
		account: "master-card",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
		name: "Google",
		amount: "$1,000",
		date: "Wed 5:00pm",
		status: "paid",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
		name: "netflix",
		amount: "$14,000",
		date: "Wed 3:30am",
		status: "cancelled",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
		name: "Spotify",
		amount: "$2,500",
		date: "Wed 3:00pm",
		status: "paid",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
		name: "Amazon",
		amount: "$5,000",
		date: "Wed 1:00pm",
		status: "paid",
		account: "master-card",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
		name: "Pinterest",
		amount: "$3,400",
		date: "Mon 7:40pm",
		status: "pending",
		account: "master-card",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
		name: "Google",
		amount: "$1,000",
		date: "Wed 5:00pm",
		status: "paid",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
	{
		img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
		name: "netflix",
		amount: "$14,000",
		date: "Wed 3:30am",
		status: "cancelled",
		account: "visa",
		accountNumber: "1234",
		expiry: "06/2026",
		type: "Debit",
	},
];

export function ViewReminders() {
	return (
		<Card className="h-screen w-[96%] bg-[#1d1d1d]">
			<CardHeader
				floated={false}
				shadow={false}
				className="rounded-none bg-[#1d1d1d] text-light-green-500"
			>
				<div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center ">
					<Typography variant="h4" color="light-green">
						Recent Budget
					</Typography>
					<Typography color="light-green" className="mt-1 font-normal">
						These are details about the last transactions
					</Typography>
				</div>
			</CardHeader>
			<CardBody className="overflow-scroll px-0">
				<table className="w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="border-y border-blue-gray-100 bg-slate-600 p-4"
								>
									<Typography
										variant="h6"
										color="white"
										className="font-normal leading-none opacity-80"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(
							(
								{
									img,
									name,
									amount,
									date,
									status,
									account,
									accountNumber,
									expiry,
									type,
								},
								index,
							) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";

								return (
									<tr key={name}>
										<td className={classes}>
											<div className="flex items-center gap-3">
												<Avatar
													src={img}
													alt={name}
													size="md"
													className="border border-blue-gray-50 object-contain p-1"
												/>
												<Typography
													variant="small"
													color="white"
													className="font-bold"
												>
													{name}
												</Typography>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="white"
												className="font-normal"
											>
												{amount}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="white"
												className="font-normal"
											>
												{date}
											</Typography>
										</td>
										<td className={classes}>
											<div className="w-max">
												<Chip
													size="sm"
													variant="ghost"
													value={status}
													color={
														status === "paid"
															? "light-green"
															: status === "pending"
															? "amber"
															: "red"
													}
												/>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="white"
												className="font-normal"
											>
												{type}
											</Typography>
										</td>
										<td className={classes}>
											<div className="flex items-center gap-3">
												<div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
													<Avatar
														src={
															account === "visa"
																? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
																: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
														}
														size="sm"
														alt={account}
														variant="square"
														className="h-full w-full object-contain p-1"
													/>
												</div>
												<div className="flex flex-col">
													<Typography
														variant="small"
														color="white"
														className="font-normal capitalize"
													>
														{account.split("-").join(" ")} {accountNumber}
													</Typography>
													<Typography
														variant="small"
														color="white"
														className="font-normal opacity-70"
													>
														{expiry}
													</Typography>
												</div>
											</div>
										</td>
										<td className={classes}>
											<Tooltip content="Edit User">
												<IconButton variant="text" className="text-white">
													<PencilIcon className="h-4 w-4" />
												</IconButton>
											</Tooltip>
										</td>
									</tr>
								);
							},
						)}
					</tbody>
				</table>
			</CardBody>
			<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 text-white">
				<Button variant="outlined" size="sm" color="white">
					Previous
				</Button>
				<div className="flex items-center gap-2">
					<IconButton variant="outlined" size="sm" color="white">
						1
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						2
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						3
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						...
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						8
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						9
					</IconButton>
					<IconButton variant="text" size="sm" color="white">
						10
					</IconButton>
				</div>
				<Button variant="outlined" size="sm" color="white">
					Next
				</Button>
			</CardFooter>
		</Card>
	);
}
