"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'

// login schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")

})

type LoginFormValues = z.infer<typeof loginSchema>

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true)
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field >
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field >
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="enter your password"
                autoComplete="off"
                type={'password'}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button className='w-full mt-4' type='submit' disabled={isLoading}>
        {
          isLoading ? "Signing in..." : "Sign In"
        }
      </Button>
    </form>
  )
}

export default Login