"use client"

import AvailabilityIndicator from '@/components/AvailabilityIndicator';
import MagneticButton from '@/components/MagneticButton';
import SectionReveal from '@/components/SectionReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { profile } from '@/data/profile';
import { getCalApi } from '@calcom/embed-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";


const info = [
	{
		icon: <FaPhoneAlt />,
		title: 'Phone',
		description: profile.phone,
	},
	{
		icon: <FaEnvelope />,
		title: 'Email',
		description: profile.email,
	},
	{
		icon: <FaMapMarkedAlt />,
		title: 'Address',
		description: profile.location,
	},
];

const optionSchema = z.union([
    z.string(),
    z.object({
        value: z.string(),
        // label: z.string(),
    }).optional(),
]);

// form schema
const schema = z.object({
    firstName: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.coerce.number().min(1, 'Phone Number is required'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
    option: optionSchema,
});

// loading spinner for button
const Spinner = () => (
	<div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
);


const Contact = () => {
    // submit status
    const [submitStatus, setSubmitStatus] = useState(null)

    // Loading feature
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState: {errors}, reset, control } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);

        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        const templateParams = {
            from_name: `${data.firstName} ${data.lastName}`,
            from_email: data.email,
            to_name: "Olaoluwa Ajayi",
            message: data.message,
            phone: data.phone,
            option: data.option
        }
        try{
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log("Email sent successfully!", response);
            setSubmitStatus('Message sent successfully!');
            console.log(data)
            reset();
        } catch (error) {
            console.error('Error sending email', error);
            setSubmitStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
	};

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: '30min' });
            cal('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#0047FF' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

  return (
		<div className="container mx-auto py-8 xl:py-12 pb-24">
			<SectionReveal>
				<AvailabilityIndicator className="mb-6" />
				<h1 className="display text-[44px] xl:text-[80px] mb-16 max-w-3xl">
					Let&apos;s build something <span className="text-accent">exceptional</span>.
				</h1>
			</SectionReveal>

			<div className="flex flex-col xl:flex-row gap-[30px]">
				<SectionReveal delay={0.1} className="xl:w-[58%]" as="div">
					<form
						action=""
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-6 p-6 md:p-10 glass rounded-2xl"
					>
						<h2 className="h3 text-accent">{"Let's"} work together</h2>
						<p className="text-ink">
							Send me a mail or schedule a meeting through the {'"Book a call"'} button
						</p>
						{/* Inputs */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
							<label className="">
								<Input
									type="text"
									placeholder="Firstname"
									{...register('firstName')}
									className="w-full"
								/>
								{errors.firstName && (
									<p className="mt-1 text-sm px-2 text-red-500">
										{errors.firstName.message}
									</p>
								)}
							</label>
							<label className="">
								<Input
									type="text"
									placeholder="Lastname"
									{...register('lastName')}
									className="w-full"
								/>
								{errors.lastName && (
									<p className="mt-1 text-sm px-2 text-red-500">
										{errors.lastName.message}
									</p>
								)}
							</label>
							<label>
								<Input
									type="email"
									placeholder="Email address"
									{...register('email')}
									className="w-full"
								/>
								{errors.email && (
									<p className="mt-1 text-sm px-4 text-red-500">
										{errors.email.message}
									</p>
								)}
							</label>
							<label>
								<Input
									type="tel"
									placeholder="Phone number"
									{...register('phone')}
									className="w-full"
								/>
								{errors.phone && (
									<p className="mt-1 text-sm px-4 text-red-500">
										{errors.phone.message}
									</p>
								)}
							</label>
						</div>
						{/* select */}
						<Controller
							name="option"
							control={control}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select a service" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Select a service</SelectLabel>
											<SelectItem value="Product Design">Product Design</SelectItem>
											<SelectItem value="Brand Design">Brand Design</SelectItem>
											<SelectItem value="consultation">
												Consultation
											</SelectItem>
											<SelectItem value="others">Others</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.option && (
							<p className="mt-1 text-sm px-2 text-red-500">
								{errors.option.message}
							</p>
						)}
						{/* textarea */}
						<div>
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here"
								{...register('message')}
							/>
							{errors.message && (
								<p className="mt-1 text-sm px-4 text-red-500">
									{errors.message.message}
								</p>
							)}
						</div>

						{submitStatus && !isLoading && (
							<div
								className={`mt-3 text-center ${
									submitStatus.includes('success')
										? 'text-green-400'
										: 'text-red-500'
								}`}
							>
								{submitStatus}
							</div>
						)}
						{/* send message button */}
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={isLoading}
						>
							{isLoading ? <Spinner /> : 'Send message'}
						</Button>

					</form>
					<p className="text-muted my-4">
						If {"you're"} interested in working with me or for inquiries, please schedule a
						meeting with me using the calendar below.
					</p>

					{/* Book a call button */}
					<MagneticButton className="inline-block w-full sm:w-[50%]">
						<Button
							data-cal-namespace="30min"
							data-cal-link="retrong/30min"
							data-cal-config='{"layout":"month_view"}'
							size="lg"
							className="w-full"
						>
							Book a call
						</Button>
					</MagneticButton>
				</SectionReveal>

				<SectionReveal delay={0.2} className="flex-1" as="div">
					<div className="flex items-start xl:justify-end h-full">
						<ul className="flex flex-col gap-6">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] glass rounded-2xl flex items-center justify-center text-accent">
											<div className="text-[20px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-muted">{item.title}</p>
											<h3 className="text-base text-ink">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</SectionReveal>
			</div>
		</div>
	);
}

export default Contact
