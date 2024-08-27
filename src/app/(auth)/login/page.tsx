"use client"
import { useState } from 'react';
export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="login flex flex-col items-center h-[476px] w-[648px] rounded-[16px] border border-[1px] p-[60px] mt-[120px] ml-[396px]">
			<div className={`text-5xl mb-[32px]`}>Welcome to <span className="text-custom-purple">Kanban!</span></div>
			<input
				type="text"
				className="bg-input-background h-[56px] w-[528px] mb-[24px] rounded-[8px] pt-[16px] pb-[16px] pl-[12px] pr-[12px]"
				placeholder="Your email"
			/>
			<div className="relative w-[528px] mb-[22px]">
				<input
					type={showPassword ? "text" : "password"}
					className="bg-input-background h-[56px] w-full rounded-[8px] pt-[16px] pb-[16px] pl-[12px] pr-[12px]"
					placeholder="Password"
				/>
				<button
					type="button"
					onClick={togglePasswordVisibility}
					className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-gray-600"
				/>
			</div>
		</div>
	)
}
