import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { 
  loginSchema, 
  signupSchema, 
  type LoginFormData, 
  type SignupFormData 
} from '@/validation/authentication';

const LoginForm = ({ onSubmit, isLoading }: { onSubmit: (data: LoginFormData) => void, isLoading: boolean }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <VStack space="md" className="w-full">
      {/* Email Field */}
      <FormControl isInvalid={!!errors.email}>
        <FormControlLabel>
          <FormControlLabelText>Имейл</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Въведете вашия имейл"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Input>
          )}
        />
        {errors.email && (
          <FormControlError>
            <FormControlErrorText>{errors.email.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Password Field */}
      <FormControl isInvalid={!!errors.password}>
        <FormControlLabel>
          <FormControlLabelText>Парола</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Въведете вашата парола"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </Input>
          )}
        />
        {errors.password && (
          <FormControlError>
            <FormControlErrorText>{errors.password.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Submit Button */}
      <Button
        size="lg"
        className="bg-primary-500 mt-4"
        onPress={handleSubmit(onSubmit)}
        isDisabled={isLoading}
      >
        <ButtonText>
          {isLoading ? 'Обработване...' : 'Влизане'}
        </ButtonText>
      </Button>
    </VStack>
  );
};

const SignupForm = ({ onSubmit, isLoading }: { onSubmit: (data: SignupFormData) => void, isLoading: boolean }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    },
  });

  return (
    <VStack space="md" className="w-full">
      {/* Email Field */}
      <FormControl isInvalid={!!errors.email}>
        <FormControlLabel>
          <FormControlLabelText>Имейл</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Въведете вашия имейл"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Input>
          )}
        />
        {errors.email && (
          <FormControlError>
            <FormControlErrorText>{errors.email.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Username Field */}
      <FormControl isInvalid={!!errors.username}>
        <FormControlLabel>
          <FormControlLabelText>Потребителско име (Незадължително)</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Въведете потребителско име"
                value={value || ''}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
              />
            </Input>
          )}
        />
        {errors.username && (
          <FormControlError>
            <FormControlErrorText>{errors.username.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Password Field */}
      <FormControl isInvalid={!!errors.password}>
        <FormControlLabel>
          <FormControlLabelText>Парола</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Въведете вашата парола"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </Input>
          )}
        />
        {errors.password && (
          <FormControlError>
            <FormControlErrorText>{errors.password.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Confirm Password Field */}
      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormControlLabel>
          <FormControlLabelText>Потвърди парола</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Потвърдете вашата парола"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            </Input>
          )}
        />
        {errors.confirmPassword && (
          <FormControlError>
            <FormControlErrorText>{errors.confirmPassword.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Submit Button */}
      <Button
        size="lg"
        className="bg-primary-500 mt-4"
        onPress={handleSubmit(onSubmit)}
        isDisabled={isLoading}
      >
        <ButtonText>
          {isLoading ? 'Обработване...' : 'Създаване на акаунт'}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login form submitted with data:', data);
      alert(`Формата за влизане е изпратена успешно!\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error('Login submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Signup form submitted with data:', data);
      alert(`Формата за регистрация е изпратена успешно!\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error('Signup submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box className="flex-1 bg-background-300 min-h-screen">
      <Box className="flex-1 items-center justify-center px-4 py-safe">
        <Card className="w-full max-w-md p-6 bg-background-0 shadow-lg">
          <VStack space="md" className="w-full">
            {/* Header */}
            <Box className="items-center mb-6">
              <Text className="text-2xl font-bold text-typography-900 mb-2">
                {isLogin ? 'Добре дошли отново' : 'Създаване на акаунт'}
              </Text>
              <Text className="text-typography-500 text-center">
                {isLogin 
                  ? 'Влезте в акаунта си, за да продължите' 
                  : 'Попълнете данните по-долу, за да създадете акаунт'
                }
              </Text>
            </Box>

            {/* Form */}
            {isLogin ? (
              <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
            ) : (
              <SignupForm onSubmit={handleSignupSubmit} isLoading={isLoading} />
            )}

            {/* Toggle Form Type */}
            <HStack className="justify-center mt-4">
              <Text className="text-typography-500">
                {isLogin ? "Нямате акаунт? " : "Вече имате акаунт? "}
              </Text>
              <Button
                variant="link"
                size="sm"
                className="p-0"
                onPress={toggleForm}
              >
                <ButtonText className="text-primary-500">
                  {isLogin ? 'Регистрация' : 'Влизане'}
                </ButtonText>
              </Button>
            </HStack>
          </VStack>
        </Card>
      </Box>
    </Box>
  );
}
